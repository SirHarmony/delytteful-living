import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const DURATION = "0.75s";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Passed to IntersectionObserver; negative bottom margin fires slightly before the block is fully on screen. */
  rootMargin?: string;
  threshold?: number;
};

/**
 * Scroll-triggered reveal: starts translated down + faded, then animates up when intersecting the viewport.
 * Opacity + transform are driven via inline styles so `transform` actually transitions (Tailwind v4’s
 * translate utilities use the separate `translate` property, which did not match `transition-transform`).
 */
export default function ScrollReveal({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.08,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, threshold]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(3rem)",
    transition: instant
      ? "none"
      : `opacity ${DURATION} ${EASE}, transform ${DURATION} ${EASE}`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import { Mouse } from "lucide-react";

/**
 * Mobile Safari autoplay requires the HTML `muted` *attribute* (not only the
 * `.muted` property). React historically omits that attribute from the DOM,
 * so we mount a plain <video> via innerHTML to guarantee autoplay eligibility.
 */
function mountHeroVideo(container: HTMLDivElement) {
  container.innerHTML = `
    <video
      class="absolute inset-0 h-full w-full object-cover"
      src="/delytteful-hero-image.mp4"
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
      preload="auto"
      aria-hidden="true"
    ></video>
  `.trim();

  return container.querySelector("video");
}

export default function Hero() {
  const videoHostRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect: attach muted attributes before paint so Safari can autoplay.
  useLayoutEffect(() => {
    const host = videoHostRef.current;
    if (!host) return;

    const video = mountHeroVideo(host);
    if (!video) return;

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled || !video.paused) return;
      video.defaultMuted = true;
      video.muted = true;
      video.volume = 0;
      void video.play().catch(() => {
        // Low Power Mode / user autoplay settings can still block; retry below.
      });
    };

    tryPlay();

    const onReady = () => tryPlay();
    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      document.removeEventListener("visibilitychange", onVisibility);
      host.innerHTML = "";
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div ref={videoHostRef} className="absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-ink/85" />

      <div className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full bg-amber opacity-[0.07] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-60px] w-[360px] h-[360px] rounded-full bg-teal opacity-[0.08] blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-8 sm:mb-0">
        <p className="animate-fade-up font-body text-[10px] tracking-[0.5em] uppercase text-amber opacity-90 mb-8">
          Faith · Music · Tech · Travel
        </p>

        <h1
          className="animate-fade-up delay-100 font-display font-light text-parchment leading-[1.05] mb-6"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            letterSpacing: "0.04em",
          }}
        >
          Delytteful{" "}
          <span className="italic text-amber" style={{ fontWeight: 300 }}>
            Living
          </span>
        </h1>

        <p className="animate-fade-up delay-200 font-body font-light text-parchment/60 text-base md:text-xl tracking-wide max-w-xl mx-auto mb-12 leading-relaxed">
          Digital journals, planners, and e-books for the young adult ready to
          grow in faith, worship, tech, and travel — with intention.
        </p>

        <div className="animate-fade-up delay-300 relative mx-auto max-w-lg mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-amber opacity-40" />
          <div className="pl-6 text-left">
            <p className="font-display italic text-parchment/70 text-base md:text-lg leading-relaxed">
              &quot;Delight yourself also in the Lord, and He shall give you the{" "}
              <span className="text-amber not-italic font-normal">
                desires of your heart.
              </span>
              &quot;
            </p>
            <p className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase text-amber/70 mt-3">
              Psalm 37 : 4
            </p>
          </div>
        </div>

        <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/shop"
            className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-amber text-charcoal hover:bg-amber-deep hover:text-parchment transition-all duration-300 active:scale-[0.98]"
          >
            Browse the Shop
          </Link>
          <a
            href="#about"
            className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 border border-parchment/20 text-parchment/70 hover:border-parchment/50 hover:text-parchment transition-all duration-300 active:scale-[0.98]"
          >
            Our Story
          </a>
        </div>
      </div>

      <div className="animate-fade-up delay-600 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-parchment/30">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-parchment/30 to-transparent" />
        <Mouse className="w-6 md:w-8 h-6 md:h-8 text-parchment animate-bounce" />
      </div>
    </section>
  );
}

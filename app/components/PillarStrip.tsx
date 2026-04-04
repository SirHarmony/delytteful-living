import { Link } from "react-router";

const pillars = [
  {
    n: "01",
    pillarLabel: "Pillar one",
    title: "Faith & Purpose",
    to: "/faith",
    className: "bg-amber",
    numClass: "text-white/25",
  },
  {
    n: "02",
    pillarLabel: "Pillar two",
    title: "Music & Worship",
    to: "/music",
    className: "bg-wine",
    numClass: "text-white/25",
  },
  {
    n: "03",
    pillarLabel: "Pillar three",
    title: "Tech & Career",
    to: "/tech",
    className: "bg-teal",
    numClass: "text-white/25",
  },
  {
    n: "04",
    pillarLabel: "Pillar four",
    title: "Africa Travel",
    to: "/travel",
    className: "bg-ink",
    numClass: "text-white/20",
  },
] as const;

export default function PillarStrip() {
  return (
    <section
      className="relative bg-parchment px-0"
      aria-label="Four pillars: Faith, Music, Tech, Travel"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white max-w-[100vw] mx-auto border-y border-white">
        {pillars.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className={`group flex items-stretch min-h-[120px] md:min-h-[140px] ${p.className} text-white transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
          >
            <span
              className={`font-display text-5xl sm:text-6xl md:text-7xl font-light leading-none pl-4 md:pl-6 pr-2 md:pr-3 select-none flex items-center ${p.numClass}`}
              aria-hidden
            >
              {p.n}
            </span>
            <div className="flex flex-col justify-center py-5 pr-4 md:pr-6 flex-1 min-w-0">
              <span className="font-body text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-white/85 mb-1.5">
                {p.pillarLabel}
              </span>
              <span className="font-display text-lg md:text-xl lg:text-2xl font-light leading-tight text-white">
                {p.title}
              </span>
              <span className="font-body text-[9px] tracking-[0.2em] uppercase text-white/50 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                View pillar →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

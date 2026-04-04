import { Link } from "react-router";
import { pillarOrder, pillarDefinitions } from "~/data/pillars";

const accent = {
  faith: "bg-amber-pale border-amber",
  music: "bg-wine-pale border-wine",
  tech: "bg-teal-pale border-teal",
  travel: "bg-parchment-dark border-charcoal",
} as const;

const headingColor = {
  faith: "text-amber-deep",
  music: "text-wine-deep",
  tech: "text-teal-deep",
  travel: "text-charcoal",
} as const;

const tagColor = {
  faith: "text-amber-deep bg-amber-light",
  music: "text-wine-deep bg-wine-light",
  tech: "text-teal-deep bg-teal-light",
  travel: "text-warm-grey bg-parchment-dark",
} as const;

export default function Pillars() {
  return (
    <section id="pillars" className="bg-parchment-dark py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-grey mb-4">
            02 — What We Create
          </p>
          <h2
            className="font-display font-light text-charcoal leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Four pillars.{" "}
            <span className="italic text-amber-deep">One mission.</span>
          </h2>
          <p className="font-body font-light text-warm-grey mt-5 max-w-lg mx-auto leading-relaxed text-xs md:text-base">
            Faith · Music · Tech · Travel — resources for the ambitious young
            adult.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-px bg-parchment-dark/50">
          {pillarOrder.map((slug) => {
            const pillar = pillarDefinitions[slug];
            return (
              <div
                key={slug}
                className={`bg-parchment p-6 flex flex-col group hover:shadow-lg transition-shadow duration-500 border-t-4 ${accent[slug]}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-5xl md:text-6xl font-light text-parchment-dark select-none leading-none">
                    {pillar.number}
                  </span>
                  <span className="text-3xl">{pillar.emoji}</span>
                </div>

                <span
                  className={`inline-block self-start font-body text-[9px] md:text-xs tracking-[0.3em] uppercase px-3 py-1.5 mb-4 ${tagColor[slug]}`}
                >
                  {pillar.label}
                </span>

                <h3
                  className={`font-display text-xl md:text-2xl font-light leading-snug mb-4 ${headingColor[slug]}`}
                >
                  {pillar.heading}
                </h3>

                <p className="font-body font-light text-warm-grey text-xs md:text-base leading-[1.85] mb-8 flex-1">
                  {pillar.body}
                </p>

                <div className="w-8 h-px bg-parchment-dark mb-6 group-hover:w-16 transition-all duration-500" />

                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-body text-[12px] text-warm-grey"
                    >
                      <span className="w-1 h-1 rounded-full bg-current opacity-40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/${slug}`}
                  className="mt-8 self-start font-body text-[10px] tracking-[0.25em] uppercase text-charcoal hover:text-amber-deep transition-colors active:scale-[0.98]"
                >
                  Explore pillar →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const stats = [
    { value: "10+", label: "Digital Resources" },
    { value: "4", label: "Content Pillars" },
    { value: "∞", label: "Young Lives to Impact" },
  ];

  return (
    <section
      id="about"
      className="relative bg-parchment py-28 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-light opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-grey mb-6">
            01 — Our Story
          </p>

          <h2
            className="font-display font-light text-charcoal leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Born from a desire to{" "}
            <span className="italic text-amber-deep">delight</span> in every
            dimension of life.
          </h2>

          <div className="space-y-5 font-body font-light text-warm-grey leading-[1.9] text-xs md:text-base">
            <p>
              Delytteful Living was built at the intersection of four passions — faith, worship, building on the web, and adventure
              — a deep Christian faith, a love for building things on the web,
              and an irresistible pull toward the beauty and diversity of
              nature.
            </p>
            <p>
              We create journals, workbooks, guides, and digital resources for
              the young adult who refuses to put their life in a box. The one
              who wants to grow spiritually, build a meaningful career in tech,
              and see the world — all at once.
            </p>
            <p>
              Everything we make is grounded in Psalm 37:4. We believe that when
              you delight in the Lord, He shapes the very desires of your heart
              — and gives you the courage to pursue them.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="w-8 h-px bg-amber" />
            <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-amber-deep">
              Rooted in faith. Built for purpose.
            </p>
          </div>
        </div>

        {/* Right — stats + visual */}
        <div className="flex flex-col gap-6">
          {/* Decorative quote block */}
          <div className="bg-charcoal p-10 relative overflow-hidden">
            <div className="absolute top-4 right-6 font-display text-[120px] leading-none text-amber/10 select-none pointer-events-none">
              "
            </div>
            <p className="font-display italic text-parchment text-xl md:text-2xl leading-relaxed relative z-10">
              The ambitious young adult who wants to grow in faith, career, and
              adventure —
              <span className="text-amber"> that's who we're here for.</span>
            </p>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-amber/60 mt-6">
              — Delytteful Living
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-px bg-parchment-dark">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-parchment p-8 flex flex-col items-center text-center gap-2"
              >
                <span className="font-display text-4xl font-light text-charcoal">
                  {stat.value}
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-grey">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Delytte Safaris callout */}
          <div className="border border-parchment-dark p-6 flex items-start gap-4">
            <div className="w-1 self-stretch bg-amber flex-shrink-0" />
            <div>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-warm-grey mb-1">
                Also from our founder
              </p>
              <p className="font-display text-xl text-charcoal">
                Delytte Safaris
              </p>
              <p className="font-body text-xs md:text-sm text-warm-grey mt-1 leading-relaxed">
                Our Africa travel canvas — curating bespoke authentic safari and
                tour experiences across the continent.
              </p>
              <a
                href="https://delytte-safaris.sirharmony.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 font-body text-[10px] tracking-[0.25em] uppercase text-amber-deep hover:text-charcoal transition-colors"
              >
                Visit Delytte Safaris →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

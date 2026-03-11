const pillars = [
  {
    number: "01",
    emoji: "🙏",
    label: "Faith & Purpose",
    color: "rose",
    heading: "Rooted in something greater.",
    body: "For the young Christian navigating identity, purpose, and spiritual growth. Our faith resources help you build a devotional life that transforms your everyday — not just your Sundays.",
    items: [
      "90-day devotional journals",
      "Bible study workbooks",
      "Purpose & calling guides",
      "Prayer planners",
    ],
    accent: "bg-rose-light border-rose",
    headingColor: "text-rose-deep",
    tagColor: "text-rose-deep bg-rose-light",
  },
  {
    number: "02",
    emoji: "💻",
    label: "Tech & Career",
    color: "sage",
    heading: "From self-taught to unstoppable.",
    body: "Practical, no-fluff resources for the self-taught developer on their way to going professional. Roadmaps, trackers, and guides built by someone who's walked the path.",
    items: [
      "Frontend dev roadmaps",
      "Portfolio project guides",
      "Job prep workbooks",
      "Coding habit trackers",
    ],
    accent: "bg-sage-light border-sage",
    headingColor: "text-sage-deep",
    tagColor: "text-sage-deep bg-sage-light",
  },
  {
    number: "03",
    emoji: "✈️",
    label: "Africa Travel",
    color: "charcoal",
    heading: "Africa is waiting for you.",
    body: "Insider travel resources for young adults ready to explore the African continent on a budget, with intention, and without the overwhelm. Written by someone who calls it home.",
    items: [
      "Country itinerary planners",
      "Budget travel guides",
      "Packing checklists",
      "Safari planning resources",
    ],
    accent: "bg-cream-dark border-warm-grey",
    headingColor: "text-charcoal",
    tagColor: "text-warm-grey bg-cream-dark",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="bg-cream-dark py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-grey mb-4">
            02 — What We Create
          </p>
          <h2
            className="font-display font-light text-charcoal leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Three pillars.{" "}
            <span className="italic text-rose-deep">One mission.</span>
          </h2>
          <p className="font-body font-light text-warm-grey mt-5 max-w-lg mx-auto leading-relaxed text-[15px]">
            Every resource we create lives within one of three pillars — each
            one serving a different dimension of the ambitious young adult's
            life.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-cream-dark/50">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="bg-cream p-10 flex flex-col group hover:shadow-lg transition-shadow duration-500"
            >
              {/* Number + emoji */}
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-6xl font-light text-cream-dark select-none leading-none">
                  {pillar.number}
                </span>
                <span className="text-3xl">{pillar.emoji}</span>
              </div>

              {/* Pillar label */}
              <span
                className={`inline-block self-start font-body text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 mb-4 ${pillar.tagColor}`}
              >
                {pillar.label}
              </span>

              {/* Heading */}
              <h3
                className={`font-display text-2xl font-light leading-snug mb-4 ${pillar.headingColor}`}
              >
                {pillar.heading}
              </h3>

              {/* Body */}
              <p className="font-body font-light text-warm-grey text-[13.5px] leading-[1.85] mb-8 flex-1">
                {pillar.body}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-cream-dark mb-6 group-hover:w-16 transition-all duration-500" />

              {/* Resource list */}
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

              {/* CTA */}
              <a
                href="#shop"
                className="mt-8 self-start font-body text-[10px] tracking-[0.25em] uppercase text-charcoal hover:text-rose-deep transition-colors"
              >
                Browse resources →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const videos = [
  {
    pillar: "🙏 Faith",
    title: "5 Bible Verses Every Young Adult Needs in Their 20s",
    duration: "8 min",
  },
  {
    pillar: "💻 Tech",
    title: "The Honest Self-Taught Frontend Dev Roadmap for 2025",
    duration: "14 min",
  },
  {
    pillar: "✈️ Travel",
    title: "10 African Countries You Can Visit on a Student Budget",
    duration: "11 min",
  },
];

export default function YouTube() {
  return (
    <section
      id="youtube"
      className="relative bg-charcoal py-28 px-6 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-rose opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sage opacity-[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <p className="font-body text-[10px] tracking-[0.45em] uppercase text-rose/70 mb-6">
              04 — YouTube Channel
            </p>
            <h2
              className="font-display font-light text-cream leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
            >
              Free content,{" "}
              <span className="italic text-rose">every week.</span>
            </h2>
            <p className="font-body font-light text-cream/50 leading-relaxed text-[15px] mb-10 max-w-md">
              The Delytte Living YouTube channel brings our three pillars to
              life — practical videos on faith, tech, and travel, completely
              free. New content every week.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Faith & Devotional",
                "Frontend Dev Tips",
                "Africa Travel Guides",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-body text-[10px] tracking-[0.2em] uppercase px-4 py-2 border border-cream/10 text-cream/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://youtube.com/@DelytteLiving"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-rose text-charcoal hover:bg-rose-deep hover:text-cream transition-all duration-300 group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                aria-hidden
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              Subscribe on YouTube
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>

          {/* Right — upcoming videos */}
          <div className="flex flex-col gap-px">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-cream/30 mb-4">
              Coming Soon
            </p>
            {videos.map((video, i) => (
              <div
                key={video.title}
                className="bg-cream/5 hover:bg-cream/10 transition-colors duration-300 p-6 flex items-start gap-5 group cursor-default border border-transparent hover:border-rose/20"
              >
                <span className="font-display text-3xl font-light text-cream/10 leading-none flex-shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[9px] tracking-[0.25em] uppercase text-rose/60 mb-2">
                    {video.pillar}
                  </p>
                  <p className="font-display text-[17px] font-light text-cream/80 leading-snug group-hover:text-cream transition-colors">
                    {video.title}
                  </p>
                </div>
                <span className="font-body text-[10px] text-cream/30 flex-shrink-0 self-center">
                  {video.duration}
                </span>
              </div>
            ))}
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/20 text-center pt-4">
              + many more across all 3 pillars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

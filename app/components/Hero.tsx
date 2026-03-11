export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-charcoal px-6">
      {/* Decorative background circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full bg-rose opacity-[0.07] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-60px] w-[360px] h-[360px] rounded-full bg-sage opacity-[0.08] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-deep opacity-[0.04] blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="animate-fade-up font-body text-[10px] tracking-[0.5em] uppercase text-rose opacity-80 mb-8">
          Faith · Tech · Travel
        </p>

        {/* Wordmark */}
        <h1
          className="animate-fade-up delay-100 font-display font-light text-cream leading-[1.05] mb-6"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            letterSpacing: "0.04em",
          }}
        >
          Delytte{" "}
          <span className="italic text-rose" style={{ fontWeight: 300 }}>
            Living
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up delay-200 font-body font-light text-cream/60 text-lg md:text-xl tracking-wide max-w-xl mx-auto mb-12 leading-relaxed">
          Resources for the young adult ready to grow in faith, build a career
          in tech, and explore the beauty of Africa.
        </p>

        {/* Anchor verse */}
        <div className="animate-fade-up delay-300 relative mx-auto max-w-lg mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-rose opacity-40" />
          <div className="pl-6 text-left">
            <p className="font-display italic text-cream/70 text-lg leading-relaxed">
              "Delight yourself also in the Lord, and He shall give you the{" "}
              <span className="text-rose not-italic font-normal">
                desires of your heart.
              </span>
              "
            </p>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rose/60 mt-3">
              Psalm 37 : 4
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#shop"
            className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-rose text-charcoal hover:bg-rose-deep hover:text-cream transition-all duration-300"
          >
            Browse the Shop
          </a>
          <a
            href="#about"
            className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 border border-cream/20 text-cream/70 hover:border-cream/50 hover:text-cream transition-all duration-300"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up delay-600 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-cream/30">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}

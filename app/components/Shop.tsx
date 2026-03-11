import { useState } from "react";
import { products, type Pillar } from "~/data/products";
import ProductCard from "~/components/ProductCard";

type Filter = "all" | Pillar;

const filters: { value: Filter; label: string; emoji: string }[] = [
  { value: "all", label: "All Resources", emoji: "✦" },
  { value: "faith", label: "Faith & Purpose", emoji: "🙏" },
  { value: "tech", label: "Tech & Career", emoji: "💻" },
  { value: "travel", label: "Africa Travel", emoji: "✈️" },
];

export default function Shop() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.pillar === active);

  return (
    <section id="shop" className="bg-cream py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-grey mb-4">
            03 — The Shop
          </p>
          <h2
            className="font-display font-light text-charcoal leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Resources to help you{" "}
            <span className="italic text-rose-deep">thrive.</span>
          </h2>
          <p className="font-body font-light text-warm-grey mt-5 max-w-md mx-auto text-xs md:text-base leading-relaxed">
            Journals, workbooks, roadmaps and guides — each crafted with
            intention for the ambitious young adult.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`font-body text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                active === filter.value
                  ? "bg-charcoal text-cream border-charcoal"
                  : "bg-transparent text-warm-grey border-cream-dark hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {filter.emoji} {filter.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10 bg-cream-dark">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Store CTAs */}
        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-cream-dark">
          {/* Amazon */}
          <a
            href="https://payhip.com/DelytteLiving"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-grey text-cream p-10 flex items-center justify-between group hover:bg-warm-grey/90 transition-colors duration-500 active:scale-[0.98]"
          >
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/50 mb-2">
                Best margins · Direct support
              </p>
              <p className="font-display text-2xl font-light">Shop on Amazon</p>
            </div>
            <span className="text-cream/40 group-hover:text-cream group-hover:translate-x-2 transition-all duration-300 text-2xl">
              →
            </span>
          </a>

          {/* Etsy */}
          <a
            href="https://etsy.com/shop/DelytteLiving"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 md:ml-1 bg-rose-light text-charcoal p-10 flex items-center justify-between group hover:bg-rose-light transition-colors duration-500 active:scale-[0.98]"
          >
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-grey mb-2">
                Reviews · Global marketplace
              </p>
              <p className="font-display text-2xl font-light">Shop on Etsy</p>
            </div>
            <span className="text-warm-grey group-hover:text-charcoal group-hover:translate-x-2 transition-all duration-300 text-2xl">
              →
            </span>
          </a>

          {/* Payhip */}
          <a
            href="https://payhip.com/DelytteLiving"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal text-cream p-10 flex items-center justify-between group hover:bg-rose-deep transition-colors duration-500 active:scale-[0.98]"
          >
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/50 mb-2">
                Best margins · Direct support
              </p>
              <p className="font-display text-2xl font-light">Shop on Payhip</p>
            </div>
            <span className="text-cream/40 group-hover:text-cream group-hover:translate-x-2 transition-all duration-300 text-2xl">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import {
  searchProducts,
  getProductBySlug,
  type Pillar,
} from "~/data/products";
import ProductCard from "~/components/ProductCard";
import { Star } from "lucide-react";
import { getRecentProductSlugs } from "~/lib/recentlyViewed";

type Filter = "all" | Pillar;

const filters: { value: Filter; label: string; emoji: string }[] = [
  { value: "all", label: "All Resources", emoji: "✦" },
  { value: "faith", label: "Faith & Purpose", emoji: "🙏" },
  { value: "music", label: "Music & Worship", emoji: "🎵" },
  { value: "tech", label: "Tech & Career", emoji: "💻" },
  { value: "travel", label: "Africa Travel", emoji: "✈️" },
];

const ETSY = "https://www.etsy.com/shop/DelytteLiving";
const AMZ = "https://www.amazon.com/s?k=delytteful+living+journal";

export default function ShopPageContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState<Filter>("all");
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);

  useEffect(() => {
    setRecentSlugs(getRecentProductSlugs());
  }, []);

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);


  useEffect(() => {
    const t = setTimeout(() => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          if (query.trim()) next.set("q", query.trim());
          else next.delete("q");
          return next;
        },
        { replace: true },
      );
    }, 200);
    return () => clearTimeout(t);
  }, [query, setSearchParams]);

  const searched = useMemo(() => searchProducts(query), [query]);

  const filtered = useMemo(() => {
    if (active === "all") return searched;
    return searched.filter((p) => p.pillar === active);
  }, [active, searched]);

  const recentProducts = useMemo(() => {
    return recentSlugs
      .map((slug) => getProductBySlug(slug))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));
  }, [recentSlugs]);

  return (
    <section className="bg-parchment py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-grey mb-4">
            The Shop
          </p>
          <h1
            className="font-display font-light text-charcoal leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Resources to help you{" "}
            <span className="italic text-amber-deep">thrive.</span>
          </h1>
          <p className="font-body font-light text-warm-grey mt-5 max-w-md mx-auto text-xs md:text-base leading-relaxed">
            Journals, planners, roadmaps and guides — listed on{" "}
            <strong className="text-charcoal font-normal">Etsy</strong> and{" "}
            <strong className="text-charcoal font-normal">Amazon KDP</strong>.
          </p>
          <p className="font-body text-[11px] text-warm-grey mt-3 max-w-lg mx-auto">
            Prices shown in{" "}
            <span className="text-charcoal font-medium">USD</span>. Your bank or
            marketplace may convert at checkout if you purchase outside the US.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10">
          <label htmlFor="shop-search" className="sr-only">
            Search products
          </label>
          <input
            id="shop-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or topic…"
            className="w-full font-body text-sm px-4 py-3 border border-parchment-dark bg-white text-charcoal placeholder:text-warm-grey/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={`font-body text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                active === filter.value
                  ? "bg-charcoal text-parchment border-charcoal"
                  : "bg-transparent text-warm-grey border-parchment-dark hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {filter.emoji} {filter.label}
            </button>
          ))}
        </div>

        {recentProducts.length > 0 && (
          <div className="mb-14">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-warm-grey mb-4">
              Recently viewed
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {recentProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/shop/${p.slug}`}
                  className="font-body text-xs text-amber-deep hover:text-charcoal border border-parchment-dark px-3 py-2 bg-white"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10 bg-parchment-dark">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-body text-warm-grey py-16">
            No products match your search.{" "}
            <button
              type="button"
              className="text-amber-deep underline"
              onClick={() => {
                setQuery("");
                setActive("all");
              }}
            >
              Clear filters
            </button>
          </p>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between bg-charcoal p-4 md:p-8 mt-8 md:mt-10">
          <div className="max-w-[450px] mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-amber w-3 md:w-4 h-3 md:h-4" />
              <p className="text-amber-deep uppercase text-xs font-body">
                Featured Bundle
              </p>
            </div>
            <h2 className="text-white/70 font-display text-xl md:text-3xl font-thin mb-4">
              The Delytteful{" "}
              <span className="text-amber-deep italic">Starter Bundle</span>
            </h2>
            <p className="font-body text-xs text-white/60 font-extralight">
              Curated across Faith, Music, Tech, and Travel — update with final
              bundle listing on Etsy / Amazon.
            </p>
          </div>

          <div className="self-start">
            <p className="text-amber/60 font-extralight font-body text-sm md:text-base line-through mb-1">
              $28.00
            </p>
            <p className="text-teal/50 font-body text-xs uppercase mb-6 tracking-wide">
              You save $9 →
            </p>
            <p className="text-white/90 text-3xl md:text-5xl font-display mb-2 md:mb-6">
              $19.00
            </p>
            <p className="font-body text-[10px] text-white/40 mb-4">USD</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={ETSY}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-body text-[11px] bg-amber text-charcoal hover:bg-amber-deep hover:text-parchment tracking-[0.2em] transition-all duration-300 px-8 py-4"
              >
                BUNDLE ON ETSY
              </a>
              <a
                href={AMZ}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-body text-[11px] border border-white/20 text-white/80 hover:border-amber hover:text-amber tracking-[0.2em] transition-all px-8 py-4"
              >
                ON AMAZON
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-parchment-dark">
          <a
            href={AMZ}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-grey text-parchment p-10 flex items-center justify-between group hover:bg-warm-grey/90 transition-colors duration-500 active:scale-[0.98]"
          >
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-parchment/50 mb-2">
                Kindle / KDP
              </p>
              <p className="font-display text-2xl font-light">Shop on Amazon</p>
            </div>
            <span className="text-parchment/40 group-hover:text-parchment group-hover:translate-x-2 transition-all duration-300 text-2xl">
              →
            </span>
          </a>

          <a
            href={ETSY}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-light text-charcoal p-10 flex items-center justify-between group hover:bg-amber-light/90 transition-colors duration-500 active:scale-[0.98]"
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
        </div>
      </div>
    </section>
  );
}

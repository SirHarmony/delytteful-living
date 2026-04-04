import { Link } from "react-router";
import type { Product } from "~/data/products";
import { pillarMeta } from "~/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const meta = pillarMeta[product.pillar];

  const badgeColors: Record<string, string> = {
    Bestseller: "bg-amber text-charcoal",
    Flagship: "bg-charcoal text-parchment",
    Popular: "bg-teal text-charcoal",
    New: "bg-amber-deep text-parchment",
    "Best Value": "bg-teal-deep text-parchment",
  };

  const typeLabel: Record<string, string> = {
    "low-content": "Printable / PDF",
    "high-content": "E-Book",
    bundle: "Bundle",
  };

  const placeholderBg =
    product.pillar === "faith"
      ? "#E8D4A0"
      : product.pillar === "music"
        ? "#D4A0A8"
        : product.pillar === "tech"
          ? "#C2D6D6"
          : "#EDE9E2";

  return (
    <article className="w-full lg:max-w-[260px] xl:max-w-[280px] group bg-parchment flex flex-col relative overflow-hidden border border-parchment-dark hover:border-amber transition-colors duration-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      {/* 2:3 — common print / KDP trade cover proportion (taller than 3:4) */}
      <div className="relative aspect-[2/3] overflow-hidden bg-parchment-dark">
        <img
          src={product.cover_image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent && !parent.querySelector(".cover-placeholder")) {
              const placeholder = document.createElement("div");
              placeholder.className =
                "cover-placeholder w-full h-full flex flex-col items-center justify-center gap-3 p-8";
              placeholder.style.background = placeholderBg;
              const emoji = document.createElement("span");
              emoji.style.fontSize = "3rem";
              emoji.textContent = meta.emoji;
              const title = document.createElement("p");
              title.style.cssText =
                "font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:300;text-align:center;color:#2E2E2E;line-height:1.4;";
              title.textContent = product.title;
              placeholder.appendChild(emoji);
              placeholder.appendChild(title);
              parent.appendChild(placeholder);
            }
          }}
        />

        {product.badge && (
          <span
            className={`absolute top-3 left-3 font-body text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 ${badgeColors[product.badge] ?? "bg-parchment text-charcoal"}`}
          >
            {product.badge}
          </span>
        )}

        <span
          className={`absolute bottom-3 left-3 font-body text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 ${meta.bg} ${meta.color}`}
        >
          {meta.emoji} {meta.label}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-lg font-light text-charcoal leading-snug flex-1">
            <Link
              to={`/shop/${product.slug}`}
              className="hover:text-amber-deep transition-colors"
            >
              {product.title}
            </Link>
          </h3>
          <span className="font-body font-medium text-teal-deep text-base flex-shrink-0">
            ${product.price}
          </span>
        </div>

        <span className="font-body text-[9px] tracking-[0.2em] uppercase text-warm-grey mb-3">
          {typeLabel[product.type]}
        </span>

        <p className="font-body font-light text-warm-grey text-[12.5px] leading-relaxed mb-6 flex-1">
          {product.description}
        </p>

        <div className="flex gap-2 mt-auto">
          <a
            href={product.amazon_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-body text-[10px] tracking-[0.2em] uppercase py-3 bg-charcoal text-parchment hover:bg-amber-deep transition-colors duration-300 active:scale-[0.98]"
          >
            Amazon
          </a>

          <a
            href={product.etsy_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-body text-[10px] tracking-[0.2em] uppercase py-3 border border-parchment-dark text-warm-grey hover:border-charcoal hover:text-charcoal transition-colors duration-300 active:scale-[0.98]"
          >
            Etsy
          </a>
        </div>
      </div>
    </article>
  );
}

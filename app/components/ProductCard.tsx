import { Product } from "~/data/products";
import { pillarMeta } from "~/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const meta = pillarMeta[product.pillar];

  const badgeColors: Record<string, string> = {
    Bestseller: "bg-rose text-charcoal",
    Flagship: "bg-charcoal text-cream",
    Popular: "bg-sage text-charcoal",
    New: "bg-rose-deep text-cream",
    "Best Value": "bg-sage-deep text-cream",
  };

  const typeLabel: Record<string, string> = {
    "low-content": "Printable / PDF",
    "high-content": "E-Book",
    bundle: "Bundle",
  };

  return (
    <article className="group bg-cream flex flex-col relative overflow-hidden border border-cream-dark hover:border-rose transition-colors duration-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      {/* Cover image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
        <img
          src={product.cover_image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            /* Fallback cover placeholder */
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent && !parent.querySelector(".cover-placeholder")) {
              const placeholder = document.createElement("div");
              placeholder.className =
                "cover-placeholder w-full h-full flex flex-col items-center justify-center gap-3 p-8";
              placeholder.style.background =
                product.pillar === "faith"
                  ? "#EDD8D8"
                  : product.pillar === "tech"
                    ? "#C2D4BF"
                    : "#F0E8DE";
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

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 font-body text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 ${badgeColors[product.badge] ?? "bg-cream text-charcoal"}`}
          >
            {product.badge}
          </span>
        )}

        {/* Pillar tag */}
        <span
          className={`absolute bottom-3 left-3 font-body text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 ${meta.bg} ${meta.color}`}
        >
          {meta.emoji} {meta.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-lg font-light text-charcoal leading-snug flex-1">
            {product.title}
          </h3>
          <span className="font-body font-medium text-sage-deep text-base flex-shrink-0">
            ${product.price}
          </span>
        </div>

        <span className="font-body text-[9px] tracking-[0.2em] uppercase text-warm-grey mb-3">
          {typeLabel[product.type]}
        </span>

        <p className="font-body font-light text-warm-grey text-[12.5px] leading-relaxed mb-6 flex-1">
          {product.description}
        </p>

        {/* CTA buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={product.payhip_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-body text-[10px] tracking-[0.2em] uppercase py-3 bg-charcoal text-cream hover:bg-rose-deep transition-colors duration-300"
          >
            Buy Direct
          </a>
          <a
            href={product.etsy_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-body text-[10px] tracking-[0.2em] uppercase py-3 border border-cream-dark text-warm-grey hover:border-charcoal hover:text-charcoal transition-colors duration-300"
          >
            Etsy
          </a>
        </div>
      </div>
    </article>
  );
}

import { useEffect } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/shop.$slug";
import { getProductBySlug, pillarMeta } from "~/data/products";
import MarketingShell from "~/components/MarketingShell";
import { ProductJsonLd } from "~/components/JsonLd";
import { recordProductView } from "~/lib/recentlyViewed";

export function loader({ params }: Route.LoaderArgs) {
  const product = getProductBySlug(params.slug ?? "");
  if (!product) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  return { product };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data?.product) return [{ title: "Not found" }];
  return [
    { title: `${data.product.title} — Delytteful Living` },
    { name: "description", content: data.product.description },
  ];
}

export default function ProductDetail({ loaderData }: Route.ComponentProps) {
  const { product } = loaderData;

  useEffect(() => {
    recordProductView(product.slug);
  }, [product.slug]);

  const meta = pillarMeta[product.pillar];

  return (
    <MarketingShell>
      <ProductJsonLd product={product} />
      <article className="bg-parchment pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-warm-grey mb-4">
            <Link to="/shop" className="hover:text-amber-deep">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className={`inline-flex items-center gap-1 ${meta.color}`}>
              {meta.emoji} {meta.label}
            </span>
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-light text-charcoal mb-4">
            {product.title}
          </h1>
          <p className="font-body text-2xl text-teal-deep mb-2">${product.price}</p>
          <p className="font-body text-xs text-warm-grey mb-10">
            Listed in USD on Etsy and Amazon; conversion may apply for
            international orders.
          </p>

          <div className="aspect-[2/3] max-w-[min(100%,280px)] sm:max-w-xs mx-auto mb-10 overflow-hidden border border-parchment-dark bg-parchment-dark shadow-md">
            <img
              src={product.cover_image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href={product.etsy_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-body text-[11px] tracking-[0.2em] uppercase py-4 px-6 bg-amber text-charcoal hover:bg-amber-deep hover:text-parchment transition-colors"
            >
              Buy on Etsy
            </a>
            <a
              href={product.amazon_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-body text-[11px] tracking-[0.2em] uppercase py-4 px-6 border border-charcoal text-charcoal hover:bg-charcoal hover:text-parchment transition-colors"
            >
              Buy on Amazon (KDP)
            </a>
          </div>

          <div className="prose prose-neutral max-w-none mb-12">
            <h2 className="font-display text-xl text-charcoal mb-3">About</h2>
            <p className="font-body text-warm-grey leading-relaxed whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-display text-xl text-charcoal mb-3">
              What&apos;s inside
            </h2>
            <ul className="space-y-2">
              {product.whatsInside.map((line) => (
                <li
                  key={line}
                  className="font-body text-sm text-warm-grey flex gap-2"
                >
                  <span className="text-amber-deep mt-1">·</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="font-display text-xl text-charcoal mb-3">
              Sample pages
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {product.samplePages.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="aspect-[2/3] overflow-hidden border border-parchment-dark bg-parchment-dark"
                >
                  <img
                    src={src}
                    alt={`Sample page ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </MarketingShell>
  );
}

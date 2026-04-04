import type { Product } from "~/data/products";
import { getSiteUrl } from "~/lib/siteUrl";

export function OrganizationJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Delytteful Living",
    url,
    description:
      "Digital journals, planners, and e-books for faith, music, tech, and travel.",
    sameAs: [
      "https://www.youtube.com/@DelytteLiving",
      "https://www.etsy.com/shop/DelytteLiving",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Delytteful Living",
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/shop?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  const url = getSiteUrl();
  const pageUrl = `${url}/shop/${product.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.cover_image,
    brand: {
      "@type": "Brand",
      name: "Delytteful Living",
    },
    offers: [
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: String(product.price),
        url: product.etsy_url,
        availability: "https://schema.org/OnlineOnly",
        seller: { "@type": "Organization", name: "Etsy" },
      },
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: String(product.price),
        url: product.amazon_url,
        availability: "https://schema.org/OnlineOnly",
        seller: { "@type": "Organization", name: "Amazon" },
      },
    ],
    url: pageUrl,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

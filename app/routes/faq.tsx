import type { Route } from "./+types/faq";
import { Link } from "react-router";
import MarketingShell from "~/components/MarketingShell";

const faqs = [
  {
    q: "Where are products sold?",
    a: "Digital products are listed on Etsy and Amazon (KDP). This site links to those storefronts; checkout happens on Etsy or Amazon.",
  },
  {
    q: "What currency are prices in?",
    a: "We display prices in USD. International banks or marketplaces may convert to your local currency at checkout.",
  },
  {
    q: "Do I get a physical book?",
    a: "Many listings are print-on-demand or digital PDFs depending on the product — check the Etsy or Amazon listing for format details.",
  },
  {
    q: "Is the free lead magnet really free?",
    a: "Yes — it is a sample resource to thank you for joining the list. Replace this copy when your real magnet is live.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ — Delytteful Living" },
    {
      name: "description",
      content: "Common questions about Delytteful Living products and storefronts.",
    },
  ];
}

export default function FaqRoute() {
  return (
    <MarketingShell>
      <div className="bg-parchment pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
            Frequently asked questions
          </h1>
          <p className="font-body text-warm-grey mb-12">
            Quick answers about shopping, formats, and pricing.{" "}
            <Link to="/" className="text-amber-deep hover:underline">
              Back to home
            </Link>
            .
          </p>
          <ul className="space-y-8">
            {faqs.map((item) => (
              <li key={item.q} className="border-b border-parchment-dark pb-8">
                <h2 className="font-display text-lg text-charcoal mb-2">
                  {item.q}
                </h2>
                <p className="font-body text-sm text-warm-grey leading-relaxed">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MarketingShell>
  );
}

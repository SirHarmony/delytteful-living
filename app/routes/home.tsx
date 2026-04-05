import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import PillarStrip from "~/components/PillarStrip";
import ScrollReveal from "~/components/ScrollReveal";
import About from "~/components/About";
import Pillars from "~/components/Pillars";
import LeadMagnet from "~/components/LeadMagnet";
import YouTube from "~/components/YouTube";
import Footer from "~/components/Footer";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Delytteful Living — Faith · Music · Tech · Travel" },
    {
      name: "description",
      content:
        "Digital journals, planners, and e-books for faith, music, tech, and travel. Grow with intention.",
    },
    { property: "og:title", content: "Delytteful Living" },
    {
      property: "og:description",
      content:
        "Faith · Music · Tech · Travel — resources for the ambitious young adult.",
    },
  ];
}

function ShopTeaser() {
  return (
    <section className="bg-parchment py-20 px-6 border-y border-parchment-dark">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-grey mb-4">
          The Shop
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
          Explore every product
        </h2>
        <p className="font-body text-warm-grey mb-8 text-sm md:text-base">
          Filter by pillar, search by topic, and open full detail pages with
          sample spreads. Prices in USD on Etsy and Amazon.
        </p>
        <Link
          to="/shop"
          className="inline-block font-body text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-charcoal text-parchment hover:bg-amber-deep transition-colors"
        >
          Go to shop
        </Link>
      </div>
    </section>
  );
}

function FaqTeaser() {
  return (
    <section className="bg-parchment-dark py-12 px-6">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-warm-grey text-center sm:text-left">
          Questions about formats, storefronts, or international pricing?
        </p>
        <Link
          to="/faq"
          className="font-body text-[10px] tracking-[0.25em] uppercase text-amber-deep border border-amber-deep/40 px-5 py-2 hover:bg-amber hover:text-charcoal transition-colors"
        >
          Read FAQ
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollReveal>
        <PillarStrip />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Pillars />
      </ScrollReveal>
      <ScrollReveal>
        <ShopTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <LeadMagnet />
      </ScrollReveal>
      <ScrollReveal>
        <YouTube />
      </ScrollReveal>
      <ScrollReveal>
        <FaqTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}

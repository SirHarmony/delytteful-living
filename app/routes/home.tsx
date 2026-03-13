import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Pillars from "~/components/Pillars";
import Shop from "~/components/Shop";
import YouTube from "~/components/YouTube";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Delytte Living — Faith · Tech · Travel" },
    {
      name: "description",
      content:
        "Digital journals, workbooks and guides for the ambitious young adult. Grow in faith, build a career in tech, and explore Africa — with intention.",
    },
    { property: "og:title", content: "Delytte Living" },
    {
      property: "og:description",
      content:
        "Faith · Tech · Travel — resources for the ambitious young adult.",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Shop />
      <YouTube />
      <Footer />
    </main>
  );
}

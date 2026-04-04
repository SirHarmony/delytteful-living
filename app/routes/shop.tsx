import type { Route } from "./+types/shop";
import MarketingShell from "~/components/MarketingShell";
import ShopPageContent from "~/components/ShopPageContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shop — Delytteful Living" },
    {
      name: "description",
      content:
        "Journals, planners, and e-books for faith, music, tech, and travel — on Etsy and Amazon KDP.",
    },
  ];
}

export default function ShopRoute() {
  return (
    <MarketingShell>
      <ShopPageContent />
    </MarketingShell>
  );
}

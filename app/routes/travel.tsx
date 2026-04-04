import type { Route } from "./+types/travel";
import MarketingShell from "~/components/MarketingShell";
import PillarPage from "~/components/PillarPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Africa Travel — Delytteful Living" },
    {
      name: "description",
      content: "Travel planners and guides for exploring Africa.",
    },
  ];
}

export default function TravelRoute() {
  return (
    <MarketingShell>
      <PillarPage pillarSlug="travel" />
    </MarketingShell>
  );
}

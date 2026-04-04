import type { Route } from "./+types/tech";
import MarketingShell from "~/components/MarketingShell";
import PillarPage from "~/components/PillarPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tech & Career — Delytteful Living" },
    {
      name: "description",
      content: "Tech career roadmaps and guides for self-taught developers.",
    },
  ];
}

export default function TechRoute() {
  return (
    <MarketingShell>
      <PillarPage pillarSlug="tech" />
    </MarketingShell>
  );
}

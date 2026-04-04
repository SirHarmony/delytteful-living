import type { Route } from "./+types/faith";
import MarketingShell from "~/components/MarketingShell";
import PillarPage from "~/components/PillarPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Faith & Purpose — Delytteful Living" },
    {
      name: "description",
      content: "Faith journals, devotionals, and guides for young adults.",
    },
  ];
}

export default function FaithRoute() {
  return (
    <MarketingShell>
      <PillarPage pillarSlug="faith" />
    </MarketingShell>
  );
}

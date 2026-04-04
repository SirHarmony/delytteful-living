import type { Route } from "./+types/music";
import MarketingShell from "~/components/MarketingShell";
import PillarPage from "~/components/PillarPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music & Worship — Delytteful Living" },
    {
      name: "description",
      content: "Music and worship journals, planners, and resources.",
    },
  ];
}

export default function MusicRoute() {
  return (
    <MarketingShell>
      <PillarPage pillarSlug="music" />
    </MarketingShell>
  );
}

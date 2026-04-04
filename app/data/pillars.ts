import type { Pillar } from "~/data/products";

export type PillarSlug = "faith" | "music" | "tech" | "travel";

export type PillarDefinition = {
  slug: PillarSlug;
  pillar: Pillar;
  number: string;
  emoji: string;
  label: string;
  shortLabel: string;
  heading: string;
  body: string;
  items: string[];
  verse?: string;
};

export const pillarOrder: PillarSlug[] = ["faith", "music", "tech", "travel"];

export const pillarDefinitions: Record<PillarSlug, PillarDefinition> = {
  faith: {
    slug: "faith",
    pillar: "faith",
    number: "01",
    emoji: "🙏",
    label: "Faith & Purpose",
    shortLabel: "Faith",
    heading: "Rooted in something greater.",
    body: "For the young Christian navigating identity, purpose, and spiritual growth. Our faith resources help you build a devotional life that transforms your everyday — not just your Sundays.",
    items: [
      "90-day devotional journals",
      "Bible study workbooks",
      "Purpose & calling guides",
      "Prayer planners",
    ],
    verse: "Delight yourself in the Lord. — Psalm 37:4",
  },
  music: {
    slug: "music",
    pillar: "music",
    number: "02",
    emoji: "🎵",
    label: "Music & Worship",
    shortLabel: "Music",
    heading: "Worship that anchors the soul.",
    body: "Song journals, chord planners, and worship-themed resources for creatives and worshippers who want to grow in skill and spirit.",
    items: [
      "Worship journaling prompts",
      "Chord & set list planners",
      "Songwriting workbooks",
      "Practice habit trackers",
    ],
  },
  tech: {
    slug: "tech",
    pillar: "tech",
    number: "03",
    emoji: "💻",
    label: "Tech & Career",
    shortLabel: "Tech",
    heading: "From self-taught to unstoppable.",
    body: "Practical, no-fluff resources for the self-taught developer on their way to going professional. Roadmaps, trackers, and guides built by someone who's walked the path.",
    items: [
      "Frontend dev roadmaps",
      "Portfolio project guides",
      "Job prep workbooks",
      "Coding habit trackers",
    ],
  },
  travel: {
    slug: "travel",
    pillar: "travel",
    number: "04",
    emoji: "✈️",
    label: "Africa Travel",
    shortLabel: "Travel",
    heading: "Africa is waiting for you.",
    body: "Insider travel resources for young adults ready to explore the African continent on a budget, with intention, and without the overwhelm.",
    items: [
      "Country itinerary planners",
      "Budget travel guides",
      "Packing checklists",
      "Safari planning resources",
    ],
  },
};

/** Delytteful Playlist — update URLs here if the playlist changes. */
export const musicEmbed = {
  title: "Listen — worship & focus",
  description:
    "A curated playlist for worship and focus. Opens in the Spotify app or web player.",
  spotifyOpenUrl:
    "https://open.spotify.com/playlist/14nvQ34BO8kjQmjvVnkQUV?si=29aa9fee31654916",
  spotifyEmbedSrc:
    "https://open.spotify.com/embed/playlist/14nvQ34BO8kjQmjvVnkQUV?utm_source=generator",
  embedHeightPx: 352,
} as const;

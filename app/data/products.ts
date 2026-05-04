export type Pillar = "faith" | "music" | "tech" | "travel";
export type ProductType = "low-content" | "high-content" | "bundle";

export type Product = {
  id: string;
  slug: string;
  title: string;
  pillar: Pillar;
  price: number;
  type: ProductType;
  amazon_url: string;
  gumroad_url: string;
  cover_image: string;
  detail_image: string;
  description: string;
  longDescription: string;
  whatsInside: string[];
  samplePages: string[];
  tags: string[];
  badge?: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "90-day-faith-journal-classic-edition",
    title:
      "Rooted in Purpose Faith Journal — 90 Day Christian Devotional Planner: Classic Edition",
    pillar: "faith",
    price: 13.33,
    type: "low-content",
    amazon_url: "https://www.amazon.com/dp/B0GWH7QFNC",
    gumroad_url: "",
    cover_image:
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Classic%20Edition/cover_page.png",
    detail_image:
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Classic%20Edition/detail_image.png",
    description:
      "A 90-Day Christian Devotional Planner to help you stay consistent in prayer, reflection, and gratitude as you grow in your faith.",
    longDescription:
      "Are you looking to deepen your relationship with God and bring more intentionality to your daily quiet time? Our 90 Day Christian Devotional Planner is designed to be your personal sanctuary for reflection, prayer, and spiritual growth. Whether you are a seasoned believer or just beginning your faith journey, this guided journal provides the structure you need to cultivate a consistent habit of gratitude and faith.",
    whatsInside: [
      "90 days of Guided Prompts: Thoughtful reflection questions to inspire deep thinking and daily gratitude.",
      "3 phases of 30 days each: Rooted, Seeking, and Walking, the anchor verse being Psalm 37:4.",
      "Scripture Focus: Daily Bible verses for meditation.",
      "Prayer: Daily prayer starters to get you going, plus space to continue in your own words.",
      "Notes Area: A dedicated spot to jot down your thoughts on the reflection questions.",
    ],
    samplePages: [
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Classic%20Edition/sample_4.png",
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Classic%20Edition/sample_1.png",
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Classic%20Edition/sample_2.png",
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Classic%20Edition/sample_3.png",
    ],
    tags: ["faith", "journal", "devotional", "young adult"],
    badge: "Bestseller",
  },
  {
    id: "2",
    slug: "90-day-faith-journal-feminine-edition",
    title:
      "Rooted in Purpose Faith Journal — 90 Day Christian Devotional Planner: Feminine Edition",
    pillar: "faith",
    price: 13.33,
    type: "low-content",
    amazon_url: "https://www.amazon.com/dp/B0GWHCN73T",
    gumroad_url: "",
    cover_image:
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Feminine%20Edition/cover_page.png",
    detail_image:
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Feminine%20Edition/detail_image.png",
    description:
      "A 90-Day Christian Devotional Planner to help you stay consistent in prayer, reflection, and gratitude as you grow in your faith. Feminine Edition.",
    longDescription:
      "Are you looking to deepen your relationship with God and bring more intentionality to your daily quiet time? Our 90 Day Christian Devotional Planner is designed to be your personal sanctuary for reflection, prayer, and spiritual growth. Whether you are a seasoned believer or just beginning your faith journey, this guided journal provides the structure you need to cultivate a consistent habit of gratitude and faith.",
    whatsInside: [
      "90 days of Guided Prompts: Thoughtful reflection questions to inspire deep thinking and daily gratitude.",
      "3 phases of 30 days each: Rooted, Seeking, and Walking, the anchor verse being Psalm 37:4.",
      "Scripture Focus: Daily Bible verses for meditation.",
      "Prayer: Daily prayer starters to get you going, plus space to continue in your own words.",
      "Notes Area: A dedicated spot to jot down your thoughts on the reflection questions.",
    ],
    samplePages: [
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Feminine%20Edition/sample_2.png",
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Feminine%20Edition/sample_4.png",
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Feminine%20Edition/sample_3.png",
      "https://pub-48994128b4bc40469acdccf48dd3ede8.r2.dev/Rooted%20in%20Purpose%20Faith%20Journal%20%E2%80%94%2090%20Day%20Christian%20Devotional%20Planner%3A%20Feminine%20Edition/sample_1.png",
    ],
    tags: ["faith", "journal", "devotional", "young adult"],
    badge: "Bestseller",
  },
  // {
  //   id: "prayer-gratitude-planner",
  //   slug: "prayer-gratitude-planner",
  //   title: "Prayer & Gratitude Planner",
  //   pillar: "faith",
  //   price: 7,
  //   type: "low-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "A beautifully simple daily planner to cultivate a consistent habit of prayer and thankfulness.",
  //   longDescription:
  //     "Pair prayer and gratitude in one lightweight planner. Morning and evening prompts keep you anchored without feeling like homework.",
  //   whatsInside: ["Undated monthly overview", "Daily prayer blocks", "Gratitude lines", "Weekly review"],
  //   samplePages: [COVER],
  //   tags: ["faith", "planner", "gratitude"],
  // },
  // {
  //   id: "purpose-clarity-workbook",
  //   slug: "purpose-clarity-workbook",
  //   title: "Purpose & Clarity Workbook",
  //   pillar: "faith",
  //   price: 17,
  //   type: "high-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "A deep-dive e-book and workbook helping Christian young adults uncover their God-given calling with clarity and confidence.",
  //   longDescription:
  //     "Walk through exercises for identity, values, and calling. Includes workbook pages you can type into or print.",
  //   whatsInside: ["10 guided chapters", "Printable worksheets", "Journaling prompts", "Action plans"],
  //   samplePages: [COVER, COVER],
  //   tags: ["faith", "ebook", "workbook", "calling"],
  //   badge: "New",
  // },
  // {
  //   id: "worship-song-journal",
  //   slug: "worship-song-journal",
  //   title: "Worship Song Journal",
  //   pillar: "music",
  //   price: 8,
  //   type: "low-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "Capture set lists, chord progressions, and prayer notes for your worship practice.",
  //   longDescription:
  //     "Built for worship leaders and bedroom musicians alike — space for songs, keys, and what God is teaching you through music.",
  //   whatsInside: ["Set list spreads", "Chord & key notes", "Reflection prompts", "Set planning checklist"],
  //   samplePages: [COVER],
  //   tags: ["music", "worship", "journal", "songwriting"],
  //   badge: "New",
  // },
  // {
  //   id: "chord-habit-tracker",
  //   slug: "chord-habit-tracker",
  //   title: "Chord & Practice Habit Tracker",
  //   pillar: "music",
  //   price: 6,
  //   type: "low-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "Track daily practice, chords learned, and songs in progress.",
  //   longDescription:
  //     "A simple habit loop for instrumentalists: minutes practiced, skills targeted, and wins celebrated.",
  //   whatsInside: ["30-day tracker grid", "Skill focus areas", "Weekly review", "Goal lines"],
  //   samplePages: [COVER],
  //   tags: ["music", "practice", "habits"],
  // },
  // {
  //   id: "frontend-dev-roadmap",
  //   slug: "frontend-developer-roadmap-2025",
  //   title: "Frontend Developer Roadmap 2025",
  //   pillar: "tech",
  //   price: 9,
  //   type: "low-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "A visual cheatsheet laying out the exact path from self-taught beginner to hired frontend developer in 2025.",
  //   longDescription:
  //     "One poster-style PDF you can print or keep on a second monitor — milestones, tools, and portfolio checkpoints.",
  //   whatsInside: ["Visual skill map", "Milestone checklist", "Tool glossary", "Portfolio milestones"],
  //   samplePages: [COVER],
  //   tags: ["tech", "frontend", "roadmap", "career"],
  // },
  // {
  //   id: "coding-progress-tracker",
  //   slug: "coding-progress-tracker-habit-journal",
  //   title: "Coding Progress Tracker & Habit Journal",
  //   pillar: "tech",
  //   price: 7,
  //   type: "low-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "Track your daily coding sessions, learning milestones, and project progress as you build your dev career.",
  //   longDescription:
  //     "Stay consistent with streaks, session notes, and project links — built for self-taught devs.",
  //   whatsInside: ["Daily session log", "Project tracker", "Learning backlog", "Weekly retro"],
  //   samplePages: [COVER],
  //   tags: ["tech", "coding", "tracker"],
  // },
  // {
  //   id: "self-taught-to-hired",
  //   slug: "self-taught-to-hired-frontend-guide",
  //   title: "From Self-Taught to Hired: The Complete Frontend Dev Guide",
  //   pillar: "tech",
  //   price: 27,
  //   type: "high-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "The definitive guide for self-taught developers — from building your first portfolio project to landing your first professional role.",
  //   longDescription:
  //     "Long-form guide with chapters on portfolio, interviews, and first 90 days — replace placeholder copy with your final manuscript.",
  //   whatsInside: ["12+ chapters", "Interview prep sheets", "Portfolio rubric", "Salary negotiation notes"],
  //   samplePages: [COVER, COVER],
  //   tags: ["tech", "ebook", "career", "frontend"],
  //   badge: "Flagship",
  // },
  // {
  //   id: "east-africa-trip-planner",
  //   slug: "east-africa-trip-planner",
  //   title: "East Africa Trip Planner",
  //   pillar: "travel",
  //   price: 9,
  //   type: "low-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "A printable itinerary and budget tracker tailored for first-time travellers exploring East Africa.",
  //   longDescription:
  //     "Plan routes, budgets, and must-sees with printable spreads — dummy data for preview.",
  //   whatsInside: ["Itinerary grid", "Budget tables", "Packing reminders", "Emergency notes"],
  //   samplePages: [COVER],
  //   tags: ["travel", "africa", "planner"],
  // },
  // {
  //   id: "africa-packing-checklists",
  //   slug: "africa-packing-checklist-bundle",
  //   title: "Africa Packing Checklist Bundle",
  //   pillar: "travel",
  //   price: 7,
  //   type: "low-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "10 country-specific packing checklists covering East, West, and Southern Africa.",
  //   longDescription:
  //     "Never over- or under-pack — checklists tuned for climate and trip type.",
  //   whatsInside: ["10 country checklists", "Carry-on vs checked", "Seasonal notes"],
  //   samplePages: [COVER],
  //   tags: ["travel", "packing", "africa"],
  // },
  // {
  //   id: "budget-travel-africa",
  //   slug: "budget-travel-africa-guide",
  //   title: "Budget Travel in Africa: The Young Adult's Complete Guide",
  //   pillar: "travel",
  //   price: 19,
  //   type: "high-content",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "Everything you need to plan an unforgettable, affordable African adventure.",
  //   longDescription:
  //     "Visa tips, budgeting, and route ideas — comprehensive e-book (dummy preview text).",
  //   whatsInside: ["Country snapshots", "Budget frameworks", "Safety basics", "Sample itineraries"],
  //   samplePages: [COVER, COVER],
  //   tags: ["travel", "africa", "ebook", "budget"],
  //   badge: "Popular",
  // },
  // {
  //   id: "delytte-starter-bundle",
  //   slug: "delytte-starter-bundle",
  //   title: "The Delytte Starter Bundle",
  //   pillar: "faith",
  //   price: 19,
  //   type: "bundle",
  //   etsy_url: ETSY,
  //   amazon_url: AMZ,
  //   cover_image: COVER,
  //   description:
  //     "Introductory journals spanning faith, music, tech, and travel — a discounted entry point.",
  //   longDescription:
  //     "Curated bundle for young adults exploring every pillar. Replace with final SKU links on Etsy/KDP.",
  //   whatsInside: ["4 themed mini-journals", "Bonus wallpaper pack", "Getting started guide"],
  //   samplePages: [COVER],
  //   tags: ["bundle", "starter", "faith", "music", "tech", "travel"],
  //   badge: "Best Value",
  // },
];

export const pillarMeta: Record<
  Pillar,
  { label: string; emoji: string; color: string; bg: string; border: string }
> = {
  faith: {
    label: "Faith & Purpose",
    emoji: "🙏",
    color: "text-amber-deep",
    bg: "bg-amber-light",
    border: "border-amber",
  },
  music: {
    label: "Music & Worship",
    emoji: "🎵",
    color: "text-wine-deep",
    bg: "bg-wine-light",
    border: "border-wine",
  },
  tech: {
    label: "Tech & Career",
    emoji: "💻",
    color: "text-teal-deep",
    bg: "bg-teal-light",
    border: "border-teal",
  },
  travel: {
    label: "Africa Travel",
    emoji: "✈️",
    color: "text-warm-grey",
    bg: "bg-parchment-dark",
    border: "border-charcoal",
  },
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByPillar(pillar: Pillar): Product[] {
  return products.filter((p) => p.pillar === pillar);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => {
    const hay = [
      p.title,
      p.description,
      p.longDescription,
      ...p.tags,
      pillarMeta[p.pillar].label,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function getCompleteTheSet(
  pillar: Pillar,
  excludeSlug?: string,
): Product[] {
  return products
    .filter((p) => p.pillar === pillar && p.slug !== excludeSlug)
    .slice(0, 3);
}

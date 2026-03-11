export type Pillar = "faith" | "tech" | "travel";
export type ProductType = "low-content" | "high-content" | "bundle";

export type Product = {
  id: string;
  title: string;
  pillar: Pillar;
  price: number;
  type: ProductType;
  etsy_url: string;
  payhip_url: string;
  cover_image: string;
  description: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "faith-journal-90",
    title: "90-Day Faith Journal for Young Adults",
    pillar: "faith",
    price: 9,
    type: "low-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A daily devotional planner designed to anchor your mornings in scripture, gratitude, and intentional prayer.",
    badge: "Bestseller",
  },
  {
    id: "prayer-gratitude-planner",
    title: "Prayer & Gratitude Planner",
    pillar: "faith",
    price: 7,
    type: "low-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "A beautifully simple daily planner to cultivate a consistent habit of prayer and thankfulness.",
  },
  {
    id: "purpose-clarity-workbook",
    title: "Purpose & Clarity Workbook",
    pillar: "faith",
    price: 17,
    type: "high-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "A deep-dive e-book and workbook helping Christian young adults uncover their God-given calling with clarity and confidence.",
    badge: "New",
  },
  {
    id: "frontend-dev-roadmap",
    title: "Frontend Developer Roadmap 2025",
    pillar: "tech",
    price: 9,
    type: "low-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "A visual cheatsheet laying out the exact path from self-taught beginner to hired frontend developer in 2025.",
  },
  {
    id: "coding-progress-tracker",
    title: "Coding Progress Tracker & Habit Journal",
    pillar: "tech",
    price: 7,
    type: "low-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "Track your daily coding sessions, learning milestones, and project progress as you build your dev career.",
  },
  {
    id: "self-taught-to-hired",
    title: "From Self-Taught to Hired: The Complete Frontend Dev Guide",
    pillar: "tech",
    price: 27,
    type: "high-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "The definitive guide for self-taught developers — from building your first portfolio project to landing your first professional role.",
    badge: "Flagship",
  },
  {
    id: "east-africa-trip-planner",
    title: "East Africa Trip Planner",
    pillar: "travel",
    price: 9,
    type: "low-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "A printable itinerary and budget tracker tailored for first-time travellers exploring East Africa.",
  },
  {
    id: "africa-packing-checklists",
    title: "Africa Packing Checklist Bundle",
    pillar: "travel",
    price: 7,
    type: "low-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "10 country-specific packing checklists covering East, West, and Southern Africa — never over- or under-pack again.",
  },
  {
    id: "budget-travel-africa",
    title: "Budget Travel in Africa: The Young Adult's Complete Guide",
    pillar: "travel",
    price: 19,
    type: "high-content",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "Everything you need to plan an unforgettable, affordable African adventure — from visa tips to hidden-gem destinations.",
    badge: "Popular",
  },
  {
    id: "delytte-starter-bundle",
    title: "The Delytte Starter Bundle",
    pillar: "faith",
    price: 19,
    type: "bundle",
    etsy_url: "https://etsy.com/shop/DelytteLiving",
    payhip_url: "https://payhip.com/DelytteLiving",
    cover_image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "Three carefully chosen journals — one for your faith, one for your career, one for your wanderlust. The perfect starting point.",
    badge: "Best Value",
  },
];

export const pillarMeta: Record<
  Pillar,
  { label: string; emoji: string; color: string; bg: string; border: string }
> = {
  faith: {
    label: "Faith & Purpose",
    emoji: "🙏",
    color: "text-rose-deep",
    bg: "bg-rose-light",
    border: "border-rose",
  },
  tech: {
    label: "Tech & Career",
    emoji: "💻",
    color: "text-sage-deep",
    bg: "bg-sage-light",
    border: "border-sage",
  },
  travel: {
    label: "Africa Travel",
    emoji: "✈️",
    color: "text-warm-grey",
    bg: "bg-cream-dark",
    border: "border-warm-grey",
  },
};

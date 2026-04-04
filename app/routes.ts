import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("shop", "routes/shop.tsx"),
  route("shop/:slug", "routes/shop.$slug.tsx"),
  route("faith", "routes/faith.tsx"),
  route("music", "routes/music.tsx"),
  route("tech", "routes/tech.tsx"),
  route("travel", "routes/travel.tsx"),
  route("faq", "routes/faq.tsx"),
] satisfies RouteConfig;

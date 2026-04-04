export function getSiteUrl(): string {
  if (typeof window !== "undefined") return window.location.origin;
  return import.meta.env.VITE_SITE_URL ?? "http://localhost:5173";
}

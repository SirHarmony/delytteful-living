const KEY = "delytteful_recent_products_v1";
const MAX = 8;

export function recordProductView(slug: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    const prev: string[] = raw ? JSON.parse(raw) : [];
    const next = [slug, ...prev.filter((s) => s !== slug)].slice(0, MAX);
    window.sessionStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

export function getRecentProductSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

import { useEffect } from "react";
import { useRevalidator } from "react-router";

/**
 * Re-runs active route loaders when the document becomes visible again (tab or window focus).
 * Pairs with route `loader` / `clientLoader` data; also helps the dev data router stay in sync.
 */
export function RevalidateOnFocus() {
  const { revalidate } = useRevalidator();

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void revalidate();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [revalidate]);

  return null;
}

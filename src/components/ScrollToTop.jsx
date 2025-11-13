import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * - Listens to route changes and scrolls window to top.
 * - Place this inside your Router so it has access to location.
 * - `behavior` prop can be "smooth" or "auto".
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, behavior]);

  return null;
}

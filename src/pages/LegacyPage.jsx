import { useEffect, useRef } from "react";

/**
 * Renders one of the original prototype pages (extracted as a raw HTML
 * fragment) and re-runs its legacy vanilla-JS interactivity every time the
 * route is visited.
 *
 * Why this approach: the original 7 pages are large, hand-built Tailwind
 * markup with a lot of fine detail. Re-typing them as JSX by hand risks
 * introducing mistakes. Keeping the markup as-is (rendered via
 * dangerouslySetInnerHTML) guarantees pixel-for-pixel fidelity, while the
 * page still lives inside the real React + React Router app, gets a
 * shared global nav, and its "go to another page" logic now calls the SPA
 * router instead of loading a new .html file.
 */
export default function LegacyPage({ html, bodyClassName, title, initFns }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (title) document.title = title;

    // Run the shared utilities first, then this page's own script.
    window.NC_init_Common?.();
    (initFns || []).forEach((fnName) => {
      try {
        window[fnName]?.();
      } catch (err) {
        console.error(`[NutritionConnect] ${fnName} failed:`, err);
      }
    });

    // Clean up anything the page created outside its own container
    // (toasts, the analytics-page mobile sidebar backdrop, etc).
    return () => {
      document.getElementById("nc-toast-container")?.remove();
      document.getElementById("nc-sidebar-backdrop")?.remove();
    };
  }, [html, title, initFns]);

  return (
    <div
      ref={containerRef}
      className={bodyClassName}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

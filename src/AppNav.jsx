import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/landing", label: "About" },
  { to: "/role-selection", label: "Role Selection" },
  { to: "/pregnancy-assessment", label: "Pregnancy Assessment" },
  { to: "/icds-dashboard", label: "ICDS Dashboard" },
  { to: "/asha-mobile", label: "ASHA Mobile" },
  { to: "/food-database", label: "Food Database" },
  { to: "/admin-analytics", label: "Admin Analytics" }
];

/**
 * A small floating "jump to any page" menu, always present so every page
 * in the app is reachable from every other page — separate from each
 * legacy page's own nav/sidebar, which we left visually untouched.
 */
export default function AppNav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-[999] font-sans">
      {open && (
        <div className="mb-2 w-64 max-h-[70vh] overflow-y-auto rounded-xl bg-white text-slate-800 shadow-2xl border border-slate-200 p-2">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                "block px-3 py-2 rounded-lg text-sm transition-colors " +
                (location.pathname === l.to
                  ? "bg-teal-600 text-white font-semibold"
                  : "hover:bg-slate-100")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Jump to page"
        className="w-12 h-12 rounded-full bg-teal-700 text-white shadow-xl flex items-center justify-center hover:bg-teal-800 transition-colors"
      >
        <span className="material-symbols-outlined">{open ? "close" : "apps"}</span>
      </button>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useEffect } from "react";

const MODULES = [
  {
    to: "/role-selection",
    icon: "how_to_reg",
    title: "Get Started",
    desc: "Pick your role and jump into the right tool.",
    accent: true
  },
  {
    to: "/landing",
    icon: "info",
    title: "About NutritionConnect AI",
    desc: "See the full product pitch and how it works."
  },
  {
    to: "/pregnancy-assessment",
    icon: "pregnant_woman",
    title: "Pregnancy Nutrition Assessment",
    desc: "Two-step maternal health screening form."
  },
  {
    to: "/icds-dashboard",
    icon: "dashboard",
    title: "ICDS Worker Dashboard",
    desc: "Beneficiary roster with live search and filters."
  },
  {
    to: "/asha-mobile",
    icon: "volunteer_activism",
    title: "ASHA Worker (Mobile)",
    desc: "Field worker view: cases, visits, quick actions."
  },
  {
    to: "/food-database",
    icon: "menu_book",
    title: "Nutrition Guide & Food Database",
    desc: "Browse and search foods by category."
  },
  {
    to: "/admin-analytics",
    icon: "bar_chart",
    title: "Admin Analytics",
    desc: "Program-wide trends, maps, and reports."
  }
];

export default function Home() {
  useEffect(() => {
    document.title = "NutritionConnect AI";
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md antialiased">
      <header className="w-full px-margin-mobile md:px-margin-desktop py-sm bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-sm flex items-center gap-sm">
        <img src="/logo.png" alt="NutritionConnect AI logo" className="h-8 w-8 rounded object-contain" />
        <span className="font-headline-md text-headline-md font-bold text-primary">
          NutritionConnect AI
        </span>
      </header>

      <main className="px-margin-mobile md:px-margin-desktop py-2xl max-w-container-max mx-auto">
        <section className="text-center max-w-2xl mx-auto mb-3xl">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-sm">
            Intelligent nutrition decision support
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
            One app for pregnant mothers, ASHA and ICDS workers, and program
            administrators — pick a role to get personalized guidance, or
            jump straight to any module below.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center">
            <Link
              to="/role-selection"
              className="bg-primary text-on-primary px-xl py-sm rounded-full font-label-md text-label-md hover:bg-primary-container hover:shadow-md transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/landing"
              className="border border-outline-variant text-on-surface px-xl py-sm rounded-full font-label-md text-label-md hover:bg-surface-variant/30 transition-all"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-md">
            All modules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
            {MODULES.map((m) => (
              <Link
                key={m.to}
                to={m.to}
                className={
                  "group rounded-xl p-lg border transition-colors flex flex-col " +
                  (m.accent
                    ? "bg-primary-container text-on-primary-container border-transparent hover:shadow-md"
                    : "bg-surface-container-lowest border-outline-variant hover:bg-surface-container-low")
                }
              >
                <div
                  className={
                    "w-10 h-10 rounded-lg flex items-center justify-center mb-md " +
                    (m.accent ? "bg-on-primary-container/10" : "bg-surface-container-low")
                  }
                >
                  <span className="material-symbols-outlined">{m.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-inherit mb-xs">
                  {m.title}
                </h3>
                <p
                  className={
                    "font-body-sm text-body-sm flex-grow " +
                    (m.accent ? "text-inherit opacity-90" : "text-on-surface-variant")
                  }
                >
                  {m.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-margin-mobile md:px-margin-desktop py-lg text-center text-on-surface-variant font-body-sm text-body-sm">
        NutritionConnect AI — prototype for demonstration purposes only.
      </footer>
    </div>
  );
}

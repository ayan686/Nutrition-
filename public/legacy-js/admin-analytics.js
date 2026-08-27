/**
 * Admin Analytics Dashboard — mobile sidebar drawer, Monthly/Quarterly
 * toggle on the trends chart, and small feedback on the other controls.
 */
window.NC_init_AdminAnalytics = function () {
  /* ---- Mobile sidebar drawer ---- */
  const sidebar = document.querySelector("nav.hidden.md\\:flex");
  const menuTrigger = document.querySelector("header button.md\\:hidden");

  if (sidebar && menuTrigger) {
    sidebar.id = "nc-mobile-sidebar";

    const backdrop = document.createElement("div");
    backdrop.id = "nc-sidebar-backdrop";
    backdrop.className = "fixed inset-0 bg-black/40 z-40 opacity-0 pointer-events-none";
    document.body.appendChild(backdrop);

    function openSidebar() {
      sidebar.classList.remove("hidden", "-translate-x-full");
      sidebar.classList.add("flex", "fixed", "z-50");
      backdrop.classList.remove("opacity-0", "pointer-events-none");
      backdrop.classList.add("opacity-100");
    }
    function closeSidebar() {
      sidebar.classList.add("-translate-x-full");
      backdrop.classList.add("opacity-0", "pointer-events-none");
      backdrop.classList.remove("opacity-100");
      setTimeout(function () {
        if (window.innerWidth < 768) {
          sidebar.classList.add("hidden");
          sidebar.classList.remove("flex", "fixed", "z-50", "-translate-x-full");
        }
      }, 300);
    }

    menuTrigger.addEventListener("click", openSidebar);
    backdrop.addEventListener("click", closeSidebar);
    sidebar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        closeSidebar();
        if (link.classList.contains("text-primary")) return; // active item
        const label = link.textContent.trim();
        const route = NC_LABEL_ROUTES[label];
        if (route) {
          ncNavigate(route);
        } else {
          showToast(label + " isn't built yet in this prototype.", "default");
        }
      });
    });
  }

  /* ---- Monthly / Quarterly range toggle on the trends chart ---- */
  const rangeButtons = document.querySelectorAll('.flex.gap-sm > button');
  rangeButtons.forEach(function (btn) {
    if (btn.textContent.trim() !== "Monthly" && btn.textContent.trim() !== "Quarterly") return;
    btn.classList.add("nc-range-btn");
    btn.addEventListener("click", function () {
      rangeButtons.forEach(function (b) {
        if (b.textContent.trim() === "Monthly" || b.textContent.trim() === "Quarterly") {
          b.classList.remove("bg-primary", "text-on-primary", "shadow-sm");
          b.classList.add("bg-surface-variant", "text-on-surface");
        }
      });
      btn.classList.remove("bg-surface-variant", "text-on-surface");
      btn.classList.add("bg-primary", "text-on-primary", "shadow-sm");
      showToast("Showing " + btn.textContent.trim().toLowerCase() + " trends.", "default");
    });
  });

  /* ---- Filter Regions button ---- */
  document.querySelectorAll("button").forEach(function (btn) {
    if (btn.textContent.includes("Filter Regions")) {
      btn.addEventListener("click", function () {
        showToast("Region filters coming soon.", "default");
      });
    }
  });

  /* ---- Map data points ---- */
  document.querySelectorAll(".animate-pulse, .rounded-full.shadow-\\[0_0_15px_rgba\\(0\\,104\\,95\\,0\\.8\\)\\]").forEach(function (dot) {
    dot.style.cursor = "pointer";
    dot.addEventListener("click", function () {
      showToast("Regional detail view coming soon.", "default");
    });
  });

  /* ---- Bar chart hover tooltips already work via CSS; make bars clickable ---- */
  document.querySelectorAll('.flex-1.h-full.flex.items-end > div[class*="w-[10%]"]').forEach(function (bar) {
    bar.addEventListener("click", function () {
      const value = bar.querySelector("div")?.textContent.trim();
      showToast("Assessments this period: " + (value || "—"), "default");
    });
  });

  /* ---- Mobile bottom nav ---- */
  const bottomLinks = document.querySelectorAll('nav.md\\:hidden.fixed.bottom-0 a');
  bottomLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      bottomLinks.forEach(function (l) {
        l.classList.remove("bg-primary-container", "text-on-primary-container");
        l.classList.add("text-on-surface-variant");
      });
      link.classList.remove("text-on-surface-variant");
      link.classList.add("bg-primary-container", "text-on-primary-container");

      const label = link.querySelector("span:last-child")?.textContent.trim();
      if (label !== "Dashboard") {
        showToast(label + " isn't built yet in this prototype.", "default");
      }
    });
  });

  /* ---- Header notification bell + avatar ---- */
  const bell = document.querySelector('header .flex.items-center.gap-md button .material-symbols-outlined');
  if (bell) {
    bell.closest("button").addEventListener("click", function () {
      showToast("3,842 cases currently need review.", "default");
    });
  }
};

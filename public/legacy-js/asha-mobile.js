/**
 * ASHA Worker Mobile page — quick actions, visit cards, bottom nav.
 */
window.NC_init_AshaMobile = function () {
  /* ---- Quick action tiles ---- */
  document.querySelectorAll("section.grid button").forEach(function (btn) {
    const label = btn.textContent.trim();
    btn.addEventListener("click", function () {
      if (label.includes("Search")) {
        ncNavigate("/food-database");
      } else if (label.includes("Add New") || label.includes("Record Quick Assessment")) {
        ncNavigate("/pregnancy-assessment");
      }
    });
  });

  /* ---- Priority alert cards ---- */
  document.querySelectorAll("section .border-error button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const name = btn.closest("div.flex.justify-between")?.querySelector("span.font-bold")?.textContent.trim();
      showToast("Opening case for " + (name || "this beneficiary") + "...", "default");
    });
  });

  /* ---- Today's visit cards ---- */
  document.querySelectorAll("main button").forEach(function (btn) {
    const text = btn.textContent.trim();
    if (text === "Reschedule") {
      btn.addEventListener("click", function () {
        showToast("Visit rescheduled.", "success");
      });
    }
    if (text === "Start Visit") {
      btn.addEventListener("click", function () {
        ncNavigate("/pregnancy-assessment");
      });
    }
  });

  /* ---- Top bar icons ---- */
  document.querySelectorAll("nav button[aria-label]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const label = btn.getAttribute("aria-label");
      showToast(label === "notifications" ? "2 new alerts today." : "Profile menu coming soon.", "default");
    });
  });

  /* ---- Bottom nav ---- */
  const bottomButtons = document.querySelectorAll('nav[aria-label="Bottom Navigation"] button, nav.docked.full-width.bottom-0 button');
  bottomButtons.forEach(function (btn) {
    const label = btn.querySelector("span:last-child")?.textContent.trim();
    btn.addEventListener("click", function () {
      bottomButtons.forEach(function (b) {
        b.classList.remove("bg-primary-container", "text-on-primary-container");
        b.classList.add("text-on-surface-variant");
      });
      btn.classList.remove("text-on-surface-variant");
      btn.classList.add("bg-primary-container", "text-on-primary-container");

      if (label === "Guide") {
        ncNavigate("/food-database");
      } else if (label === "Plan" || label === "Assistant") {
        showToast(label + " isn't built yet in this prototype.", "default");
      }
    });
  });
};

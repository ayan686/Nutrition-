/**
 * Landing page — CTA routing, sticky nav shadow, and mobile bottom nav state.
 */
window.NC_init_Landing = function () {
  ncInitStickyNavShadow("#main-nav");

  // Primary CTA -> role selection (start of the real flow)
  document.querySelectorAll("button").forEach(function (btn) {
    const label = btn.textContent.trim();
    if (label.includes("Start Nutrition Assessment")) {
      btn.addEventListener("click", function () {
        ncNavigate("/role-selection");
      });
    }
    if (label === "Explore Platform") {
      btn.addEventListener("click", function () {
        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
      });
    }
    if (label === "Sign In") {
      btn.addEventListener("click", function () {
        showToast("Sign-in isn't wired up in this prototype yet.", "default");
      });
    }
  });

  // "Home" link in the top nav should route back to the app Home screen.
  document.querySelectorAll('nav#main-nav a').forEach(function (link) {
    if (link.textContent.trim() === "Home") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        ncNavigate("/");
      });
    }
  });

  // Notification / account icon buttons in the top nav
  document.querySelectorAll('nav#main-nav button .material-symbols-outlined').forEach(function (icon) {
    const btn = icon.closest("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      showToast(icon.textContent.trim() === "notifications" ? "No new notifications." : "Account menu coming soon.", "default");
    });
  });

  // Mobile bottom nav: toggle the active-item styling as the user taps
  const bottomLinks = document.querySelectorAll('nav.md\\:hidden a');
  bottomLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      bottomLinks.forEach(function (l) {
        l.classList.remove("bg-primary-container", "text-on-primary-container", "scale-95");
        l.classList.add("text-on-surface-variant");
      });
      link.classList.remove("text-on-surface-variant");
      link.classList.add("bg-primary-container", "text-on-primary-container", "scale-95");
    });
  });
};

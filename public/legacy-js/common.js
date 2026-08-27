/**
 * NutritionConnect AI — Shared JS
 * Utilities used across every page: toasts, scroll-reveal, mobile nav,
 * role-based routing, and sidebar-link routing between the app's pages.
 *
 * This file is loaded once (in index.html) as a plain global script, so
 * every function here is a real `window` global other page scripts can
 * call directly (ncSelectRole(), showToast(), etc). It never navigates
 * with a full page reload — everything goes through the hash router.
 */

/* ---------- Role → destination route map ---------- */
const NC_ROLE_ROUTES = {
  "pregnant-mother": "/pregnancy-assessment",
  "child-parent": "/pregnancy-assessment",
  "icds-worker": "/icds-dashboard",
  "asha-worker": "/asha-mobile",
  "general-user": "/food-database",
  "administrator": "/admin-analytics"
};

/* ---------- Sidebar label → route map (shared by every dashboard shell) ---------- */
const NC_LABEL_ROUTES = {
  "Dashboard": "/icds-dashboard",
  "Assessments": "/pregnancy-assessment",
  "Beneficiaries": "/icds-dashboard",
  "Nutrition Guide": "/food-database",
  "Guide": "/food-database",
  "Reports": "/admin-analytics",
  "Analytics": "/admin-analytics",
  "Home": "/"
};

/** Navigate the SPA to an internal route (no full page reload). */
function ncNavigate(route) {
  window.location.hash = "#" + route;
}

/** Save the selected role and go to the right page. */
function ncSelectRole(role) {
  try {
    sessionStorage.setItem("nc_role", role);
  } catch (e) {
    /* sessionStorage unavailable — navigation still works */
  }
  const destination = NC_ROLE_ROUTES[role] || "/role-selection";
  ncNavigate(destination);
}

/** Returns the last role chosen on the role-selection screen, if any. */
function ncGetSavedRole() {
  try {
    return sessionStorage.getItem("nc_role");
  } catch (e) {
    return null;
  }
}

/**
 * Wires up every still-decorative `href="#"` link inside a nav/sidebar so
 * it either routes to a real page (when its label is a known destination)
 * or shows a friendly "not built yet" toast otherwise. Active/self links
 * (already styled as the current page) are left alone.
 */
function ncWireSidebarPlaceholders(navSelector, isActiveLink) {
  document.querySelectorAll(navSelector).forEach(function (link) {
    if (link.getAttribute("href") !== "#") return;
    if (isActiveLink && isActiveLink(link)) return;

    const label = link.textContent.trim();
    const route = NC_LABEL_ROUTES[label];

    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (route) {
        ncNavigate(route);
      } else {
        showToast(label + " isn't built yet in this prototype.", "default");
      }
    });
  });
}

/* ---------- Toast notifications ---------- */
function ncEnsureToastContainer() {
  let container = document.getElementById("nc-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "nc-toast-container";
    container.setAttribute("aria-live", "polite");
    container.setAttribute("aria-atomic", "true");
    document.body.appendChild(container);
  }
  return container;
}

/**
 * Show a small toast notification.
 * @param {string} message
 * @param {"default"|"success"|"error"} type
 */
function showToast(message, type) {
  const container = ncEnsureToastContainer();
  const toast = document.createElement("div");
  const iconMap = { success: "check_circle", error: "error", default: "info" };
  toast.className = "nc-toast" + (type ? " nc-toast-" + type : "");
  toast.innerHTML =
    '<span class="material-symbols-outlined">' + (iconMap[type] || iconMap.default) + "</span><span>" + message + "</span>";
  container.appendChild(toast);
  setTimeout(function () {
    toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    setTimeout(function () {
      toast.remove();
    }, 300);
  }, 2600);
}

/* ---------- Scroll-reveal ---------- */
function ncInitScrollReveal() {
  const targets = document.querySelectorAll("[data-animate]");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
}

/* ---------- Sticky nav shadow-on-scroll ---------- */
function ncInitStickyNavShadow(navSelector) {
  const nav = document.querySelector(navSelector || "#main-nav");
  if (!nav) return;
  const apply = function () {
    if (window.scrollY > 8) {
      nav.classList.add("shadow-md", "border-b", "border-outline-variant/30");
    } else {
      nav.classList.remove("border-b", "border-outline-variant/30");
    }
  };
  apply();
  window.addEventListener("scroll", apply, { passive: true });
}

/* ---------- Generic mobile nav / drawer toggle ---------- */
function ncInitMobileNavToggle(triggerSelector, panelSelector) {
  const trigger = document.querySelector(triggerSelector);
  const panel = document.querySelector(panelSelector);
  if (!trigger || !panel) return;

  trigger.addEventListener("click", function () {
    const isOpen = panel.classList.contains("nc-open");
    if (isOpen) {
      panel.classList.remove("nc-open");
      panel.classList.add("-translate-x-full");
    } else {
      panel.classList.add("nc-open");
      panel.classList.remove("-translate-x-full");
    }
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });
}

/* ---------- Smooth-scroll for in-page anchor links ---------- */
function ncInitSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    // Skip SPA route hashes like "#/food-database" — only handle real
    // in-page anchors such as "#how-it-works".
    if (targetId.startsWith("#/")) return;
    link.addEventListener("click", function (e) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* Re-run the parts every page can safely share, each time a page mounts. */
window.NC_init_Common = function () {
  ncInitScrollReveal();
  ncInitSmoothAnchors();
};

/**
 * Nutrition Guide & Food Database — category filter + live search over
 * food cards, plus small interactions on suggestions and nav.
 */
window.NC_init_FoodDatabase = function () {
  const categoryButtons = document.querySelectorAll("section .grid.grid-cols-3 button, section .grid.md\\:grid-cols-6 button");
  const foodCards = document.querySelectorAll("article");
  const searchInputs = document.querySelectorAll('input[placeholder^="Search foods"]');

  /* ---- Category tiles: visual selection + friendly feedback ---- */
  categoryButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      categoryButtons.forEach(function (b) {
        b.classList.remove("nc-category-active");
      });
      btn.classList.add("nc-category-active");

      const label = btn.querySelector("span:last-child")?.textContent.trim();
      const hasCards = label === "Vegetables";
      if (!hasCards) {
        showToast(label + " entries are coming soon to this prototype.", "default");
      }
      applyFoodFilter("");
      searchInputs.forEach(function (input) {
        input.value = "";
      });
    });
  });

  /* ---- Live search across the food card grid ---- */
  function applyFoodFilter(query) {
    const q = query.trim().toLowerCase();
    let anyVisible = false;
    let container = null;

    foodCards.forEach(function (card) {
      container = card.parentElement;
      const matches = q === "" || card.textContent.toLowerCase().includes(q);
      card.classList.toggle("nc-card-hidden", !matches);
      if (matches) anyVisible = true;
    });

    if (container) {
      let empty = document.getElementById("nc-food-empty");
      if (!empty) {
        empty = document.createElement("div");
        empty.id = "nc-food-empty";
        empty.textContent = "No foods match your search.";
        container.appendChild(empty);
      }
      empty.classList.toggle("is-visible", !anyVisible && q !== "");
    }
  }

  searchInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      // keep both search boxes (mobile + desktop) in sync
      searchInputs.forEach(function (other) {
        if (other !== input) other.value = input.value;
      });
      applyFoodFilter(input.value);
    });
  });

  /* ---- Suggestion cards ---- */
  document.querySelectorAll("aside .cursor-pointer").forEach(function (card) {
    card.addEventListener("click", function () {
      const title = card.querySelector("h4")?.textContent.trim();
      showToast("Tip saved: " + (title || "suggestion"), "success");
    });
  });

  /* ---- Filters button on the main grid ---- */
  document.querySelectorAll("button").forEach(function (btn) {
    if (btn.textContent.trim().startsWith("Filters")) {
      btn.addEventListener("click", function () {
        showToast("Advanced filters coming soon.", "default");
      });
    }
  });

  /* ---- Bottom nav: Home routes to the app Home screen, Guide is a
         no-op (we're already here), others get a friendly placeholder ---- */
  document.querySelectorAll('nav.md\\:hidden a[href="#"]').forEach(function (link) {
    const label = link.querySelector("span:last-child")?.textContent.trim();
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (label === "Home") {
        ncNavigate("/");
      } else if (label === "Guide") {
        return; // already on this page
      } else {
        showToast(label + " isn't built yet in this prototype.", "default");
      }
    });
  });

  /* ---- Side nav (desktop): route to real pages where one exists ---- */
  ncWireSidebarPlaceholders('nav.hidden.md\\:flex a[href="#"]', function (link) {
    return link.classList.contains("text-primary"); // active "Nutrition Guide" item
  });
};

/**
 * ICDS Worker Dashboard — live table search, quick actions, notifications.
 */
window.NC_init_IcdsDashboard = function () {
  /* ---- Live search over the Beneficiary Roster table ---- */
  const searchInput = document.querySelector('input[placeholder="Search ID or Name..."]');
  const table = document.querySelector("table");
  const rows = table ? Array.from(table.querySelectorAll("tbody tr")) : [];

  if (searchInput && rows.length) {
    // Empty-state row, inserted once and toggled as needed.
    const emptyState = document.createElement("div");
    emptyState.id = "nc-no-results";
    emptyState.textContent = "No beneficiaries match your search.";
    table.parentElement.appendChild(emptyState);

    searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim().toLowerCase();
      let anyVisible = false;

      rows.forEach(function (row) {
        const text = row.textContent.toLowerCase();
        const matches = query === "" || text.includes(query);
        row.classList.toggle("nc-row-hidden", !matches);
        row.classList.toggle("nc-row-match", matches && query !== "");
        if (matches) anyVisible = true;
      });

      emptyState.classList.toggle("is-visible", !anyVisible);
    });
  }

  /* ---- "Record New Assessment" primary action ---- */
  document.querySelectorAll("button").forEach(function (btn) {
    if (btn.textContent.includes("Record New Assessment")) {
      btn.addEventListener("click", function () {
        ncNavigate("/pregnancy-assessment");
      });
    }
    if (btn.textContent.trim() === "Filter") {
      btn.addEventListener("click", function () {
        showToast("Filter panel coming soon.", "default");
      });
    }
  });

  /* ---- Row "view" buttons ---- */
  document.querySelectorAll("tbody tr").forEach(function (row) {
    const viewBtn = row.querySelector("button");
    const name = row.querySelector("td div.text-on-surface-variant")?.textContent.trim();
    if (viewBtn) {
      viewBtn.addEventListener("click", function () {
        showToast("Opening record for " + (name || "beneficiary") + "...", "default");
      });
    }
  });

  /* ---- Notification bell ---- */
  const bell = document.querySelector('header button .material-symbols-outlined');
  if (bell && bell.textContent.trim() === "notifications") {
    bell.closest("button").addEventListener("click", function () {
      showToast("12 follow-ups are due this week.", "default");
    });
  }

  /* ---- Sidebar nav: route to real pages where one exists ---- */
  ncWireSidebarPlaceholders('nav[aria-label="Sidebar Navigation"] a', function (link) {
    return link.classList.contains("text-primary"); // active "Dashboard" item
  });
};

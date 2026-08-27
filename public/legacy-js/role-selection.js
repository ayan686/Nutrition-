/**
 * Role Selection page — makes the six role cards actually navigate
 * to the right part of the app, with a small selecting-state
 * animation so the tap feels responsive.
 */
window.NC_init_RoleSelection = function () {
  const cards = document.querySelectorAll(".role-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      const role = card.getAttribute("data-role");
      if (!role) return;

      cards.forEach(function (c) {
        c.disabled = true;
      });
      card.classList.add("is-selecting");

      // Brief visual confirmation before the page changes.
      setTimeout(function () {
        ncSelectRole(role);
      }, 180);
    });
  });
};

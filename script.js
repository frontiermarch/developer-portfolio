
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const currentYear = document.querySelector("#current-year");

// Update the footer copyright year.
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Toggle the mobile navigation menu.
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close the menu after selecting a navigation link.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  // Close the menu if the user returns to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

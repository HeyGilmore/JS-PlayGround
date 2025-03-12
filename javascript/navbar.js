export function createNavbar(brandName, navLinks) {
  return {
    brandName,
    navLinks,
    render(containerId) {
      // Navbar
      const navbar = document.createElement("nav");
      navbar.className = "navbar bg-light";

      // Container
      const containerNav = document.createElement("div");
      containerNav.className = "container";

      // Brand Name
      const brandSpan = document.createElement("span");
      brandSpan.className = "navbar-brand mb-0 h2";
      brandSpan.textContent = this.brandName;

      // Add Links if any
      if (this.navLinks && this.navLinks.length > 0) {
        const navList = document.createElement("ul");
        navList.className = "navbar-nav d-flex flex-row";

        this.navLinks.forEach((link) => {
          const listItem = document.createElement("li");
          listItem.className = "nav-item me-3";

          const anchor = document.createElement("a");
          anchor.classList = "nav-link";
          anchor.href = link.href;
          anchor.textContent = link.text;

          listItem.appendChild(anchor);
          navList.appendChild(listItem);
        });

        containerNav.appendChild(navList);
      }

      containerNav.appendChild(brandSpan);
      navbar.appendChild(containerNav);

      // Render to the provided container
      const renderContainer = document.getElementById(containerId);
      if (renderContainer) {
        renderContainer.appendChild(navbar);
      } else {
        console.error(`Container with id (${containerId}) not found!`);
      }
    },
  };
}

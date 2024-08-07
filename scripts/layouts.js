// Function to inject each page data into the main content area
// function loadPage(page, button) {
//   fetch(page)
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("content").innerHTML = data;
//     });
// }

// // Load the default page (dashboard) when the page first loads
// document.addEventListener("DOMContentLoaded", function () {
//   loadPage("../pages/dashboard.html");
// });

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  const contentSection = document.querySelector("#content");

  const loadContent = async (page) => {
    try {
      const response = await fetch(`/pages/${page}.html`);
      if (response.ok) {
        const content = await response.text();

        contentSection.innerHTML = content;
      } else {
        contentSection.innerHTML = `<p>Error loading page: ${page}.html</p>`;
      }
    } catch (error) {
      console.error("Error fetching content:", error);
      contentSection.innerHTML = "<p>Error fetching content.</p>";
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const page = link.getAttribute("href").substring(1);

      loadContent(page);
    });
  });

  loadContent("dashboard");
});

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-item.active")?.classList.remove("active");
      item.classList.add("active");
    });
  });
});

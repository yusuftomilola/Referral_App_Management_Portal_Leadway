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

// [1] Function to inject each page data into the main content area
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

  const handleNavClick = (event) => {
    event.preventDefault();

    navLinks.forEach((link) => {
      link.parentElement.classList.remove("bg-[#E6B014]", "border-l-[3px]");
    });

    const page = event.currentTarget.getAttribute("href").substring(1);
    loadContent(page);

    event.currentTarget.parentElement.classList.add(
      "bg-[#E6B014]",
      "border-l-[3px]"
    );
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });

  // Load the dashboard content by default
  loadContent("dashboard");
});

// [2] TOGGLE MENU ON & OFF
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("open");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("open");
});

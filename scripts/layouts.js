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

  // Set initial active state for dashboard
  setActiveDashboard();

  // Initial page load
  loadPage("../pages/dashboard.html");

  // Event delegation for page links (both desktop and mobile)
  document.addEventListener("click", function (event) {
    const pageLink = event.target.closest(".page-link");
    if (pageLink) {
      event.preventDefault();
      const pageUrl = pageLink.getAttribute("data-page");
      loadPage(pageUrl);

      // Close mobile menu if it's open
      document.getElementById("mobile-menu").classList.remove("open");
    }
  });
});

function setActiveDashboard() {
  // Remove active class from all nav items (desktop and mobile)
  document
    .querySelectorAll(".nav-item")
    .forEach((item) => item.classList.remove("bg-[#E6B014]", "border-l-[3px]"));

  // Add active class to dashboard nav items (desktop and mobile)
  document.querySelectorAll('[data-section="dashboard"]').forEach((item) => {
    item.classList.add("bg-[#E6B014]", "border-l-[3px]");
  });
}

function loadPage(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      initChart();
      initChart2();

      // initChart3();
      // Update active nav item based on the loaded URL
      updateActiveNavItem(url);

      // Add this line to initialize the modal
      // if (url.includes("reports.html")) {
      //   initializeModal();
      // }
      initializeModal();
      initializeModal2();
    })

    .catch((error) => console.error("Error loading page:", error));
}

function updateActiveNavItem(url) {
  const fileName = url.split("/").pop();
  let activeSection = null;

  // Find which section this URL belongs to
  for (const [section, pages] of Object.entries(sectionMap)) {
    if (pages.includes(fileName)) {
      activeSection = section;
      break;
    }
  }

  // Remove active class from all nav items (desktop and mobile)
  document
    .querySelectorAll(".nav-item")
    .forEach((item) => item.classList.remove("bg-[#E6B014]", "border-l-[3px]"));

  // Add active class to the correct nav items (desktop and mobile)
  if (activeSection) {
    document
      .querySelectorAll(`[data-section="${activeSection}"]`)
      .forEach((item) => {
        item.classList.add("bg-[#E6B014]", "border-l-[3px]");
      });
  }
}

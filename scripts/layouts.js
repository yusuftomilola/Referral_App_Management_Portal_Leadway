// Function to inject each page data into the main content area
function loadPage(page, button) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    });
}

// Load the default page (dashboard) when the page first loads
document.addEventListener("DOMContentLoaded", function () {
  loadPage("../pages/dashboard.html");
});

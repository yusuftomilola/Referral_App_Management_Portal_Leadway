// ALL APP PAGES
const sectionMap = {
  reports: [
    "reports.html",
    "reportsDashboard.html",
    "reportsIncomeBreakdown.html",
    "reportsAll.html",
  ],
  dashboard: ["dashboard.html"],
  prospects: [
    "prospects.html",
    "prospectsChat.html",
    "prospectsNew.html",
    "prospectsNew_pros_doc_upload.html",
  ],
  settings: ["settings.html"],
};

// Function to load the pages
function loadPage(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;

      // Update active nav item based on the loaded URL
      updateActiveNavItem(url);

      // Initialize components after content is fully loaded
      initializeComponents();
    })
    .catch((error) => console.error("Error loading page:", error));
}

// function to initialize charts and modals
function initializeComponents() {
  // Initialize charts only if their containers exist
  if (document.getElementById("myChart")) initChart();
  if (document.getElementById("myChart2")) initChart2();
  if (document.getElementById("myChart3")) initChart3();
  if (document.getElementById("myChart4")) initChart4();
  if (document.getElementById("myChart5")) initChart5();

  // Initialize modals only if their elements exist
  if (document.querySelector(".modal")) initializeModal();
  if (document.querySelector(".modal2")) initializeModal();
  if (document.querySelector(".modal3")) initializeModal();
  if (document.querySelector(".modal8")) initializeModal();
}

// Function to show the drop down menu
function actionmenu(event) {
  // Close any open dropdowns
  const openDropdowns = document.querySelectorAll(
    '.action-menu[style*="display: block"]'
  );
  openDropdowns.forEach((dropdown) => {
    dropdown.style.display = "none";
  });

  // Open the clicked dropdown
  const dropdown = event.currentTarget.nextElementSibling;
  dropdown.style.display = "block";

  // Add event listener to close dropdown when clicking outside
  document.addEventListener("click", closeDropdown);

  // Prevent the event from propagating to the document
  event.stopPropagation();
}

// function to close the drop down menu
function closeDropdown(event) {
  const openDropdowns = document.querySelectorAll(
    '.action-menu[style*="display: block"]'
  );
  openDropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });

  // Remove event listener to avoid multiple bindings
  document.removeEventListener("click", closeDropdown);
}

// incomeBreakdownDashboard.html chartjs
function initChart() {
  const ctx = document.getElementById("myChart");
  if (!ctx) return;

  const data = {
    labels: ["Motor", "Term Life", "Group Life", "Leadway Savings"],
    datasets: [
      {
        label: "Fee (Net of Probate)",
        data: [10000, 30000, 65023.26, 169302.33],
        backgroundColor: "rgba(102, 194, 165, 1)",
        borderColor: "rgba(102, 194, 165, 1)",
        borderWidth: 1,
        barPercentage: 0.3,
        categoryPercentage: 0.8,
      },
      {
        label: "VAT @ 7.5% of Fee",
        data: [750, 2000, 4876.74, 12697.67],
        backgroundColor: "rgba(252, 141, 98, 1)",
        borderColor: "rgba(252, 141, 98, 1)",
        borderWidth: 1,
        barPercentage: 0.3,
        categoryPercentage: 0.8,
      },
      {
        label: "Probate Fee",
        data: [0, 10000, 10000, 10000],
        backgroundColor: "rgba(141, 160, 203, 1)",
        borderColor: "rgba(141, 160, 203, 1)",
        borderWidth: 1,
        barPercentage: 0.3,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    // responsive: true,
    // animation: false,
    responsive: false,
    animation: {
      duration: 0,
    },
    layout: {
      // padding: {
      //   left: 50,
      //   right: 50,
      //   top: 60,
      //   bottom: 50,
      // },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        title: {
          display: true,
          text: "Amount (N)",
          color: "#333333",
        },
        ticks: {
          color: "#333333",
        },
      },
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Products",
          color: "#333333",
        },
        ticks: {
          color: "#333333",
        },
        grid: {
          display: false,
        },
        // barPercentage: 0.9,
        // categoryPercentage: 0.1,
      },
    },
    plugins: {
      legend: {
        position: "right",
        align: "end",
        color: "#333333",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ": ₦" + tooltipItem.raw;
          },
        },
      },
      datalabels: {
        anchor: "center",
        align: "center",
        color: "#333333",
        font: {
          weight: "normal",
          size: 11,
        },
      },
    },
    // maintainAspectRatio: true,
  };

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
    plugins: [ChartDataLabels],
  });
}

// fullReportDashboard.html chartjs
function initChart2() {
  const ctx = document.getElementById("myChart2");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Motor",
          data: [137, 181, 57, 127, 169, 80, 21],
          backgroundColor: "rgba(141, 211, 199, 1)",
          borderColor: "rgba(141, 211, 199, 1)",
          borderWidth: 1,
          pointStyle: "none",
        },
        {
          label: "Term Life",
          data: [83, 110, 113, 39, 111, 153, 83],
          backgroundColor: "rgba(255, 255, 179, 1)",
          borderColor: "rgba(255, 255, 179, 1)",
          borderWidth: 1,
          pointStyle: "circle",
        },
        {
          label: "Group Life",
          data: [70, 75, 54, 153, 127, 43, 127],
          backgroundColor: "rgba(190, 186, 218, 1)",
          borderColor: "rgba(190, 186, 218, 1)",
          borderWidth: 1,
          pointStyle: "circle",
        },
        {
          label: "Leadway Savings",
          data: [68, 165, 183, 185, 42, 100, 61],
          backgroundColor: "rgba(251, 128, 114, 1)",
          borderColor: "rgba(251, 128, 114, 1)",
          borderWidth: 1,
          pointStyle: "circle",
        },
      ],
    },

    options: {
      responsive: false,
      animation: {
        duration: 0,
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Amount (000)",
            color: "#333333",
          },
          ticks: {
            color: "#333333",
          },
          grid: {
            drawBorder: false,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: function (context) {
              if (
                context.tick.value === 0 ||
                context.tick.value === context.chart.scales.y.max
              ) {
                return "rgba(0,0,0,0)";
              }
              return "rgba(0,0,0,0.1)";
            },
          },
        },
        x: {
          title: {
            display: true,
            text: "Period",
            color: "#333333",
          },
          ticks: {
            color: "#333333",
          },
        },
      },
      plugins: {
        legend: {
          position: "right",
          align: "end",
          color: "#333333",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            padding: 20,
          },
        },
        datalabels: {
          anchor: "end",
          align: "bottom",
          formatter: (value) => value,
          color: "#333333",
          font: {
            weight: "normal",
            size: 10,
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}

// prospects chart on the main dashboard
function initChart3() {
  const ctx = document.getElementById("myChart3").getContext("2d");
  const tooltipEl = document.getElementById("chartjs-tooltip");

  //function to resize the chart
  function resizeChart() {
    myChart.resize();
  }

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Data",
          data: [150, 300, 200, 700, 300, 500, 500],
          fill: false,
          borderColor: "#002855",
          borderWidth: 4,
          tension: 0.4,
          pointBackgroundColor: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? "#E6B014" : "rgba(0,0,0,0)";
          },
          pointRadius: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? 14 : 0;
          },
          pointHoverRadius: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? 6 : 0;
          },
          pointBorderWidth: function (context) {
            // Remove the border for the May point
            return context.dataIndex === 4 ? 0 : 1;
          },
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          enabled: false, // Disable the default tooltip
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: "#001855",
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 500,
            color: "#002855",
            callback: function (value) {
              // Skip displaying the 0 tick
              if (value === 0) {
                return "";
              }
              return value;
            },
            // Manually include 100 in the ticks
            min: 0,
            max: 1000,
            stepSize: 500,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
        },
      },
    },
    plugins: [
      {
        afterDraw: function (chart) {
          const meta = chart.getDatasetMeta(0);
          const point = meta.data[4]; // The data point for May

          if (point) {
            const position = point.tooltipPosition();
            tooltipEl.style.left = position.x - 100 + "px"; // Shift to the left
            tooltipEl.style.top = position.y - 10 + "px"; // Align vertically
            tooltipEl.style.opacity = 1;
            tooltipEl.innerHTML = "300"; // The value for May data point
          }
        },
      },
    ],
  });

  // Add event listener for window resize
  window.addEventListener("resize", resizeChart);

  // Initial resize
  resizeChart();
}

// mobile prospects chart on the main dashboard
function initChart4() {
  const ctx = document.getElementById("myChart4").getContext("2d");
  const tooltipEl = document.getElementById("chartjs-tooltip-mobile-dashboard");

  //function to resize the chart
  function resizeChart() {
    myChart.resize();
  }

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Data",
          data: [150, 300, 200, 700, 300, 500, 500],
          fill: false,
          borderColor: "#002855",
          borderWidth: 4,
          tension: 0.4,
          pointBackgroundColor: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? "#E6B014" : "rgba(0,0,0,0)";
          },
          pointRadius: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? 14 : 0;
          },
          pointHoverRadius: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? 6 : 0;
          },
          pointBorderWidth: function (context) {
            // Remove the border for the May point
            return context.dataIndex === 4 ? 0 : 1;
          },
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          enabled: false, // Disable the default tooltip
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: "#001855",
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 500,
            color: "#002855",
            callback: function (value) {
              // Skip displaying the 0 tick
              if (value === 0) {
                return "";
              }
              return value;
            },
            // Manually include 100 in the ticks
            min: 0,
            max: 1000,
            stepSize: 500,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
        },
      },
    },
    plugins: [
      {
        afterDraw: function (chart) {
          const meta = chart.getDatasetMeta(0);
          const point = meta.data[4]; // The data point for May

          if (point) {
            const position = point.tooltipPosition();
            tooltipEl.style.left = position.x - 100 + "px"; // Shift to the left
            tooltipEl.style.top = position.y - 10 + "px"; // Align vertically
            tooltipEl.style.opacity = 1;
            tooltipEl.innerHTML = "300"; // The value for May data point
          }
        },
      },
    ],
  });

  // Add event listener for window resize
  window.addEventListener("resize", resizeChart);

  // Initial resize
  resizeChart();
}

// reports chart on the main dashboard
function initChart5() {
  const ctx = document.getElementById("myChart5").getContext("2d");
  const tooltipEl = document.getElementById(
    "chartjs-tooltip-reports-dashboard"
  );
  if (!ctx) {
    console.error("Canvas element for myChart5 not found");
    return;
  }

  // function to resize the chart
  function resizeChart() {
    myChart.resize();
  }

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Data",
          data: [150, 300, 200, 700, 300, 500, 500],
          fill: false,
          borderColor: "#7DC6FA",
          borderWidth: 4,
          tension: 0.4,
          pointBackgroundColor: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? "#0095FF" : "rgba(0,0,0,0)";
          },
          pointRadius: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? 14 : 0;
          },
          pointHoverRadius: function (context) {
            // Highlight the point for May
            return context.dataIndex === 4 ? 6 : 0;
          },
          pointBorderWidth: function (context) {
            // Remove the border for the May point
            return context.dataIndex === 4 ? 0 : 1;
          },
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          enabled: false, // Disable the default tooltip
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: "#898CAA",
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 500,
            color: "#898CAA",
            callback: function (value) {
              // Skip displaying the 0 tick
              if (value === 0) {
                return "";
              }
              return value;
            },
            // Manually include 100 in the ticks
            min: 0,
            max: 1000,
            stepSize: 500,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
        },
      },
    },
    plugins: [
      {
        afterDraw: function (chart) {
          const meta = chart.getDatasetMeta(0);
          const point = meta.data[4]; // The data point for May

          if (point) {
            const position = point.tooltipPosition();
            tooltipEl.style.left = position.x - 100 + "px"; // Shift to the left
            tooltipEl.style.top = position.y - 10 + "px"; // Align vertically
            tooltipEl.style.opacity = 1;
            tooltipEl.innerHTML = "300"; // The value for May data point
          }
        },
      },
    ],
  });

  // Add event listener for window resize
  window.addEventListener("resize", resizeChart);

  // Initial resize
  resizeChart();
}

// function to loadpage all pages and menu active links
document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
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

// function to add styles to the active nav link
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

// function to keep the styles on the active nav link for all sub pages under a particular page
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

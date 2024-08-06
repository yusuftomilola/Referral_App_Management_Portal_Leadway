// [3] Function to show action dropdown
function actionmenu(event) {
  const dropdown = event.currentTarget.nextElementSibling;
  dropdown.style.display =
    dropdown.style.display === "none" || dropdown.style.display === ""
      ? "block"
      : "none";
}

// [4] incomeBreakdownDashboard.html chartjs
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

// [5] fullReportDashboard.html chartjs
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
          pointStyle: "circle",
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

// loadpage
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
      // Update active nav item based on the loaded URL
      updateActiveNavItem(url);

      // Add this line to initialize the modal
      if (url.includes("reports.html")) {
        initializeModal();
      }
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

// Your sectionMap object (unchanged)
const sectionMap = {
  reports: [
    "reports.html",
    "reportsDashboard.html",
    "reportsIncomeBreakdown.html",
    "reportsAll.html",
  ],
  dashboard: ["dashboard.html"],
  prospects: ["prospects.html"],
  settings: ["settings.html"],
};

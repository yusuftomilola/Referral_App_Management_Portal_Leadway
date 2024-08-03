const dashboardTableData = [
    {
      Name: "Nurudeen Ibrahim",
      Email: "theenddeens@gmail.com",
      PhoneNumber: "08165476543",
      ProductInterest: "Auto Insurance",
      AssignedTo: "Seyi Olarenwaju",
      DateAdded: "01 Jan 2023",
      Status: "Ongoing",
      btn_text_color: "#FFCD28",
    },
    {
      Name: "Nurudeen Ibrahim",
      Email: "theenddeens@gmail.com",
      PhoneNumber: "08165476543",
      ProductInterest: "Auto Insurance",
      AssignedTo: "Seyi Olarenwaju",
      DateAdded: "01 Jan 2023",
      Status: "Closed",
      btn_text_color: "#00B388",
    },
    {
      Name: "Nurudeen Ibrahim",
      Email: "theenddeens@gmail.com",
      PhoneNumber: "08165476543",
      ProductInterest: "Auto Insurance",
      AssignedTo: "Seyi Olarenwaju",
      DateAdded: "01 Jan 2023",
      Status: "Out of SLA",
      btn_text_color: "#FF4136",
    },
    {
      Name: "Nurudeen Ibrahim",
      Email: "theenddeens@gmail.com",
      PhoneNumber: "08165476543",
      ProductInterest: "Auto Insurance",
      AssignedTo: "Seyi Olarenwaju",
      DateAdded: "01 Jan 2023",
      Status: "Open",
      btn_text_color: "#007BFF",
    },
  ];
  
  const dashboard_table_body = document.getElementById("dashboard-table-body");
  
  document.addEventListener("DOMContentLoaded", function () {
    dashboardTableData.forEach((item) => {
      dashboard_table_body.innerHTML += `
      <tr>
        <td class="p-2 border-b">${item.Name}</td>
        <td class="p-2 border-b">${item.Email}</td>
        <td class="p-2 border-b">${item.PhoneNumber}</td>
        <td class="p-2 border-b">${item.ProductInterest}</td>
        <td class="p-2 border-b">${item.AssignedTo}</td>
        <td class="p-2 border-b">${item.DateAdded}</td>
        <td class="p-2 border-b"><span class="px-2 py-1 rounded text-white" style="background-color: ${item.btn_text_color}">${item.Status}</span></td>
        <td class="p-2 border-b">...</td>
      </tr>`;
    });
  });
  
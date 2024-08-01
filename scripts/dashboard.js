const dashboardTableData = [
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarewanju",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
  {
    Name: "Mohammed Ganiyu",
    AssignedTo: "Ade Ayobami",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
  {
    Name: "David Jacobs",
    AssignedTo: "Jide Alade",
    DateAdded: "04-01-2023",
    Status: "Completed",
    btn_text_color: "#00B388",
  },
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarenwaju",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarenwaju",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarenwaju",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarenwaju",
    DateAdded: "04-01-2023",
    Status: "Completed",
    btn_text_color: "#00B388",
  },
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarenwaju",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarenwaju",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarenwaju",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
];

const dashboard_table_body = document.getElementById("dashboard-table-body");

document.addEventListener("DOMContentLoaded", function () {
  dashboardTableData.forEach((item) => {
    dashboard_table_body.innerHTML += `
    <tr>
                  <td class="p-4 border-b border-blue-gray-50">
                    <p
                      class="block antialiased font-sans text-[12px] leading-normal text-[#2F2F2F] font-normal"
                    >
                    ${item.Name}
                    </p>
                  </td>

                  <td class="p-4 border-b border-blue-gray-50">
                    <p
                      class="block antialiased font-sans text-[12px] leading-normal text-[#2F2F2F] font-normal"
                    >
                    ${item.AssignedTo}
                    </p>
                  </td>

                  <td class="p-4 border-b border-blue-gray-50">
                    <p
                      class="block antialiased font-sans text-[12px] leading-normal text-[#2F2F2F] font-normal"
                    >
                    ${item.DateAdded}
                    </p>
                  </td>

                  <td class="p-4 border-b border-blue-gray-50">
                    <p
                      class="block antialiased font-sans text-[12px] leading-normal text-[${
                        item.btn_text_color
                      }] font-normal py-1 bg-[${
      item.btn_padding_color
    }] text-center rounded-sm flex items-center justify-center w-full gap-2"
                    >
                    ${item.icon ? `<img src="${item.icon}" alt="icon" />` : ""}
                    ${item.Status}
                    </p>
                  </td>
                </tr>`;
  });
});

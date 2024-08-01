const dashboardTableData = [
  {
    Name: "Nurudeen Ibrahim",
    AssignedTo: "Seyi Olarewanju",
    DateAdded: "04-01-2023",
    Status: "Pending",
    btn_text_color: "#FFCD28",
  },
  {
    ID: 10321,
    Name: "Shoprite Stores",
    Class: "Property",
    "Inspection method": "Manual",
    Officer: "Mustapha Onasanya",
    Status: "Completed",
    elipseColor: "#175CD3",
    btn_text_color: "#027A48",
    btn_padding_color: "#ECFDF3",
  },
  {
    ID: 10321,
    Name: "Abiodun Abayomi",
    Class: "Motors",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "Ongoing",
    elipseColor: "#FF7A00",
    btn_text_color: "#FF7A00",
    btn_padding_color: "#FFDEBF",
  },
  {
    ID: 10321,
    Name: "Ben's Agro Allied",
    Class: "Agric",
    "Inspection method": "Manual",
    Officer: "Mustapha Onasanya",
    Status: "SENT TO ENGINEER",
    elipseColor: "#00B388",
    btn_text_color: "#9F9F9F",
    btn_padding_color: "transparent",
  },
  {
    ID: 10321,
    Name: "Abiodun Abayomi",
    Class: "Bond",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "Link expired",
    elipseColor: "#FDC75B",
    btn_text_color: "#B42318",
    btn_padding_color: "#FEF3F2",
  },
  {
    ID: 10321,
    Name: "Julius Berger",
    Class: "Engineering",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "Inspection link",
    elipseColor: "#E30000",
    btn_text_color: "##344054",
    btn_padding_color: "#F2F4F7",
    icon: "./assets/table-xicon.svg",
  },
  {
    ID: 10321,
    Name: "Abiodun Abayomi",
    Class: "Agric",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "Completed",
    elipseColor: "#00B388",
    btn_text_color: "#027A48",
    btn_padding_color: "#ECFDF3",
    icon: "./assets/table-backicon.svg",
  },
];

const dashboard_table_body = document.getElementById("dashboard-table-body");

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

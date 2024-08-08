// function initializeModal2() {
//   // FIRST OVERLAY POPUP
//   const showModal = document.querySelector(".show-modal");
//   const modal = document.querySelector(".modal");
//   const overlay = document.querySelector(".overlay");

//   // FIRST OVERLAY FUNCTIONS
//   function closeModals() {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   }

//   function openModal() {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   }

//   showModal.addEventListener("click", openModal);

//   document.querySelector(".close-modal").addEventListener("click", closeModals);
//   document.querySelector(".cancel-btn").addEventListener("click", closeModals);

//   overlay.addEventListener("click", closeModals);

//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       if (!modal.classList.contains("hidden")) {
//         closeModals();
//       }
//     }
//   });
// }

function initializeModal2() {
  const showModal = document.querySelector(".show-modal");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  function closeModals() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  showModal.addEventListener("click", openModal);

  document.querySelector(".close-modal").addEventListener("click", closeModals);

  overlay.addEventListener("click", closeModals);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!modal.classList.contains("hidden")) {
        closeModals();
      }
    }
  });
}

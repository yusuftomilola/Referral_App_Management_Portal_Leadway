function initializeModalExport() {
  // FIRST OVERLAY POPUP
  const showModal = document.querySelector(".show-modal");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  // SECOND OVERLAY POPUP
  const showmodal8 = document.querySelector(".show-modal8");
  const modal8 = document.querySelector(".modal8");
  const overlay2 = document.querySelector(".overlay2");

  // THIRD OVERLAY POPUP
  const showModal3 = document.querySelector(".show-modal3");
  const modal3 = document.querySelector(".modal3");
  const overlay3 = document.querySelector(".overlay3");

  // FIRST OVERLAY FUNCTIONS
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
  document.querySelector(".cancel-btn").addEventListener("click", closeModals);

  overlay.addEventListener("click", closeModals);

  // SECOND OVERLAY FUNCTIONS
  function closeModals2() {
    modal8.classList.add("hidden");
    overlay2.classList.add("hidden");
  }

  function openmodal8() {
    modal8.classList.remove("hidden");
    overlay2.classList.remove("hidden");
    closeModals();
  }

  showmodal8.addEventListener("click", openmodal8);

  document
    .querySelector(".close-modal8")
    .addEventListener("click", closeModals2);

  overlay2.addEventListener("click", closeModals2);

  // THIRD OVERLAY FUNCTIONS
  function closeModals3() {
    modal3.classList.add("hidden");
    overlay3.classList.add("hidden");
  }

  function openModal3() {
    modal3.classList.remove("hidden");
    overlay3.classList.remove("hidden");
    closeModals2();
  }

  showModal3.addEventListener("click", function (event) {
    event.preventDefault();
    openModal3();
  });

  overlay3.addEventListener("click", closeModals3);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!modal.classList.contains("hidden")) {
        closeModals();
      }
      if (!modal8.classList.contains("hidden")) {
        closeModals2();
      }
      if (!modal3.classList.contains("hidden")) {
        closeModals3();
      }
    }
  });
}

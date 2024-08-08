function initializeModal() {
  // FIRST OVERLAY POPUP
  const showModal = document.querySelector(".show-modal");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  // SECOND OVERLAY POPUP
  const showModal2 = document.querySelector(".show-modal2");
  const modal2 = document.querySelector(".modal2");
  const overlay2 = document.querySelector(".overlay2");

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
    modal2.classList.add("hidden");
    overlay2.classList.add("hidden");
  }

  function openModal2() {
    modal2.classList.remove("hidden");
    overlay2.classList.remove("hidden");
    closeModals();
  }

  showModal2.addEventListener("click", openModal2);

  overlay2.addEventListener("click", closeModals2);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!modal.classList.contains("hidden")) {
        closeModals();
      }
      if (!modal2.classList.contains("hidden")) {
        closeModals2();
      }
    }
  });
}

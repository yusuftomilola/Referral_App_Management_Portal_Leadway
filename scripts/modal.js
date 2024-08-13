function initializeModal() {
  // FIRST OVERLAY POPUP
  const showModal = document.querySelector(".show-modal");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  // SECOND OVERLAY POPUP
  const showModal2 = document.querySelector(".show-modal2");
  const modal2 = document.querySelector(".modal2");
  const overlay2 = document.querySelector(".overlay2");

  // THIRD OVERLAY POPUP
  const showModal3 = document.querySelector(".show-modal3");
const modal3 = document.querySelector(".modal3");
const overlay3 = document.querySelector(".overlay3");

const showModal8 = document.querySelector(".show-modal8");
const modal8 = document.querySelector(".modal8");
const overlay8 = document.querySelector(".overlay8");


  // Log elements to check if they're being selected
  console.log('showModal:', showModal);
  console.log('modal:', modal);
  console.log('overlay:', overlay);

  console.log('showModal2:', showModal2);
  console.log('modal2:', modal2);
  console.log('overlay2:', overlay2);

  console.log('showModal3:', showModal3);
  console.log('modal3:', modal3);
  console.log('overlay3:', overlay3);

  console.log('showModal8:', showModal8);
  console.log('modal8:', modal8);
  console.log('overlay8:', overlay8);

  // FIRST OVERLAY FUNCTIONS
  function closeModals() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  if (showModal) {
    showModal.addEventListener("click", openModal);
  }

  if (document.querySelector(".close-modal")) {
    document.querySelector(".close-modal").addEventListener("click", closeModals);
  }

  if (document.querySelector(".cancel-btn")) {
    document.querySelector(".cancel-btn").addEventListener("click", closeModals);
  }

  if (overlay) {
    overlay.addEventListener("click", closeModals);
  }

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

  if (showModal2) {
    showModal2.addEventListener("click", openModal2);
  }

  if (document.querySelector(".close-modal2")) {
    document.querySelector(".close-modal2").addEventListener("click", closeModals2);
  }

  if (document.querySelector(".cancel-btn2")) {
    document.querySelector(".cancel-btn2").addEventListener("click", closeModals2);
  }

  if (overlay2) {
    overlay2.addEventListener("click", closeModals2);
  }

  // THIRD OVERLAY FUNCTIONS
  function closeModals3() {
    modal3.classList.add("hidden");
    overlay3.classList.add("hidden");
  }

  function openModal3() {
    modal3.classList.remove("hidden");
    overlay3.classList.remove("hidden");
  }

  if (showModal3) {
    showModal3.addEventListener("click", openModal3);
  }

  if (document.querySelector(".close-modal3")) {
    document.querySelector(".close-modal3").addEventListener("click", closeModals3);
  }

  if (overlay3) {
    overlay3.addEventListener("click", closeModals3);
  }

  // FOURTH OVERLAY FUNCTIONS
  function closeModals8() {
    modal8.classList.add("hidden");
    overlay8.classList.add("hidden");
  }

  function openModal8() {
    modal8.classList.remove("hidden");
    overlay8.classList.remove("hidden");
  }

  if (showModal8) {
    showModal8.addEventListener("click", openModal8);
  }

  if (document.querySelector(".close8")) {
    document.querySelector(".close8").addEventListener("click", closeModals8);
  }

  if (document.querySelector(".cancel-btn8")) {
    document.querySelector(".cancel-btn8").addEventListener("click", closeModals8);
  }

  if (overlay8) {
    overlay8.addEventListener("click", closeModals8);
  }

  // Handle escape key to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal && !modal.classList.contains("hidden")) {
        closeModals();
      }
      if (modal2 && !modal2.classList.contains("hidden")) {
        closeModals2();
      }
      if (modal3 && !modal3.classList.contains("hidden")) {
        closeModals3();
      }
      if (modal8 && !modal8.classList.contains("hidden")) {
        closeModals8();
      }
    }
  });
}

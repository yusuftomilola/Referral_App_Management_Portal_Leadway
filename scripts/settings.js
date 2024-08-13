function showContent(targetId) {
  const buttons = document.querySelectorAll(".settings-item");
  const contents = document.querySelectorAll(".content");

  let activeButton = null;

  buttons.forEach((button) => {
    const img = button.querySelector("img");
    const text = button.querySelector(".text");

    // Identify the currently active button
    if (button.classList.contains("active")) {
      activeButton = button;
    }

    // Reset all buttons to non-active state
    button.classList.remove("active");
    if (img) {
      const inactiveImageSrc = img.src.replace("-active.svg", ".svg");
      img.src = inactiveImageSrc;
    }
    if (text) {
      text.style.color = "#353535"; 
    }
  });

  // If the clicked button is already active, do nothing further
  if (activeButton && activeButton.dataset.target === targetId) {
    return;
  }

  // Set the clicked button and its corresponding content to active
  buttons.forEach((button) => {
    if (button.dataset.target === targetId) {
      button.classList.add("active");

      const img = button.querySelector("img");
      const text = button.querySelector(".text");

      // Change the image source for the active button
      if (img) {
        const activeImageSrc = img.src.replace(".svg", "-active.svg");
        img.src = activeImageSrc;
      }

      // Change text color for the active button
      if (text) {
        text.style.color = "#002f6c";
      }
    }
  });

  // Manage content visibility based on the targetId
  contents.forEach((content) => {
    if (content.id === targetId) {
      content.classList.add("active");
      content.classList.remove("hidden");
    } else {
      content.classList.remove("active");
      content.classList.add("hidden");
    }
  });
}

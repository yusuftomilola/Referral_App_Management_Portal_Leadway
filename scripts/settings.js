function showContent(targetId) {
  const buttons = document.querySelectorAll(".settings-item");
  const contents = document.querySelectorAll(".content");

  buttons.forEach((button) => {
    const img = button.querySelector("img");
    const text = button.querySelector(".text");

    if (button.dataset.target === targetId) {
      button.classList.add("active");
      // Change the image source for the active button
      if (img) {
        const activeImageSrc = img.src.replace(".svg", "-active.svg");
        img.src = activeImageSrc;
      }
      // Change text color for the active button
      if (text) {
        text.style.color = "#002f6c";
      }
    } else {
      button.classList.remove("active");
      // Revert the image source for inactive buttons
      if (img) {
        const inactiveImageSrc = img.src.replace("-active.svg", ".svg");
        img.src = inactiveImageSrc;
      }
      // Revert text color for inactive buttons
      if (text) {
        text.style.color = "#353535";
      }
    }
  });

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

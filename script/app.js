const hamburgerBtn = document.querySelector(".hamburger-button");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerArrowIcon = document.querySelector(".header-arrow-icon");
let hamburgerClosed = true;
hamburgerMenu.classList.add("hamburger-transition");

hamburgerBtn.addEventListener("click", () => {
  if (hamburgerClosed) {
    hamburgerMenu.classList.remove(
      "hidden",
      "pointer-events-none",
      "opacity-0"
    );
    headerArrowIcon.style.animationPlayState = "paused";
    hamburgerClosed = false;
  } else {
    hamburgerMenu.classList.add("hidden", "pointer-events-none", "opacity-0");
    headerArrowIcon.style.animationPlayState = "running";
    hamburgerClosed = true;
  }
});

const hamburgerMenu = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("ph-x");
  navList.classList.toggle("open");
  console.log("click");
});

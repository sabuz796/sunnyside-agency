const hamburgerMenu = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("open");
  console.log("click");
});

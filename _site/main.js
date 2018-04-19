var responsiveNav = document.querySelector(".responsive-nav");
var hamburgerMenu = document.querySelector("#menu-hamburger");

hamburgerMenu.addEventListener("click", function () {
  responsiveNav.classList.toggle("menu-open");
  hamburgerMenu.classList.toggle("hamburger-menu");
});

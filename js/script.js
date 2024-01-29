const menuSwitch = document.querySelector(".menu-switch");
menuSwitch.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-open");
});
const searchSwitch = document.querySelector(".search-switch");
searchSwitch.addEventListener("click", function () {
  document.documentElement.classList.toggle("search-open");
});

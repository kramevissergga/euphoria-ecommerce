"use strict";
document.addEventListener("click", documentClick);
function documentClick(e) {
  if (e.target.closest(".menu-switch")) {
    document.body.classList.toggle("menu-open");
  }
}

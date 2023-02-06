"use strict";

// -----

var toggleMobileNav = document.querySelector(".header__btn-mobile-nav");
var navHideBtn = document.querySelector(".nav-hide");
var navShowBtn = document.querySelector(".nav-show");
var overlay = document.querySelector(".container__overlay");
var nav = document.querySelector(".header__navigation");

toggleMobileNav.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-show")) {
    e.target.classList.remove("active");
    e.target.nextElementSibling.classList.add("active");
    overlay.classList.add("visible");
    nav.classList.add("opacity");
  } else {
    e.target.classList.remove("active");
    e.target.previousElementSibling.classList.add("active");
    overlay.classList.remove("visible");
    nav.classList.remove("opacity");
  }
});

overlay.addEventListener("click", function () {
  overlay.classList.remove("visible");
  nav.classList.remove("opacity");
  navHideBtn.classList.remove("active");
  navShowBtn.classList.add("active");
});

document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  overlay.classList.remove("visible");
  nav.classList.remove("opacity");
  navHideBtn.classList.remove("active");
  navShowBtn.classList.add("active");
});

// Scroll-----

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("header__link")) return;
  var sectionSuffix = e.target.dataset.goTo;
  document.querySelector(".section-" + sectionSuffix).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  setTimeout(function () {
    navHideBtn.classList.remove("active");
    navShowBtn.classList.add("active");
    overlay.classList.remove("visible");
    nav.classList.remove("opacity");
  }, 500);
});

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

document.addEventListener("click", function (e) {
  if (e.target.tagName !== "A") return;

  e.preventDefault();
});

/* --------- SMALL DEVICES NAVIGATION FUNCTIONALITY-------- */

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
// Close on click event on overlay
overlay.addEventListener("click", function () {
  overlay.classList.remove("visible");
  nav.classList.remove("opacity");
  navHideBtn.classList.remove("active");
  navShowBtn.classList.add("active");
});

// Close on keydown event
document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  overlay.classList.remove("visible");
  nav.classList.remove("opacity");
  navHideBtn.classList.remove("active");
  navShowBtn.classList.add("active");
});

/*---------------PAGE NAVIGATION--------------------- */
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

// Scroll Back to Top

var observerCallBack = function observerCallBack(entries) {
  var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];

  if (!entry.isIntersecting) {
    document.querySelector(".scrollToTop").classList.add("scrollToTop-active");
  } else {
    document.querySelector(".scrollToTop").classList.remove("scrollToTop-active");
  }
};

var observeHero = new IntersectionObserver(observerCallBack, {
  root: null,
  threshold: 0
});
observeHero.observe(document.querySelector(".section-hero"));

document.querySelector(".scrollToTop").addEventListener("click", function () {
  document.querySelector(".header").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

// Hero Buttons functionality

document.querySelector(".btn-cta").addEventListener("click", function (e) {
  document.querySelector(".section-meals").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
document.querySelector(".btn-outline").addEventListener("click", function (e) {
  document.querySelector(".section-how").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

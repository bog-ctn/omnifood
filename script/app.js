"use strict";

document.addEventListener("click", function (e) {
  if (e.target.tagName !== "A") return;

  e.preventDefault();
});

/* --------- SMALL DEVICES NAVIGATION FUNCTIONALITY-------- */

const toggleMobileNav = document.querySelector(".header__btn-mobile-nav");
const navHideBtn = document.querySelector(".nav-hide");
const navShowBtn = document.querySelector(".nav-show");
const overlay = document.querySelector(".container__overlay");
const nav = document.querySelector(".header__navigation");

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
  const sectionSuffix = e.target.dataset.goTo;
  document
    .querySelector(`.section-${sectionSuffix}`)
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  setTimeout(() => {
    navHideBtn.classList.remove("active");
    navShowBtn.classList.add("active");
    overlay.classList.remove("visible");
    nav.classList.remove("opacity");
  }, 500);
});

// Scroll Back to Top

const observerCallBack = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    document.querySelector(".scrollToTop").classList.add("scrollToTop-active");
  } else {
    document
      .querySelector(".scrollToTop")
      .classList.remove("scrollToTop-active");
  }
};

const observeHero = new IntersectionObserver(observerCallBack, {
  root: null,
  threshold: 0,
});
observeHero.observe(document.querySelector(".section-hero"));

document.querySelector(".scrollToTop").addEventListener("click", function () {
  document
    .querySelector(".header")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

// Hero Buttons functionality

document.querySelector(".btn-cta").addEventListener("click", function (e) {
  document
    .querySelector(".section-meals")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
document.querySelector(".btn-outline").addEventListener("click", function (e) {
  document
    .querySelector(".section-how")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

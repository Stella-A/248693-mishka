"use strict";

var navMainElem = document.querySelector(".main-nav");
var navToggleElem = document.querySelector(".main-nav__toggle");

navMainElem.classList.remove("main-nav--nojs");

navToggleElem.addEventListener("click", function() {
  if (navMainElem.classList.contains("main-nav--closed")) {
    navMainElem.classList.remove("main-nav--closed");
    navMainElem.classList.add("main-nav--opened");
  } else {
    navMainElem.classList.add("main-nav--closed");
    navMainElem.classList.remove("main-nav--opened");
  }
});

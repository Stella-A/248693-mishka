"use strict";

var ESC_KEYCODE = 27;
var CART_ELEM = "js-open-cart";
var BODY_ELEM = "BODY";

var pressEsc = function (event) {
  if (event.keyCode === ESC_KEYCODE) {
    closePopup(cartPopupElem, event);
  }
};

var openPopup = function (obj, event) {
  event.preventDefault();
  obj.classList.add("modal-show");
}

var closePopup = function (obj, event) {
  event.preventDefault();
  if (obj.classList.contains("modal-show")) {
    obj.classList.remove("modal-show");
    setDefault();
  }
};

var setDefault = function () {
  var defaultCheckedElem = document.querySelector("input#s");

  defaultCheckedElem.checked = true;
};

var catalogElem = document.querySelector(".catalog__order");
var cartPopupElem = document.querySelector(".modal");

this.addEventListener("click", function(event) {
  var target = event.target;

  while (target != catalogElem) {
    if (target.nodeName === BODY_ELEM) {
      return;
    }

    if (target.classList[target.classList.length - 1] === CART_ELEM) {
      openPopup(cartPopupElem, event);
      return;
    }
    target = target.parentNode;
  }
});

window.addEventListener("keydown", function(event) {
  pressEsc(event);
});

window.addEventListener("click", function(event) {
  if (event.target === cartPopupElem) {
    closePopup(cartPopupElem, event);
  }
});

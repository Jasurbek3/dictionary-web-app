"use strict";

var btnWhen = document.querySelector(".button-when");
var body = document.querySelector("body");
var headerWhen = document.querySelector(".header-when");
var title = document.querySelector(".main-list__title"); // const text = document.querySelector(".main-list__text")

btnWhen.addEventListener("click", function () {
  var When = btnWhen.getAttribute('data-click') || 2;
  headerWhen.innerHTML = null;

  if (When == 1) {
    headerWhen.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z\"\n            stroke=\"#757575\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n    </svg>";
    btnWhen.style.justifyContent = "start";
    btnWhen.style.backgroundColor = "var(--Gray)";
    btnWhen.setAttribute("data-click", 2);
    title.style.color = "var(--DarkGray)";
    body.style.backgroundColor = "var(--white)";
  } else {
    headerWhen.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z\" stroke=\"#A445ED\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>";
    btnWhen.style.justifyContent = "end";
    btnWhen.style.backgroundColor = "var(--purpule)";
    btnWhen.setAttribute("data-click", 1);
    title.style.color = "var(--white)";
    body.style.backgroundColor = "var(--darkBlack)";
  }
});
var fromInput = document.querySelector(".from-input");
var fromButton = document.querySelector(".from-button");
var elBtn = "";
fromButton.addEventListener("click", function (event) {
  elBtn = event.pointerId;
});

if (fromInput.value.trim()) {
  console.log(elBtn);
}
//# sourceMappingURL=main.dev.js.map

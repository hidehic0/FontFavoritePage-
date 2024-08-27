// ==UserScript==
// @name    Page Font To Noto Sans
// @namespace http://tampermonkey.net/
// @vesion    1.0
// @description すべてのフォントをNoto Sansにします
// @author hidehic0
// @grant none
// @match        *://*/*
// ==/UserScript==

(function () {
  "use strict";

  const fontLink = document.createElement("link");
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&display=swap";
  fontLink.rel = "stylesheet";

  document.head.appendChild(fontLink);

  const style = document.createElement("style");

  style.innerHTML = `* { font-family: 'Noto Sans', sans-serif !important; }`;
});

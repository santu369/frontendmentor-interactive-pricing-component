/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./sass/style.scss\");\n\n\nvar pageViewsEl = document.getElementById(\"page-views\");\nvar rangeEl = document.getElementById(\"range\");\nvar priceEl = document.getElementById(\"price\");\nvar toggleEl = document.getElementById(\"toggle\");\nvar pricePerYearEl = document.getElementById(\"price-per-year\");\nvar yearPriceEl = document.getElementById(\"price-year\");\nvar discountSmallEl = document.getElementById(\"discount-small\");\nvar discountlargeEl = document.getElementById(\"discount-large\"); // store pricing details\n\nvar pricing = [[\"10K\", \"8.00\"], [\"50K\", \"12.00\"], [\"100K\", \"16.00\"], [\"500K\", \"24.00\"], [\"1M\", \"36.00\"]]; //store billing type\n\nvar billingType = \"monthly\"; // store slider gradient colors\n\nvar primSoftCyan = \"hsl(174, 77%, 80%)\";\nvar neuLightGrayBlue = \"hsl(224, 65%, 95%)\"; // function to change gradient using percent\n\nvar changeRangeColor = function changeRangeColor(percent, trigger) {\n  // remove old slider gradient if exists\n  if (trigger != \"start\") {\n    document.styleSheets[1].deleteRule(document.styleSheets[1].rules.length - 1);\n  }\n\n  if (window.chrome) {\n    // console.log(\"chrome\"); // chrome, brave, opera\n    //You are using Chrome or Chromium\n    // remove old slider gradient\n    // if (trigger != \"start\") {\n    //   document.styleSheets[1].deleteRule(\n    //     document.styleSheets[1].rules.length - 1\n    //   );\n    // }\n    // add new slider gradient\n    document.styleSheets[1].addRule(\".slider__range::-webkit-slider-runnable-track\", \"background: linear-gradient(\\n          to right, \\n          \".concat(primSoftCyan, \" 0%, \\n          \").concat(primSoftCyan, \" \").concat(percent, \"%, \\n          \").concat(neuLightGrayBlue, \" \").concat(percent, \"%, \\n          \").concat(neuLightGrayBlue, \" 100%\\n          )\"));\n  } // else if (window.opera) {\n  //   console.log(\"opera\");\n  //   //You are using Opera >= 9.2\n  // }\n  else if (\"MozBoxSizing\" in document.body.style) {\n      // console.log(\"firefox\"); // firefox\n      //You are using Firefox or Firefox based >= 3.2\n      // add new slider gradient\n      document.styleSheets[1].addRule(\".slider__range::-moz-range-track\", \"background: linear-gradient(\\n          to right, \\n          \".concat(primSoftCyan, \" 0%, \\n          \").concat(primSoftCyan, \" \").concat(percent, \"%, \\n          \").concat(neuLightGrayBlue, \" \").concat(percent, \"%, \\n          \").concat(neuLightGrayBlue, \" 100%\\n          )\"));\n    } else if ({}.toString.call(window.HTMLElement).indexOf(\"Constructor\") + 1) {\n      console.log(\"safari\"); //You are using Safari >= 3.1\n    } else {\n      console.log(\"other\"); //Unknown\n    }\n}; //function to reset slider\n\n\nvar resetSlider = function resetSlider() {\n  rangeEl.value = 2;\n}; //function to set price based on monthly/yearly billing\n\n\nvar setPrice = function setPrice(value) {\n  var price = pricing[value][1];\n\n  if (billingType === \"monthly\") {\n    priceEl.textContent = \"$ \" + price; // hide price per year\n\n    pricePerYearEl.style.display = \"none\"; // remove animation\n\n    discountSmallEl.classList.remove(\"up-down-anim\");\n    discountlargeEl.classList.remove(\"up-down-anim\");\n  } else {\n    priceEl.textContent = \"$ \" + (price * 0.75).toFixed(2);\n    yearPriceEl.textContent = \"$ \" + ((price * 0.75).toFixed(2) * 12).toFixed(2); // show price per year\n\n    pricePerYearEl.style.display = \"block\"; // add animation\n\n    discountSmallEl.classList.add(\"up-down-anim\");\n    discountlargeEl.classList.add(\"up-down-anim\");\n  }\n}; // slider event handler\n\n\nrangeEl.addEventListener(\"input\", function (e) {\n  switch (e.target.value) {\n    case \"0\":\n      pageViewsEl.textContent = pricing[0][0];\n      changeRangeColor(0);\n      setPrice(0);\n      break;\n\n    case \"1\":\n      pageViewsEl.textContent = pricing[1][0];\n      changeRangeColor(25);\n      setPrice(1);\n      break;\n\n    case \"2\":\n      pageViewsEl.textContent = pricing[2][0];\n      changeRangeColor(50);\n      setPrice(2);\n      break;\n\n    case \"3\":\n      pageViewsEl.textContent = pricing[3][0];\n      changeRangeColor(75);\n      setPrice(3);\n      break;\n\n    case \"4\":\n      pageViewsEl.textContent = pricing[4][0];\n      changeRangeColor(100);\n      setPrice(4);\n      break;\n\n    default:\n      break;\n  }\n}); //toggle event handler\n\ntoggleEl.addEventListener(\"click\", function (e) {\n  toggleEl.classList.toggle(\"justify-content-end\");\n  toggleEl.classList.toggle(\"justify-content-start\");\n\n  switch (toggleEl.getAttribute(\"aria-checked\")) {\n    case \"true\":\n      toggleEl.setAttribute(\"aria-checked\", \"false\");\n      break;\n\n    case \"false\":\n      toggleEl.setAttribute(\"aria-checked\", \"true\");\n      break;\n  }\n\n  if (billingType === \"monthly\") {\n    billingType = \"yearly\";\n  } else {\n    billingType = \"monthly\";\n  }\n\n  setPrice(rangeEl.value);\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var timeout = window.setTimeout(function () {\n    while (true) {\n      if (document.styleSheets[1]) {\n        // add slider gradient here once page loads\n        changeRangeColor(50, \"start\"); // reset slider on page load\n\n        resetSlider();\n        break;\n      }\n    }\n  }, 1000);\n});\nconsole.log(\"loaded\");\n\n//# sourceURL=webpack://frontendmentor-interactive-pricing-component/./js/script.js?");

/***/ }),

/***/ "./node_modules/bootstrap/scss/bootstrap.scss":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/scss/bootstrap.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontendmentor-interactive-pricing-component/./node_modules/bootstrap/scss/bootstrap.scss?");

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontendmentor-interactive-pricing-component/./sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
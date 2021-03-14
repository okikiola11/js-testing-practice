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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ceaserCipher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ceaserCipher */ \"./src/modules/ceaserCipher.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n\n\n\nconst capitalize = (string) => {\n  let firstStr = string[0].toUpperCase();\n  if(string.charAt(0) === string[0]) \n    string = firstStr + string.slice(1);\n    return string;\n}\n\nconst reverseString = (string) => {\n  return string.split('').reverse().join('');\n}\n\n//When an array shd return a list of objs present\nconst frequencies = array =>\n  array.reduce((x, v) => {\n    x[v] = x[v] ? x[v] + 1 : 1;\n    return x;\n  }, {});\n\n//console.log(frequencies(['x', 'y', 'x', 'z', 'x', 'x', 'y']));\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_ceaserCipher__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n\n//# sourceURL=webpack://testing-pr/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\n  const add = (...arg) => {\n    return arg.reduce((a, b) => a + b, 0);\n  }\n\n  const subtract = (...arg) => {\n    let total = arg[0];\n    if (typeof (total) !== 'number') return false;\n    length = arg.length;\n    for (let i = 1; i < length; i++) {\n      if (typeof (arg[i]) == 'number') {\n        total -= arg[i];\n      } else {\n        return false;\n      }\n    }\n    return total;\n  }\n\n  const divide = (...arg) => {\n    let total = arg[0];\n    if (typeof (total) !== 'number') return false;\n    length = arg.length;\n    for (let i = 1; i < length; i++) {\n      if (typeof (arg[i]) == 'number') {\n        total /= arg[i];\n      } else {\n        return false;\n      }\n    }\n    return total;\n  }\n\n  const multiply = (...arr) => {\n    return arr.reduce((a, b) => a * b, 1);\n  }\n\n  console.log(add(1,3,4,5));\n  console.log(subtract(7,3,2,-1,10));\n  console.log(divide(100,5,2));\n  console.log(multiply(100,5,3));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n\n//# sourceURL=webpack://testing-pr/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/ceaserCipher.js":
/*!*************************************!*\
  !*** ./src/modules/ceaserCipher.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst caesarCipher = () => {\n  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (caesarCipher);\n\n//# sourceURL=webpack://testing-pr/./src/modules/ceaserCipher.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
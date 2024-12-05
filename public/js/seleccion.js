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

/***/ "./src/js/seleccion.js":
/*!*****************************!*\
  !*** ./src/js/seleccion.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// Seleccionar los checkboxes\r\nconst renta = document.getElementById('renta');\r\nconst venta = document.getElementById('venta');\r\n\r\n// Función para actualizar el valor del checkbox\r\nfunction updateCheckboxValue(checkbox) {\r\n    checkbox.value = checkbox.checked ? 'true' : 'false';\r\n    console.log(`Checkbox ${checkbox.name} actualizado a: ${checkbox.value}`);\r\n}\r\n\r\n// Escuchar cambios en \"renta\"\r\nrenta.addEventListener('change', function () {\r\n    updateCheckboxValue(this);\r\n});\r\n\r\n// Escuchar cambios en \"venta\"\r\nventa.addEventListener('change', function () {\r\n    updateCheckboxValue(this);\r\n});\n\n//# sourceURL=webpack://bienesraices220262/./src/js/seleccion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/seleccion.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
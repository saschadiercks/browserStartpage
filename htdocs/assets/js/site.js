/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findAll;
// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
function findAll(selector) {
	return document.querySelectorAll(selector);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
function addClass(elements, className) {
	elements.forEach(function(element){
		element.classList.add(className);
	});
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeClass;
// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
function removeClass(elements,className) {
	elements.forEach(function(element){
		element.classList.remove(className);
	});
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleClass;
// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
function toggleClass(elements, className) {
	elements.forEach(function(element){
		element.classList.toggle(className);
	});
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
function find(selector) {
	return document.querySelector(selector);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_setJsAvailability_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notificationKeydown_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_handleTabsLocalStorage_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_stickyElement_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__functions_fixScrollPos_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_handleTriggers_js__ = __webpack_require__(12);
// ###### import ######









//import addClass from "./functions/addClass.js";
//import findAll from "./functions/findAll.js";
//import doLocalStorage from "./functions/localStorage.js";
//import removeClass from "./functions/removeClass.js";
//import scrollToPos from "./functions/scrollToPos.js";
//import tabHandling from "./components/tabHandling.js";

// ####################
// ##### settings #####
// ####################
// const selector__applyJsClassTo = "body";
// const selector__notification = ".notification";
// const localStorage__idTab = "currentTab";
// const selector__tabContent = ".tabbed-content";
// const class__isActive = "sdi-js-active";

// ###### script ######
// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// --- Toggle JS Availability
	Object(__WEBPACK_IMPORTED_MODULE_0__components_setJsAvailability_js__["a" /* default */])("body");

	// handle tabs
	Object(__WEBPACK_IMPORTED_MODULE_2__components_handleTabsLocalStorage_js__["a" /* default */])('.js-tab-trigger','.tabbed-content');

	// handle triggers
	Object(__WEBPACK_IMPORTED_MODULE_5__functions_handleTriggers_js__["a" /* default */])('.js-flyout-trigger', false);
	Object(__WEBPACK_IMPORTED_MODULE_5__functions_handleTriggers_js__["a" /* default */])('.js-collapse-trigger', false);
	Object(__WEBPACK_IMPORTED_MODULE_5__functions_handleTriggers_js__["a" /* default */])('.js-modal-trigger', Object(__WEBPACK_IMPORTED_MODULE_4__functions_fixScrollPos_js__["a" /* default */])());

	// -- make elements sticky
	Object(__WEBPACK_IMPORTED_MODULE_3__functions_stickyElement_js__["a" /* default */])('#application-header','#content','padding-top');
	Object(__WEBPACK_IMPORTED_MODULE_3__functions_stickyElement_js__["a" /* default */])('#application-footer','#content','padding-bottom');

	// --- Show/hide notification
	Object(__WEBPACK_IMPORTED_MODULE_1__components_notificationKeydown_js__["a" /* default */])(".notification");



	// // ##### handle localeStorage
	// // get Id from first tab to save as fallback
	// const id__firstTab = '#' + findAll(selector__tabContent)[0].id;

	// // show saved tab
	// if(doLocalStorage(localStorage__idTab) === null) {
	// 	// show first tab
	// 	doLocalStorage(localStorage__idTab, id__firstTab);
	// 	addClass(findAll(id__firstTab), class__isActive);
	// } else {
	// 	//show saved tab
	// 	addClass(findAll(doLocalStorage(localStorage__idTab)), class__isActive);
	// }
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setJsAvailability;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__ = __webpack_require__(2);
// ###### import ######




// ####################
// ##### settings #####
// ####################
const class__jsIsAvailable = 'js';
const class__jsIsNotAvailable = 'no-js';

// ###### script ######
function setJsAvailability(selector) {
	var selector = Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(selector);

	selector.forEach(function() {
		Object(__WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__["a" /* default */])(selector, class__jsIsAvailable);
		Object(__WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__["a" /* default */])(selector, class__jsIsNotAvailable);
	});
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = notificationKeyDown;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__ = __webpack_require__(2);
// ###### import ######




// ####################
// ##### settings #####
// ####################
const class__isHidden = 'js-hidden';
const class__isVisible = 'js-visible';

// ###### script ######
function notificationKeyDown(selector) {
	var targetElement = Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(selector);

	document.addEventListener('keydown', function() {
		targetElement.forEach( function() {
			Object(__WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__["a" /* default */])(targetElement, class__isVisible);
			Object(__WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__["a" /* default */])(targetElement, class__isHidden);
		});
	});

	document.addEventListener('keyup', function() {
		targetElement.forEach( function() {
			Object(__WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__["a" /* default */])(targetElement, class__isHidden);
			Object(__WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__["a" /* default */])(targetElement, class__isVisible);
		});
	});
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tabHandling;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_toggleClass_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_addClass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_removeClass_js__ = __webpack_require__(2);
// ###### import ######





// ####################
// ##### settings #####
// ####################
const class__isActive = 'sdi-is-active';
const key__localStorage = 'lastTabID';

// ###### script ######
function tabHandling(selectorTrigger,selectorContent) {
	var tabTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(selectorTrigger);
	var tabContent = Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(selectorContent)

	// -- check local storage
	var value__localStorage = localStorage.getItem(key__localStorage);
	if(value__localStorage !== null) {
		// open saved tab
		Object(__WEBPACK_IMPORTED_MODULE_2__functions_addClass_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(value__localStorage), class__isActive);

		// add active class to button
		Object(__WEBPACK_IMPORTED_MODULE_2__functions_addClass_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])('a[data-target="' + value__localStorage + '"]'), class__isActive);
	} else {
		// wihtout localStorage we'll just show the first tab
		document.querySelector(selectorTrigger).classList.add(class__isActive);
		document.querySelector(selectorContent).classList.add(class__isActive);
	}

	// -- listen for click on triggers and show/hide content
	tabTrigger.forEach(function(element) {
		element.addEventListener('click', function() {
			// hide all tabs and remove active class from button
			Object(__WEBPACK_IMPORTED_MODULE_3__functions_removeClass_js__["a" /* default */])(tabTrigger, class__isActive);
			Object(__WEBPACK_IMPORTED_MODULE_3__functions_removeClass_js__["a" /* default */])(tabContent, class__isActive);

			// show selected tab
			var triggerTarget = Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(this.getAttribute('data-target'));
			Object(__WEBPACK_IMPORTED_MODULE_1__functions_toggleClass_js__["a" /* default */])(triggerTarget, class__isActive);

			// show clicked button
			this.classList.add(class__isActive);

			// save to local storage, when key is not pressed
			if(event.altKey !== true) {
				localStorage.setItem(key__localStorage, this.getAttribute('data-target'));
			}

		});
	});
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stickyElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addClass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__find_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findAll_js__ = __webpack_require__(0);
// ###### import ######




// ####################
// ##### settings #####
// ####################
const class__sticky = 'js-sticky';

// ###### script ######
function stickyElement(selectorSticky, selectorCompensate, propertyCompensate) {
	var stickyElement = Object(__WEBPACK_IMPORTED_MODULE_2__findAll_js__["a" /* default */])(selectorSticky);
	var stickyHeight = Object(__WEBPACK_IMPORTED_MODULE_1__find_js__["a" /* default */])(selectorSticky).clientHeight + 'px';
	Object(__WEBPACK_IMPORTED_MODULE_0__addClass_js__["a" /* default */])(stickyElement, class__sticky);

	Object(__WEBPACK_IMPORTED_MODULE_1__find_js__["a" /* default */])(selectorCompensate).style.setProperty(propertyCompensate,stickyHeight);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fixScrollPos;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find_js__ = __webpack_require__(4);
// ###### import ######


// ####################
// ##### settings #####
// ####################
const selector__body = Object(__WEBPACK_IMPORTED_MODULE_0__find_js__["a" /* default */])('body');

// ###### script ######
function fixScrollPos() {
	selector__body
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleTriggers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findAll_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggleClass_js__ = __webpack_require__(3);
// ###### import ######



// ####################
// ##### settings #####
// ####################
const class__isActive = 'js-is-active';

// ###### script ######
function handleTriggers(selector, callback) {
	var targetElements = Object(__WEBPACK_IMPORTED_MODULE_0__findAll_js__["a" /* default */])(selector);

	targetElements.forEach(function(element) {
		element.addEventListener('click', function() {
			var elementTarget = Object(__WEBPACK_IMPORTED_MODULE_0__findAll_js__["a" /* default */])(this.getAttribute('data-target'));
			Object(__WEBPACK_IMPORTED_MODULE_1__toggleClass_js__["a" /* default */])(elementTarget, class__isActive);
		});
	})

	if(callback === false) {
		event.preventDefault();
	} else {
		callback();
	}
}


/***/ })
/******/ ]);
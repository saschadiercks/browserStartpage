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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_setJsAvailability_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notificationKeydown_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_handleTabsLocalStorage_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_stickyElement_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__functions_fixScrollPos_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_handleTriggers_js__ = __webpack_require__(11);
// ###### import ######








// ####################
// ##### settings #####
// ####################

// ###### script ######
// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// --- Toggle JS Availability
	Object(__WEBPACK_IMPORTED_MODULE_0__components_setJsAvailability_js__["a" /* default */])("body");

	// handle tabs
	Object(__WEBPACK_IMPORTED_MODULE_2__components_handleTabsLocalStorage_js__["a" /* default */])('.js-tab-trigger','.tabbed-content');

	// handle triggers
	Object(__WEBPACK_IMPORTED_MODULE_5__functions_handleTriggers_js__["a" /* default */])('.js-flyout-trigger', __WEBPACK_IMPORTED_MODULE_4__functions_fixScrollPos_js__["a" /* default */]);
	Object(__WEBPACK_IMPORTED_MODULE_5__functions_handleTriggers_js__["a" /* default */])('.js-collapse-trigger', false);
	Object(__WEBPACK_IMPORTED_MODULE_5__functions_handleTriggers_js__["a" /* default */])('.js-modal-trigger', __WEBPACK_IMPORTED_MODULE_4__functions_fixScrollPos_js__["a" /* default */]);

	// -- make elements sticky
	Object(__WEBPACK_IMPORTED_MODULE_3__functions_stickyElement_js__["a" /* default */])('#application-footer','#content','padding-bottom');

	// --- Show/hide notification
	Object(__WEBPACK_IMPORTED_MODULE_1__components_notificationKeydown_js__["a" /* default */])(".notification");
});


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tabHandling;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__ = __webpack_require__(2);
// ###### import ######




// ####################
// ##### settings #####
// ####################
const class__isActive = 'sdi-is-active';
const key__localStorage = 'lastTabID';

// ###### script ######
function tabHandling(selectorTrigger, selectorContent) {
	var tabTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(selectorTrigger);
	var tabContent = Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(selectorContent)

	// -- check for hash and if there is a tab using that hash
	// to allow linking to tab via hash
	if (document.location.hash && Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])('a[data-target="' + document.location.hash + '"]').length > 0) {
		handleTabs(document.location.hash);

		// overwrite scroll-position of hash
		window.scrollTo(0, 0);
	} else {

		// -- check local storage
		var value__localStorage = localStorage.getItem(key__localStorage);
		if (value__localStorage !== null) {
			handleTabs(value__localStorage);
		} else {
			// wihtout localStorage we'll just show the first tab
			document.querySelector(selectorTrigger).classList.add(class__isActive);
			document.querySelector(selectorContent).classList.add(class__isActive);
		}
	}

	// -- listen for click on triggers and show/hide content
	tabTrigger.forEach(function (element) {
		element.addEventListener('click', function (event) {
			event.preventDefault();

			var triggerTarget = this.getAttribute('data-target');

			// now handle tabs
			handleTabs(triggerTarget);

			// save to local storage
			saveToLocalStorage(triggerTarget);

			// update hash in URL to allow easy copy/paste
			history.pushState(null, null, triggerTarget);
		});
	});

	// -- open tab and mark button as active
	function handleTabs(selector) {

		// hide all tabs and remove active class from buttons
		Object(__WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__["a" /* default */])(tabTrigger, class__isActive);
		Object(__WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__["a" /* default */])(tabContent, class__isActive);

		// open saved tab
		Object(__WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])(selector), class__isActive);

		// add active class to button
		Object(__WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__functions_findAll_js__["a" /* default */])('a[data-target="' + selector + '"]'), class__isActive);
	}

	// -- save to localStorage
	function saveToLocalStorage(selector) {
		// save to local storage, when key is not pressed
		if (event.altKey !== true) {
			localStorage.setItem(key__localStorage, selector);
		}
	}
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stickyElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addClass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__find_js__ = __webpack_require__(9);
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
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fixScrollPos;
// ###### import ######

// ####################
// ##### settings #####
// ####################
const selector__body = document.querySelector('body');
const class__elementIsFixed = 'sdi-is-fixed';

var scrollYSaved;

// ###### script ######
function fixScrollPos(event) {
	var scrollY = window.pageYOffset;
	//console.log(event);

	if(selector__body.classList.contains(class__elementIsFixed)) {
		selector__body.classList.remove(class__elementIsFixed);
		selector__body.style.top = '';
		window.scrollTo(0,scrollYSaved);
	} else {
		selector__body.classList.add(class__elementIsFixed);
		selector__body.style.top = '-' + scrollY + 'px';
		scrollYSaved = scrollY;
	}
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleTriggers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findAll_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggleClass_js__ = __webpack_require__(12);
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

			// check if a callback is defined
			if(typeof callback === "function") {
				callback();
			}
			event.preventDefault();
		});
	})
}


/***/ }),
/* 12 */
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


/***/ })
/******/ ]);
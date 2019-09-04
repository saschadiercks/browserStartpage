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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// TODO: use data-target instead of elementIndex

// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// show notification on keydown and hide it on keyup
	document.addEventListener('keydown', function() {
		var targetElement = document.getElementById('notification');
		addClass(targetElement,'js-visible');
		removeClass(targetElement,'js-hidden');
	});
	document.addEventListener('keyup', function() {
		var targetElement = document.getElementById('notification');
		addClass(targetElement,'js-hidden');
		removeClass(targetElement,'js-visible');
	});

	// per default localStorage is updated, when tabs are switched
	updateLocalStorageOnTabSwitch = true;

	// make element sticky (via position in css)
	function stickyElement(stickyId,compensateId,compensateProperty) {
		var compensateElement = document.getElementById(compensateId);
		var stickyElement = document.getElementById(stickyId);
		var stickyHeight = stickyElement.clientHeight + 'px';
		addClass(stickyElement,'js-sticky');

		//add Element-Height as defined property to desired element
		compensateElement.style.setProperty(compensateProperty,stickyHeight);
	}

	// toggle Element
	function toggleElement(elementId,targetElementId) {
		toggleElement = document.getElementById(elementId);
		toggleElement.onclick = function() {
			targetElement = document.getElementById(targetElementId);
			if(targetElement.classList.contains('js-visible')) {
				addClass(targetElement,'js-hidden');
				removeClass(targetElement,'js-visible');
			} else {
				removeClass('js-hidden');
				addClass('js-visible');
			}
			event.preventDefault();
		}
	}

	// Overlay-Handling
	function handleOverlayTriggers(elementClassName) {
		var elements = document.getElementsByClassName(elementClassName);
		for(i=0; i < elements.length; i++) {
			elements[i].onclick = function(event) {
				var target = this.getAttribute('data-target');
				toggleOverlay(target,event);
			}
		}
	}
	function toggleOverlay(elementId,event) {
		var targetElement = document.getElementById(elementId);
		var effectClassApplyTo = document.getElementsByTagName("body")[0];
		if(targetElement.classList.contains('js-visible')) {
			addClass(targetElement,'js-hidden');
			removeClass(targetElement,'js-visible');
			removeClass(effectClassApplyTo,'js-fx');
		} else {
			removeClass(targetElement,'js-hidden');
			addClass(targetElement,'js-visible');
			addClass(effectClassApplyTo,'js-fx');
		}
		fixElement("content");
		event.preventDefault();
	}

	// Collapse-Handling
	function handleCollapseTriggers(elementClassName) {
		var elements = document.getElementsByClassName(elementClassName);
		for(i=0; i < elements.length; i++) {
			elements[i].onclick = function(event) {
				var target = this.getAttribute('data-target');
				toggleCollapse(target,event);
			}
		}
	}
	function toggleCollapse(elementId,event) {
		var targetElement = document.getElementById(elementId);
		if(targetElement.classList.contains('js-opened')) {
			addClass(targetElement,'js-closed');
			removeClass(targetElement,'js-opened');
		} else {
			removeClass(targetElement,'js-closed');
			addClass(targetElement,'js-opened');
		}
		event.preventDefault();
	}

	// Tab-Handling-Function
	// initially set Element-count of tabs and tabbedContent and check consistency
	var tabTrigger = document.getElementsByClassName("js-tab-trigger");
	var tabbedContent = document.getElementsByClassName("tabbed-content");
	if(tabTrigger.length !== tabbedContent.length) {
		console.log("count of tabs and tabbed-contend isn't consistent");
	}
	// -- set Current-Tab and tabbed-content
	var setCurrentTab = function(newTabId) {
		markTabTrigger = document.getElementsByClassName("js-tab-trigger")[newTabId].classList.add("active");
		unhideSelectedContent = document.getElementsByClassName("tabbed-content")[newTabId].classList.add("active");
		if(updateLocalStorageOnTabSwitch === false) {
			console.log("localStorage not updated");
		} else {
			localStorage.setItem("tabbedContentId", newTabId);
			console.log("localStorage ID is: " + newTabId);
		}

	}

	// -- unset Current-Tab and tabbed-conent
	var unsetTabs = function() {
		for(i=0; i < tabbedContent.length; i++) {
			removeClass(tabTrigger[i],'active');
			removeClass(tabbedContent[i],'active');
		}
	}

	// -- if DOM is ready, check if localStorage is filled and stored Id is still available
	var savedLocalStorageId = localStorage.getItem("tabbedContentId");
	if(savedLocalStorageId !== null && tabTrigger.length >= savedLocalStorageId) {
		setCurrentTab(savedLocalStorageId);
	} else {
		console.log("localStorage is empty or stored Id is no longer present - setting default");
		setCurrentTab(0);
	}

	// -- switch tabs onClick
	for(i=0; i < tabTrigger.length; i++) {
		(function(index){
			tabTrigger[i].onclick = function(event){
				if(event.altKey === true) {
					updateLocalStorageOnTabSwitch = false;
				} else {
					updateLocalStorageOnTabSwitch = true;
				}
				unsetTabs();
				setCurrentTab(index,updateLocalStorageOnTabSwitch);
				return false;
			}
		})(i);
	}

	// ---- fix element to current position
	function fixElement(elementId) {
		elementToFix = document.getElementById(elementId);
		scrollY = window.pageYOffset;

		if(elementToFix.classList.contains('js-fixed')) {
			removeClass(elementToFix,'js-fixed');
			elementToFix.style.top = '';
			scrollToTarget(0,scrollYMem);
		} else {
			addClass(elementToFix,'js-fixed');
			elementToFix.style.top = '-' + scrollY + 'px';
			scrollYMem = scrollY;
		}
		console.log(scrollYMem);
	}

	// ---- initialize ----

		//sticky header (item(Id) to fix, item(Id) with property to compensate fix)
		function stickyElements() {
			stickyElement('application-header','content','padding-top');
			stickyElement('application-footer','content','padding-bottom');
		}

		stickyElements();
		window.onresize = stickyElements;

		// Collapse
		handleCollapseTriggers('js-collapse-toggle');

		// Overlays
		handleOverlayTriggers('js-overlay-toggle');

		// Modals
		handleOverlayTriggers('js-modal-toggle');
});


/***/ })
/******/ ]);
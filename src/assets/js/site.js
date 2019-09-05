// ###### import ######
import setJsAvailability from "./components/setJsAvailability";


import addClass from "./functions/addClass.js";
import find from "./functions/find.js";
import doLocalStorage from "./functions/localStorage.js";
import removeClass from "./functions/removeClass.js";
import scrollToPos from "./functions/scrollToPos.js";
import tabHandling from "./components/tabHandling.js";

// ####################
// ##### settings #####
// ####################
const selector__applyJsClassTo = "body";
const localStorage__idTab = "currentTab";
const selector__tabContent = ".tabbed-content";
const class__isActive = "sdi-js-active";

// ###### script ######
// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// ##### Toggle HTML
	setJsAvailability(selector__applyJsClassTo);

	// // ##### handle localeStorage
	// // get Id from first tab to save as fallback
	// const id__firstTab = '#' + find(selector__tabContent)[0].id;

	// // show saved tab
	// if(doLocalStorage(localStorage__idTab) === null) {
	// 	// show first tab
	// 	doLocalStorage(localStorage__idTab, id__firstTab);
	// 	addClass(find(id__firstTab), class__isActive);
	// } else {
	// 	//show saved tab
	// 	addClass(find(doLocalStorage(localStorage__idTab)), class__isActive);
	// }
});

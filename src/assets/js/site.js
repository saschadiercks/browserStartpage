// #### imports ####
import addClass from "./functions/addClass.js";
import removeClass from "./functions/removeClass.js";
import scrollToPos from "./functions/scrollToPos.js";
import tabHandling from "./components/tabHandling.js";

// #### run ####
// TODO: use data-target instead of elementIndex

// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// Toggle HTML
	const html = document.querySelector("html");
	addClass(html,'js');
	removeClass(html,'no-js');

	// Tab Handling
	tabHandling();

});

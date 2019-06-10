// #### imports ####
import addClass from "./functions/addClass.js";
import removeClass from "./functions/removeClass.js";

// #### run ####
document.addEventListener('DOMContentLoaded', function() {

	// Toggle HTML
	const html = document.querySelector("html");
	addClass(html,'js');
	removeClass(html,'no-js');
});

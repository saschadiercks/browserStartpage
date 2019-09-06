// ###### import ######
import findAll from "../functions/findAll.js";
import addClass from "../functions/addClass.js";
import removeClass from "../functions/removeClass.js";

// ####################
// ##### settings #####
// ####################
const class__jsIsAvailable = 'js';
const class__jsIsNotAvailable = 'no-js';

// ###### script ######
export default function setJsAvailability(selector) {
	var selector = findAll(selector);

	selector.forEach(function() {
		addClass(selector, class__jsIsAvailable);
		removeClass(selector, class__jsIsNotAvailable);
	});
}

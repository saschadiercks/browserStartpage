// ###### import ######
import find from "../functions/find.js";
import addClass from "../functions/addClass.js";
import removeClass from "../functions/removeClass.js";

// ####################
// ##### settings #####
// ####################
const class__isHidden = 'js-hidden';
const class__isVisible = 'js-visible';

// ###### script ######
export default function notificationKeyDown(selector) {
	var targetElement = find(selector);

	document.addEventListener('keydown', function() {
		targetElement.forEach( function() {
			addClass(targetElement, class__isVisible);
			removeClass(targetElement, class__isHidden);
		});
	});

	document.addEventListener('keyup', function() {
		targetElement.forEach( function() {
			addClass(targetElement, class__isHidden);
			removeClass(targetElement, class__isVisible);
		});
	});
}

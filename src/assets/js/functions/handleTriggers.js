// ###### import ######
import find from "../functions/find.js";
import toggleClass from "../functions/toggleClass.js";
import removeClass from "../functions/removeClass.js";

// ####################
// ##### settings #####
// ####################
const class__isActive = 'js-is-active';

// ###### script ######
export default function handleTriggers(selector, callback) {
	var targetElements = find(selector);

	targetElements.forEach(function(element) {
		element.addEventListener('click', function() {
			var selectorTarget = find('#' + this.getAttribute('data-target'));
			toggleClass(selectorTarget, class__isActive);
		});
	})

	if(callback === false) {
		event.preventDefault();
	} else {
		callback();
	}
}

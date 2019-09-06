// ###### import ######
import findAll from "../functions/findAll.js";
import toggleClass from "../functions/toggleClass.js";

// ####################
// ##### settings #####
// ####################
const class__isActive = 'js-is-active';

// ###### script ######
export default function handleTriggers(selector, callback) {
	var targetElements = findAll(selector);

	targetElements.forEach(function(element) {
		element.addEventListener('click', function() {
			var elementTarget = findAll(this.getAttribute('data-target'));
			toggleClass(elementTarget, class__isActive);
		});
	})

	if(callback === false) {
		event.preventDefault();
	} else {
		callback();
	}
}

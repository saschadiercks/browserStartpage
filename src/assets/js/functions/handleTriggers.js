// ###### import ######
import findAll from "./findAll.js";
import toggleClass from "./toggleClass.js";

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

			// check if a callback is defined
			if(typeof callback === "function") {
				callback();
			}
			event.preventDefault();
		});
	})
}

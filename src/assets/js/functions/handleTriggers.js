// ###### import ######
import findAll from "./findAll.js";
import toggleClass from "./toggleClass.js";

// ####################
// ##### settings #####
// ####################
const class__isActive = 'js-is-active';

// ###### script ######
export default function handleTriggers(selector, callback) {
	let targetElementsObject = findAll(selector);

  // convert the object into an array, so we can run forEach in IE on it
  let targetElements = Array.prototype.slice.call(targetElementsObject);

	targetElements.forEach(function(element) {
		element.addEventListener('click', function() {
			let elementTarget = findAll(this.getAttribute('data-target'));
			toggleClass(elementTarget, class__isActive);

			// check if a callback is defined
			if(typeof callback === "function") {
				callback();
			}
			event.preventDefault();
		});
	})
}

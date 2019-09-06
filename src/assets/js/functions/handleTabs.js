// ###### import ######
import findAll from "./findAll.js";
import toggleClass from "./toggleClass.js";
import addClass from "./addClass.js";
import removeClass from "./removeClass.js";

// ####################
// ##### settings #####
// ####################
const class__isActive = 'js-is-active';

// ###### script ######
export default function tabHandling(selectorTrigger,selectorContent) {
	var tabTrigger = findAll(selectorTrigger);
	var tabContent = findAll(selectorContent)

	// -- hide all tabs
	function hideAllTabs(elements) {
		elements.forEach(function() {
			removeClass(elements,class__isActive);
		});
	}

	// -- listen for click on triggers and show/hide content
	tabTrigger.forEach(function(element) {
		element.addEventListener('click', function() {
			hideAllTabs(tabContent);
			var elementTarget = findAll('#' + this.getAttribute('data-target'));
			toggleClass(elementTarget, class__isActive);
		});
	});
}

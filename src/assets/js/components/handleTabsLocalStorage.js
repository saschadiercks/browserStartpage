// ###### import ######
import findAll from "../functions/findAll.js";
import toggleClass from "../functions/toggleClass.js";
import addClass from "../functions/addClass.js";
import removeClass from "../functions/removeClass.js";

// ####################
// ##### settings #####
// ####################
const class__isActive = 'sdi-is-active';
const key__localStorage = 'lastTabID';

// ###### script ######
export default function tabHandling(selectorTrigger,selectorContent) {
	var tabTrigger = findAll(selectorTrigger);
	var tabContent = findAll(selectorContent)

	// -- check local storage
	var value__localStorage = localStorage.getItem(key__localStorage);
	if(value__localStorage !== null) {
		// open saved tab
		addClass(findAll(value__localStorage), class__isActive);

		// add active class to button
		addClass(findAll('a[data-target="' + value__localStorage + '"]'), class__isActive);
	} else {
		// wihtout localStorage we'll just show the first tab
		document.querySelector(selectorTrigger).classList.add(class__isActive);
		document.querySelector(selectorContent).classList.add(class__isActive);
	}

	// -- listen for click on triggers and show/hide content
	tabTrigger.forEach(function(element) {
		element.addEventListener('click', function() {
			event.preventDefault();

			// hide all tabs and remove active class from button
			removeClass(tabTrigger, class__isActive);
			removeClass(tabContent, class__isActive);

			// show selected tab
			var triggerTarget = findAll(this.getAttribute('data-target'));
			toggleClass(triggerTarget, class__isActive);

			// show clicked button
			this.classList.add(class__isActive);

			// save to local storage, when key is not pressed
			if(event.altKey !== true) {
				localStorage.setItem(key__localStorage, this.getAttribute('data-target'));
			}

		});
	});
}

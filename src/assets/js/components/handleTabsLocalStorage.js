// ###### import ######
import findAll from "../functions/findAll.js";
import addClass from "../functions/addClass.js";
import removeClass from "../functions/removeClass.js";

// ####################
// ##### settings #####
// ####################
const class__isActive = 'sdi-is-active';
const key__localStorage = 'lastTabID';

// ###### script ######
export default function tabHandling(selectorTrigger, selectorContent) {
	var tabTrigger = findAll(selectorTrigger);
	var tabContent = findAll(selectorContent)

	// -- check for hash and if there is a tab using that hash
	// to allow linking to tab via hash
	if (document.location.hash && findAll('a[data-target="' + document.location.hash + '"]').length > 0) {
		handleTabs(document.location.hash);
	} else {

		// -- check local storage
		var value__localStorage = localStorage.getItem(key__localStorage);
		if (value__localStorage !== null) {
			handleTabs(value__localStorage);
		} else {
			// wihtout localStorage we'll just show the first tab
			document.querySelector(selectorTrigger).classList.add(class__isActive);
			document.querySelector(selectorContent).classList.add(class__isActive);
		}
	}

	// -- listen for click on triggers and show/hide content
	tabTrigger.forEach(function (element) {
		element.addEventListener('click', function (event) {
			event.preventDefault();

			var triggerTarget = this.getAttribute('data-target');

			// now handle tabs
			handleTabs(triggerTarget);

			// save to local storage
			saveToLocalStorage(triggerTarget);

			// update hash in URL to allow easy copy/paste
			history.pushState(null, null, triggerTarget);
		});
	});

	// -- open tab and mark button as active
	function handleTabs(selector) {

		// hide all tabs and remove active class from buttons
		removeClass(tabTrigger, class__isActive);
		removeClass(tabContent, class__isActive);

		// open saved tab
		addClass(findAll(selector), class__isActive);

		// add active class to button
		addClass(findAll('a[data-target="' + selector + '"]'), class__isActive);
	}

	// -- save to localStorage
	function saveToLocalStorage(selector) {
		// save to local storage, when key is not pressed
		if (event.altKey !== true) {
			localStorage.setItem(key__localStorage, selector);
		}
	}
}

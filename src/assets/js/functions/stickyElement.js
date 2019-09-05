// ###### import ######
import addClass from "../functions/addClass.js";
import find from "../functions/find.js";

// ####################
// ##### settings #####
// ####################
const class__sticky = 'js-sticky';

// ###### script ######
export default function stickyElement(selectorSticky, selectorCompensate, propertyCompensate) {
	var stickyElement = find(selectorSticky);
	var stickyHeight = stickyElement.clientHeight + 'px';
	addClass(stickyElement, class__sticky);

	document.querySelector(selectorCompensate).style.setProperty(propertyCompensate,stickyHeight);
}

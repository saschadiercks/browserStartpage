// ###### import ######
import addClass from "../functions/addClass.js";
import find from "../functions/find.js";
import findAll from "../functions/findAll.js";

// ####################
// ##### settings #####
// ####################
const class__sticky = 'js-sticky';

// ###### script ######
export default function stickyElement(selectorSticky, selectorCompensate, propertyCompensate) {
	var stickyElement = findAll(selectorSticky);
	var stickyHeight = find(selectorSticky).clientHeight + 'px';
	addClass(stickyElement, class__sticky);

	find(selectorCompensate).style.setProperty(propertyCompensate,stickyHeight);
}

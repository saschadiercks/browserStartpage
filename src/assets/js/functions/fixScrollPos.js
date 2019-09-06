// ###### import ######
import addClass from "./addClass.js";
import removeClass from "./removeClass.js";

// ####################
// ##### settings #####
// ####################
const selector__body = document.querySelector('body');
const class__elementIsFixed = 'sdi-is-fixed';

var scrollYSaved;

// ###### script ######
export default function fixScrollPos() {
	var scrollY = window.pageYOffset;

	if(selector__body.classList.contains(class__elementIsFixed)) {
		selector__body.classList.remove(class__elementIsFixed);
		selector__body.style.top = '';
		scrollToTarget(0,scrollYSaved);
	} else {
		selector__body.classList.add(class__elementIsFixed);
		selector__body.style.top = '-' + scrollY + 'px';
		scrollYSaved = scrollY;
	}
}

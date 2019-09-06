// ###### import ######

// ####################
// ##### settings #####
// ####################
const selector__body = document.querySelector('body');
const class__elementIsFixed = 'sdi-is-fixed';

var scrollYSaved;

// ###### script ######
export default function fixScrollPos(event) {
	var scrollY = window.pageYOffset;
	//console.log(event);

	if(selector__body.classList.contains(class__elementIsFixed)) {
		selector__body.classList.remove(class__elementIsFixed);
		selector__body.style.top = '';
		window.scrollTo(0,scrollYSaved);
	} else {
		selector__body.classList.add(class__elementIsFixed);
		selector__body.style.top = '-' + scrollY + 'px';
		scrollYSaved = scrollY;
	}
}

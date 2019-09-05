// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
export default function toggleClass(elements, className) {
	elements.forEach(function(element){
		element.classList.toggle(className);
	});
}

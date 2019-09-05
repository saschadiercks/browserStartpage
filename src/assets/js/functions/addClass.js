// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
export default function addClass(elements, className) {
	elements.forEach(function(element){
		element.classList.add(className);
	});
}

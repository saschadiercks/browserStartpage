// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
export default function removeClass(elements,className) {
	elements.forEach(function(element){
		element.classList.remove(className);
	});
}

// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
export default function scrollToPos(x,y) {
	window.scroll({
		top: y,
		left: x,
		behavior: 'smooth'
	});
}

// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
export default function findAll(selector) {
  var elements = document.querySelectorAll(selector);
	return Array.prototype.slice.call(elements)
}

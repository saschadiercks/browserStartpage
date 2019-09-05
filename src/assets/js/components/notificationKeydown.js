// ###### import ######

// ####################
// ##### settings #####
// ####################

// ###### script ######
export default function notificationKeyDown() {

	document.addEventListener('keydown', function() {
		var targetElement = document.getElementById('notification');
		addClass(targetElement,'js-visible');
		removeClass(targetElement,'js-hidden');
	});
	document.addEventListener('keyup', function() {
		var targetElement = document.getElementById('notification');
		addClass(targetElement,'js-hidden');
		removeClass(targetElement,'js-visible');
	});

}

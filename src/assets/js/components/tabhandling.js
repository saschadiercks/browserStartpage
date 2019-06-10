export default function tabHandling() {

	//Handle localStorage
	const tabPosition = "tabbedContentId";
	if (localStorage.getItem(tabPosition) === null) {
		console.log("localStorage is empty");
	} else {
		console.log("localStorage is set");
	};

}

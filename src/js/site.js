$(function() {

	// set JS if available
	var elementToTagJs = "body";
	$(elementToTagJs).addClass("js");


	// tab-handling
	var tabTriggerContainer = ".tabs li";
	var tabTriggerSelector = "a";
	var tabTargetAttribute = "data-target";
	var tabbedContentSelector = "main nav";
	var localStorageId = "tabbedContentId";
	var activeTabSelector = "active";
	var activeContentSelector = "active";


	// -- check if selected tab is in localStorage
	var savedLocalStorageId = localStorage.getItem(localStorageId);
	if(savedLocalStorageId !== null) {
		// mark last selected tab
		$(tabTriggerContainer).find("[" + tabTargetAttribute + "='" + savedLocalStorageId + "']").addClass(activeTabSelector);

		// show last openend tabbed content (and hide all others)
		$(tabbedContentSelector).removeClass(activeContentSelector);
		$("#" + savedLocalStorageId).addClass(activeContentSelector);
	} else {
		// Mark first tab as selected
		console.log("localStorage is empty, marking first tab as selected");
		$(tabTriggerContainer + ":first-of-type").find(tabTriggerSelector).addClass(activeTabSelector);
	}

	// -- switch tabs
	$(tabTriggerContainer).find(tabTriggerSelector).click(function() {
		// unmark all tabTrigger
		$(tabTriggerContainer).find(tabTriggerSelector).removeClass(activeTabSelector);

		// mark clicked tabTrigger
		$(this).addClass(activeTabSelector);

		// toggle tabbed content
		var tabTarget = $(this).attr(tabTargetAttribute);
		$(tabbedContentSelector).removeClass(activeContentSelector);
		$("#" + tabTarget).addClass(activeContentSelector);

		// save selected Tab to local storage
		localStorage.setItem(localStorageId, tabTarget);
	});
});

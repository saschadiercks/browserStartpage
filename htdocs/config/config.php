<?php

	// Project Title
	$projectTitle = 'Browser Startpage';
	$projectTitleSub = 'Your unified startpage to use in every browser';
	$projectDescription = $projectTitle . ' | ' . $projectTitleSub;
	$projectKeywords = 'Bookmark, Speeddial, Startpage, Tiles, Launchpad';
	$projectLanguage = 'de';					// langugage of your content (see: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
	$projectDirection = 'ltr';					// Reading direction ltr || rtl

	// Application-Settings (mobile)
	$serveAsApplication = FALSE;					// allow running as standalone application (TRUE || FALSE)
	$applicationName = 'Startpage';
	$applicationNameShort = $applicationName;

	// Set Environemt
	$cssUrl = 'assets/css/site.css';				// Set the url to retreive the css from
	$jsUrl = 'assets/js/script.js';					// Set the url to retrieve the js from
	$manifestUrl = 'application.manifest.php';		// This is the name of the manifest-file

	// Set php requirements
	// none

	// Set Data-Environment
	$dataUrl = "data/data.json";				// Set the url to retrieve the data from
	$content = file_get_contents($dataUrl);		// Get the data
	$json = json_decode($content, true);		// (true) returns the json as array-structure
	$counterStartvalue = 1;						// Set the Number the counters start with (no change nesseccary)
		// Countervalues to start with. Every block gets it's own value, so we don't need to unset it
		// The important thing is, header and content must use the same startValue!
		$headerCount = $counterStartvalue;
		$contentCount = $counterStartvalue;

	$header = array_keys($json['content']);		// Build header-array (keys of first layer only, because we only need the keys as title)
	$content = $json['content'];				// Get content-array directly
	$bookmarks = $json['bookmarks'];			// Get bookmarks-array
	$footer = $json['footer'];					// Get footer-array
?>

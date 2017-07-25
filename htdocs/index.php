<?php

	// Set Environemt
	$dataUrl = "data/data.json";				// Set the url to retrieve the data from
	$content = file_get_contents($dataUrl);		// Get the data
	$json = json_decode($content, true);		// (true) returns the json as array-structure
	$counterStartvalue = 1;						// Set the Number the counters start with (no change nesseccary)

	// Array-Konstrukte aufbauen
	$header = array_keys($json['content']);		// Build header-array (keys of first layer only, because we only need the keys as title)
	$content = $json['content'];				// Get content-array directly
	$footer = $json['footer'];					// Get footer-array

	// Countervalues to start with. Every block get's it's own value, so we don't need to unset it
	// The important thing is, header and content must use the same startValue!
	$headerCount = $counterStartvalue;
	$contentCount = $counterStartvalue;
	$tileCount = $counterStartvalue
?>

<!DOCTYPE html>
<html dir="ltr" lang="de">
<head>
	<title>Browser Startpage</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="de" />
	<meta name="MSSmartTagsPreventParsing" content="TRUE" />
	<meta http-equiv="imagetoolbar" content="no" />
	<meta name="viewport" content="width=device-width; initial-scale=1;">

	<!-- Short Names -->
	<meta name="apple-mobile-web-app-title" content="Startpage">
	<meta name="application-name" content="Startpage">

	<!-- Icons -->
	<link rel="apple-touch-icon" href="apple-touch-icon-foto-114x114-precomposed.png">
	<link rel="shortcut icon" href="favicon.ico">

	<!-- CSS -->
	<link href="assets/css/site.css" type="text/css" rel="stylesheet"/>

	<!-- JS -->
	<script src="assets/js/script.js" type="text/javascript"></script>

	<!-- Manifest -->
	<link rel="manifest" href="manifest.json" />
</head>

<body id="home">

	<!-- header -->
	<header>
		<nav role="navigation" class="tabs">
			<ul>
				<?php foreach($header as $key): ?>
					<li class="tab">
						<a href="#tab-<?= $headerCount++ ?>" data-target=""><?= $key ?></a>
					</li>
				<?php endforeach; ?>
			</ul>
	</header>

	<!-- content -->
	<main role="main" id="content">
		<?php foreach($content as $key): ?>
			<div id="tab-<?= $counterStartvalue++ ?>" class="tabbed-content">
				<ul>
					<?php foreach($key as $contentItem): ?>
						<a href="<?= $contentItem['url'] ?>" rel="noopener">
							<img src="<?= $contentItem['image'] ?>" alt="<?= $contentItem['title'] ?>"/>
							<span><?= $contentItem['title'] ?></span>
						</a>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php endforeach; ?>
	</main>

	<!-- footer -->
	<footer role="contentinfo">
		<div class="description"><a href="https://github.com/saschadiercks/browserStartpage">Fork me on Github</a></div>
		<div class="social-profiles">
			<ul>
				<li><a href="http://metafolio.de">home</a></li>
				<li><a href="https://github.com/saschadiercks">github</a></li>
				<li><a href="https://twitter.com/saschadiercks">twitter</a></li>
			</ul>
		</div>
	</footer>
</body>
</html>

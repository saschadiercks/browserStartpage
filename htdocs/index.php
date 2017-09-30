<?php

	// Project Title
	$projectTitle = "Browser Startpage";
	$projectdescription = "Your unified startpage to use in every browser";
	$applicationName = "startpage";
	$applicationNameShort = $applicationName;

	// Set Environemt
	$manifestUrl = "startpage.manifest.php";	// This is the name of the manifest-file
	$dataUrl = "data/data.json";				// Set the url to retrieve the data from
	$content = file_get_contents($dataUrl);		// Get the data
	$json = json_decode($content, true);		// (true) returns the json as array-structure
	$counterStartvalue = 1;						// Set the Number the counters start with (no change nesseccary)
	$cssUrl = "assets/css/site.css";			// Set the url to retreive the css from
	$jsUrl = "assets/js/script.js";				// Set the url to retrieve the js from

	// Array-Konstrukte aufbauen
	$header = array_keys($json['content']);		// Build header-array (keys of first layer only, because we only need the keys as title)
	$content = $json['content'];				// Get content-array directly
	$footer = $json['footer'];					// Get footer-array

	// Countervalues to start with. Every block gets it's own value, so we don't need to unset it
	// The important thing is, header and content must use the same startValue!
	$headerCount = $counterStartvalue;
	$contentCount = $counterStartvalue;
	$tileCount = $counterStartvalue;	// currently unused
?>

<!DOCTYPE html>
<html dir="ltr" lang="de" manifest="<?php echo($manifestUrl) ?>">
<head>
	<title><?php echo($projectTitle); ?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="<?php echo($projectdescription); ?>" />
	<meta name="language" content="de" />
	<meta name="MSSmartTagsPreventParsing" content="TRUE" />
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Short Names -->
	<meta name="apple-mobile-web-app-title" content="<?php echo($applicationName); ?>" />
	<meta name="application-name" content="<?php echo($applicationNameShort); ?>" />

	<!-- Icons -->
	<link rel="apple-touch-icon" href="apple-touch-icon-foto-114x114-precomposed.png" />
	<link rel="shortcut icon" href="favicon.ico" />

	<!-- CSS -->
	<style type="text/css">
		<?php require_once($cssUrl); ?>
	</style>

	<!-- JS -->
	<script type="text/javascript">
		<?php require_once($jsUrl); ?>
	</script>

	<!-- Mobile Manifest -->
	<link rel="manifest" href="manifest.json" />
</head>

<body id="home">

	<!-- header -->
	<header>
		<nav class="tabs">
			<ul>
				<?php foreach($header as $key): ?>
					<li class="tab">
						<a href="#tab-<?= $headerCount++ ?>" data-target=""><?= $key ?></a>
					</li>
				<?php endforeach; ?>
			</ul>
		</nav>
	</header>

	<!-- content -->
	<main id="content">
		<?php foreach($content as $key): ?>
			<div id="tab-<?= $counterStartvalue++ ?>" class="tabbed-content">
				<ul>
					<?php foreach($key as $contentItem): ?>
						<li>
							<a href="<?= $contentItem['url'] ?>" rel="noopener">
								<img src="<?= $contentItem['image'] ?>" alt="<?= $contentItem['title'] ?>"/>
								<span class="title"><?= $contentItem['title'] ?></span>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php endforeach; ?>
	</main>

	<!-- footer -->
	<footer>
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

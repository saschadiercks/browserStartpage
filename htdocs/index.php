<?php
	header('Content-type: text/html; charset=utf-8');

	// Setup
	$projectConfigUrl ='config/config.php';
	require_once($projectConfigUrl);
?>

<!DOCTYPE html>
<html <?php
	echo isset($projectLanguage) ? 'lang="'.$projectLanguage.'"' : FALSE;
	echo isset($projectDirection) ? 'dir="'.$projectDirection.'"' : FALSE;
	echo isset($manifestUrl)? 'manifest="'.$manifestUrl.'"' : FALSE;
	echo isset($theme)? 'class="'.$theme.'"' : FALSE;
?>>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<?php
		echo isset($projectTitle) ? '<title>'.$projectTitle.'</title>' : FALSE;
		echo isset($projectDescription) ? '<meta name="description" content="'.$projectDescription.'"/>' : FALSE;
		echo isset($projectKeywords) ? '<meta name="keywords" content="'.$projectKeywords.'"/>' : FALSE;
		echo isset($projectLanguage) ? '<meta name="language" content="'.$projectLanguage.'"/>' : FALSE;
	?>

	<!-- mobile scaling -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- IE-Stuff -->
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<meta name="MSSmartTagsPreventParsing" content="TRUE" />

	<?php if($serveAsApplication === TRUE) { ?>
		<!-- Website as app -->
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />

		<!-- Short Names -->
		<meta name="apple-mobile-web-app-title" content="<?php echo($applicationName); ?>" />
		<meta name="application-name" content="<?php echo($applicationNameShort); ?>" />

		<!-- Mobile Manifest -->
		<link rel="manifest" href="manifest.json" />
	<?php } ?>

	<!-- Icons -->
	<link rel="apple-touch-icon" href="apple-touch-icon-foto-228x228-precomposed.png" sizes="228x228" />
	<link rel="shortcut icon" href="favicon.ico" />

	<!-- CSS -->
	<style type="text/css">
		<?php require_once($cssUrl); ?>
	</style>

	<!-- JS -->
	<script type="text/javascript">
		<?php require_once($jsUrl); ?>
	</script>
</head>

<body>

	<!-- header -->
	<header id="application-header">
		<?php if(count($bookmarks) > 0) { ?>
			<button class="overlay-trigger" data-target="bookmarks">&#10070;</button>
		<?php } ?>

		<label for="menu-toggle">&#9776;</label>
		<input type="checkbox" id="menu-toggle" />

		<nav class="tabs">
			<ul>
				<?php foreach($header as $key): ?>
					<li class="tab">
						<a href="#tab-<?= $counterStartvalue ?>" data-target="tab-<?= $counterStartvalue++ ?>"><?= $key ?></a>
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

	<?php if(count($bookmarks) > 0) { ?>
		<aside id="bookmarks" class="overlay js-hidden">
			<button class="overlay-trigger overlay-close close" data-target="bookmarks">&times;</button>
			<h2 class="overlay-title">Bookmarks</h2>

			<?php foreach($bookmarks as $key => $contentItems): ?>
				<div class="folddown js-closed" id="collapse-<?= $key ?>">
					<div class="folddown-header">
						<h3 class="folddown-title"><button class="collapse-trigger" data-target="collapse-<?= $key ?>"><span class="folddown-icon">&times;</span> <?= $key ?></button></h3>
					</div>
					<div class="folddown-main collapse">
						<ul>
							<?php foreach($contentItems as $contentItem): ?>
								<li><a href="<?= $contentItem['url'] ?>"><?= $contentItem['title'] ?></a></li>
							<?php endforeach; ?>
						</ul>
					</div>
				</div>
			<?php endforeach; ?>
		</aside>
	<?php } ?>

	<!-- footer -->
	<footer id="application-footer">
		<div class="description"><a href="https://github.com/saschadiercks/browserStartpage">Fork me on Github</a></div>
		<?php if(count($footer) > 0) { ?>
			<div class="social-profiles">
				<ul>
					<?php foreach($footer[links] as $contentItem): ?>
						<li><a href="<?= $contentItem['url'] ?>"><?= $contentItem['title'] ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php } ?>
	</footer>
</body>
</html>

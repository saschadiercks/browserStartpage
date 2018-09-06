<?php
	header('Content-type: text/html; charset=utf-8');

	// Setup
	$projectConfigUrl ='config/config.php';
	require_once($projectConfigUrl);

	function generateId($value) {
		$result = strtolower(htmlentities(str_replace(' ', '', $value)));
		return $result;
	}

	function renderQrModalTrigger($contentItem) {
		if(count($contentItem['imageQr']) > 0) {
			echo '<button class="tile__button js-modal-toggle" data-target="' . generateId($contentItem['imageQr']) . '">&#9635;</button>';
		}
	}
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
		<?php if(count($header) > 0) { ?>
			<button id="header-nav-toggle" class="js-collapse-toggle" data-target="header-nav">&#9776;</button>
		<?php } ?>

		<?php if(count($bookmarks) > 0) { ?>
			<button id="bookmarks-toggle" class="js-overlay-toggle" data-target="bookmarks">&#9733;</button>
		<?php } ?>

		<?php if(count($header) > 0) { ?>
			<nav id="header-nav" class="collapse tabs">
				<ul class="collapse-main tablist">
					<?php foreach($header as $key): ?>
						<li class="tablist__item<?php if(count($header) == $counterStartvalue) { echo " tablist__item--last-child"; } ?>">
							<a href="#tab-<?= $counterStartvalue ?>" class="js-tab-trigger" data-target="tab-<?= $counterStartvalue++ ?>"><?= $key ?></a>
						</li>
					<?php endforeach; ?>
				</ul>
			</nav>
		<?php } ?>
	</header>

	<!-- content -->
	<main id="content">
		<?php foreach($content as $key): ?>
			<div id="tab-<?= $counterStartvalue++ ?>" class="tabbed-content">
				<ul class="list-tiles">
					<?php foreach($key as $contentItem): ?>
						<li class="tile-container">
							<?php if(count($contentItem['modal']) > 0) { ?>
								<a href="<?= $contentItem['url'] ?>" rel="noopener" class="tile js-modal-toggle" data-target="<?= generateId($contentItem['title']) ?>">
									<img src="<?= $contentItem['image'] ?>" alt="<?= $contentItem['title'] ?>" class="tile-image"/>
									<span class="tile-title"><?= $contentItem['title'] ?></span>
								</a>
								<?php renderQrModalTrigger($contentItem); ?>
							<?php } else { ?>
								<a href="<?= $contentItem['url'] ?>" rel="noopener" class="tile">
									<img src="<?= $contentItem['image'] ?>" alt="<?= $contentItem['title'] ?>" class="tile-image"/>
									<span class="tile-title"><?= $contentItem['title'] ?></span>
								</a>
								<?php renderQrModalTrigger($contentItem); ?>
							<?php } ?>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php endforeach; ?>
	</main>

	<!-- bookmarks -->
	<?php if(count($bookmarks) > 0) { ?>
		<div id="bookmarks" class="overlay js-hidden">
			<div class="overlay-content">
				<button class="js-overlay-toggle overlay-close" data-target="bookmarks">&times;</button>
				<h2 class="overlay-title">Bookmarks</h2>

				<?php foreach($bookmarks as $key => $contentItems): ?>
					<div class="collapse js-closed" id="collapse-<?= strtolower($key) ?>">
						<div class="collapse-header">
							<h3 class="collapse-title"><button class="js-collapse-toggle" data-target="collapse-<?= strtolower($key) ?>"><span class="collapse-icon">&times;</span> <?= $key ?></button></h3>
						</div>
						<div class="collapse-main">
							<ul class="list-vertical">
								<?php foreach($contentItems as $contentItem): ?>
									<li class="list-vertical__item"><a href="<?= $contentItem['url'] ?>" class="list-vertical__link"><?= $contentItem['title'] ?></a></li>
								<?php endforeach; ?>
							</ul>
						</div>
					</div>
				<?php endforeach; ?>
			</div><!-- /.overlay -->
			<div class="backdrop js-overlay-toggle" data-target="bookmarks"></div>
		</div>
	<?php } ?>

	<!-- modals -->
	<?php foreach($content as $key): ?>
		<?php foreach($key as $contentItem): ?>
			<?php if(count($contentItem['modal']) > 0) { ?>
				<div id="<?= generateId($contentItem['title']) ?>" class="modal js-hidden">
					<div class="modal-overlay">
						<div class="modal-header">
							<?= $contentItem['title'] ?>
							<button class="modal-header__close js-modal-toggle" data-target="<?= generateId($contentItem['title']) ?>">&times;</button>
						</div>
						<div class="modal-content">
							<ul class="modal-list">
								<?php foreach($contentItem['modal'] as $contentModalLink): ?>
									<li class="modal-list__item"><a href="<?= $contentModalLink['url'] ?>" class="modal-list__link"><?= $contentModalLink['title'] ?></a></li>
								<?php endforeach; ?>
							</ul>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-overlay -->
					<div class="backdrop js-modal-toggle" data-target="<?= generateId($contentItem['title']) ?>"></div>
				</div>
			<?php } ?>
			<?php if(count($contentItem['imageQr']) > 0)  { ?>
				<div id="<?= generateId($contentItem['imageQr']) ?>" class="modal js-hidden">
					<div class="modal-overlay">
						<div class="modal-header">
							<?= $contentItem['title'] ?>
							<button class="modal-header__close js-modal-toggle" data-target="<?= generateId($contentItem['imageQr']) ?>">&times;</button>
						</div>
						<div class="modal-content modal-content--qr">
							<img src="<?= $contentItem['imageQr'] ?>" />
						</div><!-- /.modal-content -->
					</div><!-- /.modal-overlay -->
					<div class="backdrop js-modal-toggle" data-target="<?= generateId($contentItem['imageQr']) ?>"></div>
				</div>
			<?php } ?>
		<?php endforeach; ?>
	<?php endforeach; ?>

	<!-- footer -->
	<footer id="application-footer">
		<div class="description"><a href="https://github.com/saschadiercks/browserStartpage">Fork me on Github</a></div>
		<?php if(count($footer) > 0) { ?>
			<div class="social-profiles">
				<ul class="list-horizontal">
					<?php foreach($footer[links] as $contentItem): ?>
						<li><a href="<?= $contentItem['url'] ?>"><?= $contentItem['title'] ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php } ?>
	</footer>

	<div id="notification" class="notification js-hidden">
		press [alt] to open a tab and prevent remembering it
	</div>
</body>
</html>

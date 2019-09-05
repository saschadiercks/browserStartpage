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
		if(isset($contentItem['imageQr']) && !empty($contentItem['imageQr']) > 0) {
			echo '<button class="tile__button js-modal-toggle" data-target="' . generateId($contentItem['imageQr']) . '">&#9635;</button>';
		}
	}

	// define linktarget if isset and filled otherwise use default
	if(isset($linktarget) && !empty($linktarget)) {
		$linktarget = $linktarget;
	} else {
		$linktarget = "_self";
	}
?>

<!DOCTYPE html>
<html <?php
	echo isset($projectLanguage) ? 'lang="'.$projectLanguage.'" ' : FALSE;
	echo isset($projectDirection) ? 'dir="'.$projectDirection.'" ' : FALSE;
	echo isset($manifestUrl)? 'manifest="'.$manifestUrl.'" ' : FALSE;
	echo isset($theme)? 'class="'.$theme.'" ' : FALSE;
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
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
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

	<?php if(isset($wallpaper) && !empty($wallpaper)) { ?>
		<link rel="preload" href="<?= $wallpaper ?>" as="image"/>
	<?php } ?>

	<!-- CSS -->
	<style>
		<?php require_once($cssUrl); ?>
	</style>

	<!-- Icons -->
	<link rel="apple-touch-icon" href="apple-touch-icon-foto-228x228-precomposed.png" sizes="228x228" />
	<link rel="shortcut icon" href="favicon.ico" />
</head>

<body class="no-js">

	<!-- header -->
	<header id="application-header">
		<?php if(count($header) > 0) { ?>
			<button id="header-nav-toggle" class="js-collapse-trigger" data-target="header-nav">&#9776;</button>
		<?php } ?>

		<?php if(count($bookmarks) > 0) { ?>
			<button id="bookmarks-toggle" class="js-flyout-trigger" data-target="bookmarks">&#128278;</button>
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
							<?php if(isset($contentItem['modal']) && count($contentItem['modal']) > 0) { ?>
								<a href="<?= $contentItem['url'] ?>" rel="noopener" class="tile js-modal-toggle" data-target="<?= generateId($contentItem['title']) ?>">
									<img src="<?= $contentItem['image'] ?>" alt="<?= $contentItem['title'] ?>" class="tile-image"/>
									<span class="tile-title"><?= $contentItem['title'] ?></span>
								</a>
								<?php renderQrModalTrigger($contentItem); ?>
							<?php } else { ?>
								<a href="<?= $contentItem['url'] ?>" target="<?= $linktarget ?>" rel="noopener" class="tile">
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
		<div id="bookmarks" class="flyout">
			<div class="flyout-content">
				<button class="js-flyout-trigger flyout-close" data-target="bookmarks">&times;</button>
				<h2 class="flyout-title">Bookmarks</h2>

				<?php foreach($bookmarks as $key => $contentItems): ?>
					<div class="collapse" id="collapse-<?= strtolower(generateId($key)) ?>">
						<div class="collapse-header">
							<h3 class="collapse-title"><button class="js-collapse-trigger" data-target="collapse-<?= strtolower(generateId($key)) ?>"><span class="collapse-icon">&times;</span> <?= $key ?></button></h3>
						</div>
						<div class="collapse-main">
							<ul class="list-vertical">
								<?php foreach($contentItems as $contentItem): ?>
									<li class="list-vertical__item">
										<a href="<?= $contentItem['url'] ?>" target="<?= $linktarget ?>" class="list-vertical__link"><?= $contentItem['title'] ?></a>
									</li>
								<?php endforeach; ?>
							</ul>
						</div>
					</div>
				<?php endforeach; ?>
			</div><!-- /.overlay -->
			<div class="backdrop flyout-backdrop js-flyout-trigger" data-target="bookmarks"></div>
		</div>
	<?php } ?>

	<!-- modals -->
	<?php foreach($content as $key): ?>
		<?php foreach($key as $contentItem): ?>
			<?php if(isset($contentItem['modal']) && count($contentItem['modal']) > 0) { ?>
				<div id="<?= generateId($contentItem['title']) ?>" class="modal js-hidden">
					<div class="modal-overlay">
						<div class="modal-header">
							<?= $contentItem['title'] ?>
							<button class="modal-header__close js-modal-toggle" data-target="<?= generateId($contentItem['title']) ?>">&times;</button>
						</div>
						<div class="modal-content">
							<ul class="modal-list">
								<?php foreach($contentItem['modal'] as $contentModalLink): ?>
									<li class="modal-list__item">
										<a href="<?= $contentModalLink['url'] ?>" target="<?= $linktarget ?>" class="modal-list__link"><?= $contentModalLink['title'] ?></a>
									</li>
								<?php endforeach; ?>
							</ul>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-overlay -->
					<div class="backdrop js-modal-toggle" data-target="<?= generateId($contentItem['title']) ?>"></div>
				</div>
			<?php } ?>
			<?php if(isset($contentItem['imageQr']) && !empty($contentItem['imageQr']))  { ?>
				<div id="<?= generateId($contentItem['imageQr']) ?>" class="modal js-hidden">
					<div class="modal-overlay">
						<div class="modal-header">
							<?= $contentItem['title'] ?>
							<button class="modal-header__close js-modal-toggle" data-target="<?= generateId($contentItem['imageQr']) ?>">&times;</button>
						</div>
						<div class="modal-content modal-content--qr">
							<img src="<?= $contentItem['imageQr'] ?>" alt="<?= $contentItem['title'] ?>"/>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-overlay -->
					<div class="backdrop js-modal-toggle" data-target="<?= generateId($contentItem['imageQr']) ?>"></div>
				</div>
			<?php } ?>
		<?php endforeach; ?>
	<?php endforeach; ?>

	<!-- footer -->
	<footer id="application-footer">
		<?php if(count($footer) > 0) { ?>
			<?php foreach($footer['description'] as $contentItem): ?>
				<div class="description"><a href="<?= $contentItem['url'] ?>" target="<?= $linktarget ?>"><?= $contentItem['title'] ?></a></div>
			<?php endforeach; ?>
			<div class="social-profiles">
				<ul class="list-horizontal">
					<?php foreach($footer['links'] as $contentItem): ?>
						<li><a href="<?= $contentItem['url'] ?>" target="<?= $linktarget ?>"><?= $contentItem['title'] ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php } ?>
	</footer>

	<div id="notification" class="notification js-hidden">
		press [alt] to open a tab and prevent remembering it
	</div>

	<?php if(isset($wallpaper) && !empty($wallpaper)) { ?>
		<div id="wallpaper" style="background-image:url('<?= $wallpaper ?>')"></div>
	<?php } ?>

	<!-- JS -->
	<script>
		<?php require_once($jsUrl); ?>
	</script>
</body>
</html>

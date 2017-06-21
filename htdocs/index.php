<?php

	// Set Environemt
	$dataUrl = "data/data.json";				// Set the url to retrieve the data from
	$content = file_get_contents($dataUrl);		// Get the data
	$json = json_decode($content, true);		// (true) returns the json as array-structure



	// Output
	function buildTabs($array) {
		$keys = array_keys($array);
		foreach($keys as $key) {
			echo $key;
		}
	}

	function buildContent($array) {
		foreach($array as $item) {
			foreach($item as $contentItem) {
				if(isset($contentItem['url'])) { echo $contentItem['url']."<br/>"; }
				if(isset($contentItem['image'])) { echo $contentItem['image']."<br/>"; }
				if(isset($contentItem['title'])) { echo $contentItem['title']."<br/>"; }
			}
		}
	}

	buildTabs($json['content']); echo "<br/>";
	buildContent($json['content']); echo "<br/>";
	buildContent($json['footer']); echo "<br/>";
?>

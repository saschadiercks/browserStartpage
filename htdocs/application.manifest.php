<?php

// Setup
$projectConfigUrl ='config/config.php';
require_once($projectConfigUrl);

// Taken from: https://github.com/tx2z/autogenerated-cache.manifest-php
// Serve as content-type "manifest"
header('Content-Type: text/cache-manifest');

// Write required first line
echo "CACHE MANIFEST\n";

// Initialize the $hashes string
$hashes = "";


function create_manifest($folder) {
	// set manifestURL as global var
	global $manifestUrl;

	// collect files/folders
	$dir = new RecursiveDirectoryIterator($folder);

	// Iterate through all the files/folders in the current directory
	foreach (new RecursiveIteratorIterator($dir) as $file) {
		$info = pathinfo($file);
		// If the object is a file
		// and it's not called manifest.php (this file),
		// and it's not a dotfile, add it to the list
		if(isset($manifestUrl)) {
			if ($file -> IsFile() && $file != "'./' . $manifestUrl" && substr($file -> getFilename(), 0, 1) != ".") {
				// Replace spaces with %20 or it will break
				echo str_replace(' ', '%20', $file) . "\n";
				// Add this file's hash to the $hashes string
				$hashes .= md5_file($file);
			}
		}
	}
}
create_manifest(".");

// Write the $hashes string
echo "# Hash: " . md5($hashes) . "\n";
?>

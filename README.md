# browserStartpage
Do you schwitch browser often? Are you tired, that every browser uses it's own speeddial and you can't import that in your new browser?

You host your own speeddial with this repo!

## How does it work?
Just place the folder `/htdocs` on your own webserver. Make sure it supports *php* - this is the only requirement.

### Want a demo?
[http://www.metafolio.de/fragments/startpage/](http://www.metafolio.de/fragments/startpage/)

### Setup your own links
The browserStartpage comes with a default list of links, to show you how it works. It shows up with a list of popular browser and some development-Ressources. You change that. Just head over to '/htdocs/data/data.json` and play with that file. You can edit the tabs and links to your own liking. Just play with it - it's quite self explanatory. All you need to do is to create images for your links and place them on your server too. Usually here '/htdocs/assets/thumbnails'

## Features
- easy confiurable via json
- only requires php on your server
- uses vanillaJS
- uses apllicationCache to minimize traffic
- uses localStorage to store last opened tab

### Planned Features
- allow theming
- allow onsite-editing so you don't have to fiddle with the json-file
- automatic rendering of screenshots/images
- allow static export of content to sync via Dropbox, iCloud or wathever

## Further insights (want to help building this?)
- `/src/manifests` Vagrant is used as a local development-environment
- `/src/scss` the development files to build the CSS (via gulp)
- `/src/js` the development JS to compile the JS (via gulp)
- `/src/data` dummy-datafile. Use `/htdocs/data/data.json` for local development
- `/htdocs/startpage.manifest.php` automatic generation of application cache
- `/htdocs/index.php`the speeddial itself
- `/htdocs/assets/css` compiled css-files (uesd live)
- `/htdocs/assets/js` compiled js-files (uesd live)
- `/htdocs/assets/thumbnails` store your link-images here

### Usage of Vagrant
1. install vagrant on your machine (https://www.vagrantup.com/)
2. install Virtualbox (https://www.virtualbox.org/wiki/Downloads)
3. head to your local repository an enter `vagrant up`
4. Wait a while until all components are loaded an the box is running. (The first start can take a while)
5. visit (http://127.0.0.1:8080/)

### Usage of gulp
1. Make sure, you have node.js installed on your computer (https://nodejs.org/en/)
2. run `npm install gulp-cli -g` to install gulp
1. run `npm install` to install gulp in your project
2. run `gulp sass:watch` to compile SASS on the fly

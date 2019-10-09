/* #### Setting #### */
const config = require('./_tasks/_config.json')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
module.exports = {
	entry: {
		site: [
			`./${config.assetSrc}/js/site.js`
		]
	},
	output: {
		filename: `./${config.assetDist}/js/[name].js`
	},
	mode: process.env.NODE_ENV
};

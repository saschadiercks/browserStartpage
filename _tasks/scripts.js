/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')

const webpackConfig = {
	entry: {
		site: [
			`./${config.assetSrc}/js/site.js`
		]
	},
	output: {
		filename: '[name].js'
	}
}

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('scripts:build', function () {
	return gulp.src(config.assetSrc + '/js/site.js')
	.pipe(webpackStream(webpackConfig))
	.pipe(uglify())
	.pipe(gulp.dest(config.assetDist + '/js'));
});

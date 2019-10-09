/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const webpack = require('webpack')
const gulpWebpack = require('webpack-stream')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('scripts:build', function () {
	return gulp.src(config.assetSrc + '/js/')
	.pipe(gulpWebpack(
		require('../webpack.config.js'), webpack
	))
	.pipe(gulp.dest('.'));
});

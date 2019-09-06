/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const webpack = require('webpack-stream')
const terser = require('gulp-terser')
const gulpif = require('gulp-if')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('scripts:build', function () {
	return gulp.src(config.assetSrc + '/js/')
	.pipe(webpack(
		require('../webpack.config.js')
	))
	.pipe(gulpif(process.env.NODE_ENV === config.envProduction ,
		terser()
	))
	.pipe(gulp.dest('.'));
});

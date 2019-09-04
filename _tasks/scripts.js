/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const webpackStream = require('webpack-stream')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('scripts:build', function () {
	return gulp.src(config.assetSrc + '/js/**/')
	.pipe(webpackStream(require('../webpack.config.js')))
	//.pipe(uglify())
	.pipe(gulp.dest(config.assetDist + '/js'));
});

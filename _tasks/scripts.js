/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const webpack = require('webpack-stream')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('scripts:build', function () {
	return gulp.src(config.assetSrc + '/js/')
	.pipe(webpack({
		config : require('../webpack.config.js'),
	}))
	//.pipe(uglify())
	.pipe(gulp.dest('.'));
});

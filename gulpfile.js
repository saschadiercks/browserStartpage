// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');



// Place Code for tasks here
gulp.task('sass', function () {
	return gulp.src('./src/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./htdocs/assets/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', function() {
});

// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');



// Place Code for tasks here

// SCSS
gulp.task('sass', function () {
	return gulp.src('./src/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions','>5%'],
		cascade: false
	}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./htdocs/assets/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

// JS
gulp.task('compress', function () {
	var options = {
		mangle: 'false'
	};

	return gulp.src('./src/js/*.js')
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./htdocs/assets/js'));
});

gulp.task('default', function() {
});

// Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');

// Settings
const srcDir = './src';
const buildDir = './htdocs';
const buildAssetsDir = 'assets';

// Place Code for tasks here
// ---- clean ----
gulp.task('clean', function () {
	return del([
	  buildDir + '/' + buildAssetsDir + '/css/**/*',
	  buildDir + '/' + buildAssetsDir + '/js/**/*'
	]);
});

// ---- images ---
gulp.task('imagemin', function () {
	return gulp.src('./htdocs/assets/**/*.{jpg,png}')
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
    		imagemin.optipng({optimizationLevel: 5}),
		]))
		.pipe(gulp.dest('./htdocs/assets/'));
});

// ---- SCSS  ----

	// dev
	gulp.task('compile:css', function () {
		return gulp.src('./src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions','>5%'],
			cascade: false
		}))
		.pipe(sourcemaps.write({includeContent: true, sourceRoot: '.'}))		// use inline sourcemaps to avoid the need of deleting them - when using the build parameter
		.pipe(gulp.dest('./htdocs/assets/css'));
	});

	// build
	gulp.task('build:css', function () {
		return gulp.src('./src/scss/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions','>5%'],
			cascade: false
		}))
		.pipe(gulp.dest('./htdocs/assets/css'));
	});


// ---- Javascript ----

	// dev
	gulp.task('compile:js', function () {
		var options = {
			mangle: 'false'
		};

		return gulp.src('./src/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write({includeContent: true, sourceRoot: '.'}))		// use inline sourcemaps to avoid the need of deleting them - when using the build parameter
		.pipe(gulp.dest('./htdocs/assets/js'));
	});

	// build
	gulp.task('build:js', function () {
		var options = {
			mangle: 'true'
		};

		return gulp.src('./src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./htdocs/assets/js'));
	});


// --- build ----
gulp.task('build', gulp.series(['build:css', 'build:js', 'imagemin']));

// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');



// Place Code for tasks here
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
		.pipe(sourcemaps.write())
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
		.pipe(sourcemaps.write('.'))
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

gulp.task('build', ['build:css', 'build:js']);

/* #### Setting #### */
const config = require("./_config.json");
const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const gulpStylelint = require("gulp-stylelint");
const autoprefixer = require("gulp-autoprefixer");

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task("compile:css", function () {
  return gulp
    .src(config.assetSrc + "/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions", ">5%"],
        cascade: false,
      })
    )
    .pipe(gulp.dest(config.assetDist + "/css"));
});

// lint
gulp.task("lint:css", function () {
  return gulp.src(config.assetSrc + "/scss/**/*.scss").pipe(
    gulpStylelint({
      fix: true,
      reporters: [{ formatter: "string", console: true }],
    })
  );
});

/* #### Setting #### */
const config = require("./_config.json");
const gulp = require("gulp");
const del = require("del");

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task("clean:scripts", function () {
  return del([config.assetDist + "/js/**", config.assetDist + "/css/**"]);
});

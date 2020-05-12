/* #### Setting #### */
const config = require("./_config.json");
const gulp = require("gulp");
const shell = require("gulp-shell");

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task("vagrant:up", shell.task("vagrant up"));
gulp.task("vagrant:halt", shell.task("vagrant halt"));
gulp.task("vagrant:reload", shell.task("vagrant reload"));

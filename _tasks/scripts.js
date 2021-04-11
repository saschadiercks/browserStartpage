/* #### Setting #### */
const config = require("./_config.json");
const gulp = require("gulp");
const exec = require("child_process").exec;

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task("scripts:build", function(cb) {
  exec("npx webpack --config webpack.config.js", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

/* #### Setting #### */
const config = require("./_config.json");
const gulp = require("gulp");
const exec = require("child_process").exec;

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task("vagrant:up", cb => {
  exec("vagrant up", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
gulp.task("vagrant:halt", cb => {
  exec("vagrant halt", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
gulp.task("vagrant:reload", cb => {
  exec("vagrant reload", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task("docker:up", cb => {
  exec("docker-compose up -d", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
gulp.task("docker:down", cb => {
  exec("docker-compose down", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

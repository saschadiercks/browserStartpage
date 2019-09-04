/* #### Setting #### */
const gulp = require('gulp')
require('require-dir')('./_tasks')

/* ################# */
/* ##### Tasks ##### */
/* ################# */

// --- group tasks ----
gulp.task('clean', gulp.series('clean:scripts'));
gulp.task('lint', gulp.series('lint:css'));
gulp.task('scripts', gulp.series('scripts:build'));
gulp.task('styles', gulp.series('lint:css', 'compile:css'));

// --- run tasks ----
gulp.task('update', gulp.series('styles', 'scripts'));
gulp.task('build', gulp.series('clean', 'styles', 'scripts', 'imagemin'));

// --- run application ----
gulp.task('serve', gulp.series('build','vagrant:up'));
gulp.task('reboot', gulp.series('build','vagrant:reload'));
gulp.task('stop', gulp.series('vagrant:halt'));


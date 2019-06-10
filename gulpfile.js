/* #### Setting #### */
const gulp = require('gulp')
require('require-dir')('./_tasks')

/* ################# */
/* ##### Tasks ##### */
/* ################# */

// --- group tasks ----
gulp.task('clean', gulp.series('clean:build'));
gulp.task('lint', gulp.series('lint:css'));
gulp.task('scripts', gulp.series('scripts:build'));
gulp.task('styles', gulp.series('lint:css', 'compile:css'));

// --- run tasks ----
gulp.task('update', gulp.series('styles', 'scripts'));
gulp.task('build', gulp.series('clean', 'styles', 'scripts', 'copy', 'imagemin'));

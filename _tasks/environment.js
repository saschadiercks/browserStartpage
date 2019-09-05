/* #### Setting #### */
const gulp = require('gulp')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('set-dev-node-env', function() {
	return Promise.resolve(process.env.NODE_ENV = 'development');
});

gulp.task('set-prod-node-env', function() {
	return Promise.resolve(process.env.NODE_ENV = 'production');
});

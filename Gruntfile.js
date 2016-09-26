module.exports = function(grunt) {

	// Dependencies
	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

	// Initializing configuration objects
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// SASS
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'htdocs/assets/css/site.min.css': 'src/scss/site.scss'
				}
			}
		},

		// PostCSS
		postcss: {
			options: {
				map: false,

				processors: [
					require('autoprefixer')({browsers: ['last 2 versions', '>5%']}), // add vendor prefixes
					require('cssnano')() // minify the result
				]
			},
			dist: {
				src: 'htdocs/assets/css/*.min.css'
			}
		},

		// Uglify JS
		uglify: {
			options: {
				sourceMap: true,
				sourceMapName: 'htdocs/assets/js/site.js.map',
				mangle: false		// prevent naming of variables
			},
			my_target: {
				files: {
					'htdocs/assets/js/site.min.js': ['src/js/site.js']
				}
			}
		},


		// Watch
		watch: {
			sass: {
				files: ['src/scss/**/*'],
				tasks: ['sass','postcss'],
				options: {
					event: ['changed', 'added', 'deleted'],
					interrupt: true,
				}
			},
			js: {
				files: ['src/js/**/*'],
				tasks: ['uglify'],
				options: {
					event: ['changed', 'added', 'deleted'],
					interrupt: true,
				}
			}
		},
	});

	// Load packages
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Register Tasks
	grunt.registerTask('default', ['watch:sass','watch:js']);
};

module.exports = function(grunt) {

    require('load-grunt-plugins-from-parent')(grunt);

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	  	/* SASS */
		sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                },
                files: {
                    'html/css/glp_brandname.css':'assets/scss/glp_brandname.scss',
                    'html/css/glp_global.css':'assets/scss/glp_global.scss'
                }
            }
        },
        
        
	  	/* LIQUID */
        liquid: {
            options: {
                includes: 'templates/includes',
            },
            pages: {
                files: [{ 
                    expand: true, 
                    flatten: true, 
                    src: 'templates/*.liquid', 
                    dest: 'html/', 
                    ext: '.html' 
                }]
            }
        },
        
        
	  	/* JS */
        import: {
            options: {},
            dist: {
                files: {
                    'html/js/glp_global.js' : 'assets/scripts/glp_global.js',
                    'html/js/glp_brandname.js' : 'assets/scripts/glp_brandname.js'
                }
            }
        },
        
        
	  	/* AUTO PREFIX COMPILED CSS */
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            // prefix all files in html/css root
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'html/css/*.min.css',
                dest: 'html/css'
            }
        },
        

	  	/* BROWSER SYNC */
        browserSync: {
            bsFiles: {
                src: [
                    'html/css/*.css',
                    'html/js/*.js',
                    'html/*.html',
                    'html/img/*.jpg',
                    'html/img/*.png',
                    'html/img/*.gif'
                ],
            },
            options: {
                watchTask: true,
                debugInfo: true,
                    server: {
                        baseDir: "html/"
                    }
            }
        },


	  	/* WATCH */
		watch: {   
            options: {
                livereload: true
            },
            scripts: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            },
            js: {
                files: 'assets/scripts/**/*.js',
                tasks: ['import']
            },
            liquidTemplate: {
                options: {
                    spawn: true
                },
                files: "templates/**/*.liquid",
                tasks: ['liquid']
            }
		},
        

        /* REPLACE NEW VERSION ON STAGING WITH UPDATED URL VERSION SO THAT IMAGES AND FONTS WILL WORK*/
        replace: {
          another_example: {
            src: ['///Volumes/Designer/css/ ____ /style.css'], // CHANGE TO MATCH THE CSS LOCATION ON STAGING
            overwrite: true, // overwrite matched source files 
            replacements: [{
                from: '../fonts/',
                to: "/fonts/" // CHANGE TO MATCH THE FONTS LOCATION ON STAGING
            }, {
                from: '../img/',
                to: "/images/" // CHANGE TO MATCH THE IMAGE LOCATION ON STAGING
            }]
          }
        }
	});


    /* LOAD TASK */
    grunt.loadNpmTasksFromParent('grunt-contrib-sass')
    grunt.loadNpmTasksFromParent('grunt-liquid');
    grunt.loadNpmTasksFromParent('grunt-import');
    grunt.loadNpmTasksFromParent('grunt-browser-sync');
    grunt.loadNpmTasksFromParent('grunt-autoprefixer');
    grunt.loadNpmTasksFromParent('grunt-contrib-watch');

    /* LOAD TASKS TO UPDATE CSS ON STAGING */
    grunt.loadNpmTasksFromParent('grunt-text-replace');

    /* RUN TASKS */
	grunt.registerTask('default',['sass', 'autoprefixer', 'liquid', 'import']);
	grunt.registerTask('server',['browserSync', 'watch']);

    grunt.registerTask('master',['sass', 'autoprefixer', 'replace']);
}
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dev: ['dist/']
        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist',
                src: ['css/bootstrap.min.css', 'fonts/**', 'js/bootstrap.min.js'],
                dest: 'dist/'
            },
            historyjs: {
                expand: true,
                cwd: 'node_modules/historyjs/scripts/bundled/html4+html5',
                src: ['native.history.js'],
                dest: 'dist/js'
            },
            fontAwesome: {
                expand: true,
                cwd: 'node_modules/font-awesome',
                src: ['css/font-awesome.min.css', 'fonts/**'],
                dest: 'dist/'
            },
            jquery: {
                expand: true,
                cwd: 'node_modules/jquery/dist',
                src: ['jquery.min.js'],
                dest: 'dist/js'
            },
            html: {
                expand: true,
                cwd: 'src/',
                src: ['index.html'],
                dest: 'dist/'
            },
            js: {
                expand: true,
                cwd: 'src/',
                src: ['js/**'],
                dest: 'dist/'
            }
        },
        less: {
            dev: {
                options: {
                    paths: ['node_modules/']
                },
                files: {
                    'dist/css/main.css': 'src/less/main.less'
                },
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server/server.js'
                }
            }
        },
        watch: {
            html: {
                files: ['src/index.html', 'src/less/**', 'src/js/**'],
                tasks: ['compile']
            }
        }
    });

    grunt.registerTask('compile', ['copy', 'less']);
    grunt.registerTask('default', ['compile', 'express', 'watch']);
};
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dev: {
                files: ['dist/']
            }
        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist',
                src: ['css/bootstrap.min.css', 'fonts/**', 'js/bootstrap.min.js'],
                dest: 'dist/'
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
                files: ['src/index.html', 'src/less/**'],
                tasks: ['compile']
            }
        }
    });

    grunt.registerTask('compile', ['copy', 'less']);
    grunt.registerTask('default', ['compile', 'express', 'watch']);
};
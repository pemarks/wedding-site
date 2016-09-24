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
                src: ['fonts/**',],
                dest: 'dist/'
            },
            fontAwesome: {
                expand: true,
                cwd: 'node_modules/font-awesome',
                src: ['fonts/**'],
                dest: 'dist/'
            },
            html: {
                expand: true,
                cwd: 'src/',
                src: ['index.html'],
                dest: 'dist/'
            }
        },
        reactTemplates: {
            dev: {
                src: ['**/*.rt'],
                options: {
                    modules: 'es6',
                    format: 'stylish'
                }
            }
        },
        less: {
            dev: {
                options: {
                    paths: ['node_modules/bootstrap/', 'jspm_packages/npm/font-awesome@4.6.3/css/']
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

    grunt.registerTask('bundle', function() {
        var SystemJS = require('systemjs-builder'),
            Promise = require('bluebird'),
            bundler = new SystemJS('./', './config.js'),
            done = this.async();

            grunt.log.writeln('Bundling content');

            var bundlePromise = Promise.all([
                bundler.bundle('[src/**/*.js]', 'dist/bundles/app-build.js'),
                bundler.bundle('[src/**/*.js - [src/**/*.js]', 'dist/bundles/lib-build.js'),
                bundler.bundle('jquery + bootstrap', 'dist/ui-build.js')
            ]);
            
            bundlePromise.then(function() {
                grunt.log.writeln('Finished bundling content');
                done(true);
            });
    });

    grunt.registerTask('compile', ['copy', 'less', 'reactTemplates', 'bundle']);
    grunt.registerTask('default', ['compile', 'express', 'watch']);
};
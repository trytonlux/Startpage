'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/script.min.js'
            }
        },
        sass: {
            build: {
                options: {
                    'loadPath': ['src/sass', 'node_modules'],
                    'style': 'compressed',
                    'sourcemap': 'none'
                },
                files: {
                    'build/style.min.css': 'src/sass/main.scss'
                }
            }
        },
        nunjuckr: {
            build: {
                options: {
                    searchPaths: 'src/templates',
                    data: grunt.file.readJSON('data/conf.json')
                },
                files: [
                    {
                        src: 'src/templates/<%= pkg.name %>.njs',
                        dest: 'build/index.html'
                    }
                ]
            }
        },
        watch: {
            src: {
                files: ['src/**/*'],
                tasks: ['default']
            }
        },
        clean: {
            build: ['build']
        }
    });

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass', 'nunjuckr']);
};

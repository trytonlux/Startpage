'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/js/*',
                dest: 'build/script.js'
            }
        },
        sass: {
            build: {
                options: {
                    'includePaths': ['node_modules'],
                    'style': 'compressed',
                    'sourcemap': 'none'
                },
                files: {
                    'build/style.css': 'src/sass/main.scss'
                }
            }
        },
        copy: {
            index: {
                src: 'src/index.html',
                dest: 'build/index.html'
            }
        },
        watch: {
            src: {
                files: ['src/**/*'],
                tasks: ['default']
            }
        },
        clean: {
            build: ['build', '.grunt', '.sass-cache']
        },
        'gh-pages': {
            options: {
                base: 'build'
            },
            src: '*'
        }
    });

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass', 'copy']);
    grunt.registerTask('deploy', ['default', 'gh-pages']);
};

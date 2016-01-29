module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    // Project configuration
    grunt.initConfig({
        coffee: {
            dist: {
                options: {
                    bare: true,
                    join: true
                },
                files: {
                    'build/all.js': [
                        'coffee/helpers/sensor_icon_helper.coffee'
                    ]
                }
            }
        },
        jade: {
            dist: {
                options: {
                    pretty: true
                },
                files: {
                    'build/home.html': 'jade/home.jade'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'build/all.css': 'sass/all.scss'
                }
            }
        },
        watch: {
            coffee: {
                files: 'coffee/**/*.coffee',
                tasks: ['coffee'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            jade: {
                files: 'jade/**/*.jade',
                tasks: ['jade'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['sass'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        },
        concurrent: {
            assets: {
                tasks: ['watch:coffee', 'watch:sass', 'watch:jade'],
                options: {
                    logConcurrentOutput: true,
                    limit: 3
                }
            }
        }
    });

    // Default task
    grunt.registerTask('default', [
        'coffee',
        'jade',
        'sass'
    ]);
};
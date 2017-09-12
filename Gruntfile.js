module.exports = function(grunt) {
  'use strict';

  // load grunt tasks
  require('load-grunt-tasks')(grunt);

  // project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
        files: [
            'Gruntfile.js',
            'src/scripts/**/*.js'
        ],
        options: {
            jshintrc: true
        },
    },

    karma: {
      // js unit tests
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    clean: {
      // clean public dir
      public: ['public/**'],
    },

    copy: {
      // copy files public dir
      app: {
          files: [
            {
                expand: true,
                cwd: 'src/',
                src: ['**'],
                dest: 'public'
            },
            {
                expand: false,
                src: ['node_modules/requirejs/require.js'],
                dest: 'public/scripts/lib/require.js'
            },
          ]
      },
    },

    open : {
      // open the app in browser
      file : {
        path : 'public/index.html'
      }
    },

    watch: {
      // js files
      scripts: {
          files: [
              'src/scripts/**/*.js',
              'test/scripts/**/*.js'
          ],
          tasks: [
              'test',
              'copy'
          ],
      },
      // css files
      styles: {
          files: [
              'src/styles/**/*.css'
          ],
          tasks: [
              'copy'
          ],
      },
      // html files
      html: {
          files: [
              'src/**/*.html'
          ],
          tasks: [
              'copy'
          ],
      }
    }
  });

  // default task - builds app
  grunt.registerTask('default', [
    'test',
    'clean',
    'copy',
    'open'
  ]);

  // development task - builds app and starts watch task
  grunt.registerTask('dev', [
    'test',
    'clean',
    'copy',
    'open',
    'watch'
  ]);

  // run all tests
  grunt.registerTask('test', [
    'jshint',
    'karma:unit'
  ]);

};
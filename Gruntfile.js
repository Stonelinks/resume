'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    config: {
      src: 'contents',
      templates: 'templates',
      dist: 'build'
    },

    wintersmith_config: grunt.file.readJSON('config.json'),

    wintersmith: {

      build: {},

      preview: {
        options: {
          action: 'preview'
        }
      }
    },

    watch: {

      less: {
        files: ['<%= config.src %>/less/**/*.less'],
        tasks: ['less']
      }
    },

    clean: ['<%= config.dist %>'],

    less: {

      main: {
        files: {
          '<%= config.src %>/css/main.css': '<%= config.src %>/less/main.less'
        }
      }
    },

    concurrent: {
      server: ['wintersmith:preview', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },

    copy: {
      nojekyll: {
        src: '.nojekyll',
        dest: '<%= config.dist %>/'
      }
    },

    'link-checker': {
      dev: {
        site: 'localhost',
        options: {
          noFragment: true,
          initialPort: '<%= wintersmith_config.port + 2 %>'
        }
      }
    },

    connect: {
      test: {
        options: {
          port: '<%= wintersmith_config.port + 2 %>',
          base: 'build'
        }
      }
    },

    'gh-pages': {
      options: {
        base: '<%= config.dist %>'
      },
      src: ['**', '.*']
    },

    exec: {
      wkhtmltopdf: 'wkhtmltopdf -B 0 -L 0 -R 0 -T 0 --zoom 0.85 --user-style-sheet contents/css/pdf.css build/index.html build/lucas_doyle_resume.pdf'
    }
  });

  grunt.registerTask('pre', [
    'clean',
    'less'
  ]);

  grunt.registerTask('build', [
    'pre',
    'wintersmith:build',
    'copy:nojekyll',
    'exec:wkhtmltopdf'
  ]);

  grunt.registerTask('publish', [
    'build',
    'gh-pages'
  ]);

  grunt.registerTask('server', [
    'pre',
    'concurrent:server'
  ]);

  grunt.registerTask('test', [
    'build',
    'connect:test',
    'link-checker'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};

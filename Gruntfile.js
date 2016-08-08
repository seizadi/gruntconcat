/* jshint node:true */
'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: '/*! Built file <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        separator: ';',
      },
      build: {
        src: 'src/*.js',
        dest: 'build/min.js'
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};

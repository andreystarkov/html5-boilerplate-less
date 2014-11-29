module.exports = function(grunt) {

 // var optipng = require('imagemin-optipng');
 // var jpegtran = require('imagemin-jpegtran');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> | im@andreystarkov.ru */\n',
        mangle: true
      },
      build: {
        files: {
          'src/js/all.js': ['src/js/libs/*.js'],
        }
      }
    },

//  cssmin: {
//     add_banner: {
//       options: {
//          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> | im@andreystarkov.ru */'
//       },
//        files: {
//          'dist/all.css': ['src/css/*.css']
//        }
//      }
//     }

//    imagemin: {
//      dynamic: {
//        options: {
//         use: [optipng({ optimizationLevel: 3 }), jpegtran({ progressive: true })]
//       },

//        files: [{
//          expand: true,
//          cwd: 'src/images/',
//          src: ['**/*.{png,jpg,gif}'],
//          dest: 'dist/images'
//        }]
//     }
//  }

  });

//  grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['uglify']);

};
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
        sourceMap: true
      },
      dist: {
        src: [
          'src/public/bower_components/jquery/jquery.js',
          'src/public/bower_components/angular/angular.js',
          'src/public/core.js'
        ],
        dest: 'build/concat.js'
      }
    },
    uglify: {
      all_src: {
        options: {
          sourceMap: true,
          sourceMapName: 'src/public/all.js.map',
          sourceMapIn: 'build/concat.js.map'
        },
        src: [
          'build/concat.js'
        ],
        dest: 'src/public/all.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);
};

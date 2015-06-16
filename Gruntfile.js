module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      all_src: {
        options: {
          sourceMap: true,
          sourceMapName: 'sourceMap.map'
        },
        src: 'src/**/*.js',
        dest: 'composite.all.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
}

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  'use strict';

  return gulp.src([
      'src/public/bower_components/jquery/jquery.js',
      'src/public/bower_components/angular/angular.js',
      'src/public/core.js'
    ], {
      base: '.'
    })
    .pipe(sourcemaps.init({
      loadMaps: false
    }))
    .pipe(concat('all.js', {
      newLine: '\n;'
    }))
    .pipe(uglify({
      outSourceMap: true,
      basePath: 'www',
      sourceRoot: '/'
    }))
    .pipe(sourcemaps.write('.', {
      includeContent: true,
      sourceRoot: '/'
    }))
    .pipe(gulp.dest('src/public/'));
});

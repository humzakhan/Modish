'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var util = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var expect = require('gulp-expect-file');
var inject = require('gulp-inject');

gulp.task('watch:sass', function() {
    gulp.watch(['src/scss/*.scss', 'src/scss/core/**/*', 'src/scss/components/**/*', 'src/scss/**/*'], ['build:sass'])
});

gulp.task('build:sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('build:js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify().on('error', util.log))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('inject:sidebar', function () {
  return gulp.src('dist/*.html')
    .pipe(inject(gulp.src(['src/html/sidebar.html']), {
      starttag: '<!-- inject:SIDEBAR -->',
      endtag: '<!-- inject:/SIDEBAR -->',
      relative: true,
      transform: function (filePath, file) {
        return file.contents.toString('utf8')
      }
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['build:sass', 'build:js']);

gulp.task('default', ['build:sass', 'watch:sass']);
'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var util = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var expect = require('gulp-expect-file');

gulp.task('watch:sass', function() {
    gulp.watch(['src/scss/*.scss', 'src/scss/core/**/*', 'src/scss/components/**/*'], ['build:sass'])
});

gulp.task('build:sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('build', ['build:sass']);

gulp.task('default', ['build:sass', 'watch:sass']);
'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var util = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var expect = require('gulp-expect-file');

var sass_files = [ 
        'src/scss/*.scss',
        'src/scss/core/**/*',
        'src/scss/components/**/*'
     ];

gulp.task('watch:sass', function() {
    gulp.watch(sass_files, ['build:sass']);
});

gulp.task('build:sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', util.log))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/assets/css/min/'));
});

gulp.task('build', ['build:sass']);

gulp.task('default', ['build:sass', 'watch:sass']);
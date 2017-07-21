'use strict';
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
// var pump = require('pump');
// var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var sass = require('gulp-sass');
// var concat = require('gulp-concat');
// var optimizejs = require('gulp-optimize-js');
// var gutil = require('gulp-util');
var watch = require('gulp-watch');
var eslint = require('gulp-eslint');
var cssnano = require('gulp-cssnano');
var prettyError = require('gulp-prettyerror');

// minjs task with lint task completion as dependency for running vs not
gulp.task('minjs', ['lint'], function() {
   gulp.src('./js/*.js')
    .pipe(uglify()) 
    .pipe(rename({ extname: '.min.js' })) 
    .pipe(gulp.dest('./dist/js')) 
});

// gulp.task('minjs', function() {
//    gulp.src('./js/*.js')
//     .pipe(uglify()) 
//     .pipe(rename({ extname: '.min.js' })) 
//     .pipe(gulp.dest('./dist/js')) 
// });

// Reload Broswer
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    }); //end of broswer sync init

    gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
    gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
});

gulp.task('lint', function() {
   return gulp.src(['js/**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
      .pipe(prettyError())  
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./dist/css'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./dist/css'));
});

// Gulp watch function
gulp.task('watch', function() {
   gulp.watch('js/*.js', ['minjs']);
   gulp.watch('sass/*.scss', ['sass']);
});

// defaults with lint as dependent on minjs vs. not
gulp.task('default', ['watch', 'browser-sync']);
// gulp.task('default', ['lint', 'watch', 'browser-sync']);

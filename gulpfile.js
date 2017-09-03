var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),

    connect = require('gulp-connect'),
    gulpif = require('gulp-if');

var env = process.env.NODE_ENV || 'development';
var outputDir = 'builds/development';

gulp.task('html', function(){
  return gulp.src('src/templates/*.html')
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload());
});

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
  .pipe(gulpif(env === 'production', uglify()))
  .pipe(gulp.dest(outputDir + '/js'))
  .pipe(connect.reload());
});

gulp.task('img', function(){
  return gulp.src('src/img/*.jpg')
  .pipe(gulp.dest(outputDir + '/img'))
  .pipe(connect.reload());
});

gulp.task('sass', function(){
  var config = {};

  if (env == 'development') {
    config.sourceComments = 'map';
  }

  if (env == 'production') {
    config.outputStyle = 'compressed';
  }

  return gulp.src('src/sass/main.scss')
  .pipe(sass(config))
  .pipe(gulp.dest(outputDir + '/css'))
  .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('src/templates/*.html', ['html']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: [outputDir],
    livereload: true
  });
});

gulp.task('default', ['js', 'html', 'img', 'sass', 'watch', 'connect']);

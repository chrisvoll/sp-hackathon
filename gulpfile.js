var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

var PATHS = {
  BASE: {
    JS: './clientside/js/',
    CSS: './clientside/scss/'
  },
  DEST: {
    JS: './assets/js/',
    CSS: './assets/css/'
  }
};

gulp.task('default', ['js', 'css', 'watch', 'livereload']);

gulp.task('js', function() {
  browserify({
      entries: PATHS.BASE.JS + 'main.jsx',
      extensions: ['.jsx'],
      debug: false
    })
    .transform(babelify)
    .bundle()
    .on('error', function(err){ console.log(err.message); })
    .pipe(source('output.js'))
    .pipe(gulp.dest(PATHS.DEST.JS))
    .pipe(livereload());
});

gulp.task('css', function() {
  gulp.src([PATHS.BASE.CSS + '*.scss', PATHS.BASE.CSS + '**/*.scss'])
    .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
    .pipe(autoprefixer(
      ["last 2 versions", "ie >= 9", "ff >= 10", "safari >= 5.0.6"],
      {
        cascade: true
      }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(PATHS.DEST.CSS))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch([
    PATHS.BASE.JS + '*.js',
    PATHS.BASE.JS + '**/*.js',
    PATHS.BASE.JS + '*.jsx',
    PATHS.BASE.JS + '**/*.jsx'
  ], ['js']);
  gulp.watch([
    PATHS.BASE.CSS + '*.scss',
    PATHS.BASE.CSS + '**/*.scss'
  ], ['css'])
});

gulp.task('livereload', function() {
  livereload.listen();
});

'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';

const paths = {
  scssSource: './public/assets/styles/**/*.scss',
  scssDest: './public/assets/styles',
  jsSource: ['./public/app/app.module.js', './public/app/**/*.js'],
  jsDest: './public'
};

gulp.task('styles', () => {
  return gulp.src(paths.scssSource)
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(paths.scssDest));
});

gulp.task('frontjs', () => {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(paths.jsDest));
});

gulp.task('watch', () =>  {
  gulp.watch(paths.jsSource, ['frontjs']);
  gulp.watch(paths.scssSource, ['styles']);
});

gulp.task('default', ['watch', 'frontjs', 'styles']);

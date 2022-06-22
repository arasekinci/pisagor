/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')

async function build() {
  gulp
    .src('src/*.css')
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'))
}

exports.build = build

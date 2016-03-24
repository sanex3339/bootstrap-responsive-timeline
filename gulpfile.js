var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css');


gulp.task('default', ['build-less-min', 'build-less']);

gulp.task('build-less-min', function () {
    gulp.src('less/timeline.less')
        .pipe(less())
        .pipe(minifyCss())
        .pipe(rename('timeline.min.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('build-less', function () {
    gulp.src('less/timeline.less')
        .pipe(less())
        .pipe(gulp.dest('css/'));
});
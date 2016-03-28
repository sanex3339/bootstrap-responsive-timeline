var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    lessToScss = require('gulp-less-to-scss'),
    sass = require('gulp-sass');


gulp.task('default', ['build-less-min', 'build-less']);
gulp.task('less', ['build-less-min', 'build-less']);
gulp.task('scss', ['build-scss-min', 'build-scss']);

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

gulp.task('less-to-scss', function () {
    gulp.src('less/**/**.less')
        .pipe(lessToScss())
        .pipe(gulp.dest('scss'));
});

gulp.task('build-scss-min', function () {
    gulp.src('scss/timeline.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('timeline.min.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('build-scss', function () {
    gulp.src('scss/timeline.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css/'));
});
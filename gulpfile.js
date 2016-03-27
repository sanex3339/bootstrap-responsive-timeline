var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass');


gulp.task('default', ['build-less-min', 'build-less']);
gulp.task('less', ['build-less-min', 'build-less']);
gulp.task('sass', ['build-sass-min', 'build-sass']);

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

gulp.task('build-sass-min', function () {
    gulp.src('sass/timeline.sass')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('timeline.min.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('build-sass', function () {
    gulp.src('sass/timeline.sass')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css/'));
});
var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css');


gulp.task('default', ['build-less']);

gulp.task('build-less', function () {
    gulp.src('src/timeline.less')
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/'));
});
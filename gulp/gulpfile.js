var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))

        .pipe(gulp.dest('../src/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series(gulp.parallel('sass'), function() {
    
    browserSync.init({
        server: "../src/",
        open: false
    });

    gulp.watch("./sass/*.scss", gulp.parallel('sass')).on('change', browserSync.reload);
    gulp.watch("../src/*.html").on('change', browserSync.reload);
    gulp.watch("../src/js/*.js").on('change', browserSync.reload);
}));

gulp.task('default', gulp.parallel('serve'));
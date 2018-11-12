var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
<<<<<<< HEAD
        .pipe(gulp.dest('../src/frontend/css'))
=======
        .pipe(gulp.dest('../src/css'))
>>>>>>> Template initial commit
        .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series(gulp.parallel('sass'), function() {
    
    browserSync.init({
<<<<<<< HEAD
        server: "../src/frontend/",
=======
        server: "../src/",
>>>>>>> Template initial commit
        open: false
    });

    gulp.watch("./sass/*.scss", gulp.parallel('sass')).on('change', browserSync.reload);
<<<<<<< HEAD
    gulp.watch("../src/frontend/*.html").on('change', browserSync.reload);
    gulp.watch("../src/frontend/js/*.js").on('change', browserSync.reload);
=======
    gulp.watch("../src/*.html").on('change', browserSync.reload);
    gulp.watch("../src/js/*.js").on('change', browserSync.reload);
>>>>>>> Template initial commit
}));

gulp.task('default', gulp.parallel('serve'));
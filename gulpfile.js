var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    browserSync = require('browser-sync');

gulp.task('jade', function () {
    gulp.src('src/jade/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('stylus', function () {
    gulp.src('src/stylus/*.styl')
        .pipe(stylus())
        .pipe(minify())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
    // index.js need to display top
    gulp.src(['src/js/index.js', 'src/js/*.js'])
        .pipe(concat('application.js'))
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('app/scripts/'))
        .pipe(browserSync.reload({stream: true}));
})

gulp.task('watch', function () {
    gulp.watch(['src/jade/**/*.jade'], ['jade']);
    gulp.watch(['src/stylus/*.styl'], ['stylus']);
    gulp.watch(['src/js/*.js'], ['js']);
});

gulp.task('sync', function () {
    browserSync({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('default', ['jade', 'stylus', 'js', 'watch', 'sync']);

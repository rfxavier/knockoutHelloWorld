/**
 * Created by RENATO on 10/12/2015.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var jshint = require('gulp-jshint');

gulp.task('scripts', function(){
    var b = browserify({
        entries: 'src/scripts/main.js',
        debug: true
    });

    b.bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(browserSync.stream());
});

gulp.task('default', function() {
    browserSync.init({
        server: './'
    });

    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('*.html', browserSync.reload);
});

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var libsass = require('gulp-sass');

gulp.task('sass-compass', function() {
    return sass('src/scss/ruby-sass-compass.scss', {compass: true})
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'));
});
gulp.task('sass-susy-compass', function() {
    return sass('src/scss/ruby-sass-susy-compass.scss', {require: "susy", compass: true})
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'));
});
gulp.task('sass-susy', function() {
    return sass('src/scss/ruby-sass-susy.scss', {require: "susy"})
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'));
});
gulp.task('sass', function() {
    return sass('src/scss/ruby-sass.scss')
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'));
});
gulp.task('libsass', function() {
    return gulp.src('src/scss/libsass.scss')
        .pipe(libsass())
        .pipe(gulp.dest('dist/css'));
});
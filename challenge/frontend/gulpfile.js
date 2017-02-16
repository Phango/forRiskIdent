var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

var paths = {
    scripts: [
        'app/components/**/*.js',
        '!app/components/**/*_test.js'
    ],
    css: [
        'app/components/**/*.scss'
    ],
    dist: './app/components/'
}

gulp.task('build-css', function() {
    return gulp.src(paths.css)
    .pipe(sass())
    .pipe(gulp.dest(paths.dist))
})

gulp.task('watch', function() {
 gulp.watch('app/**/*', ['build-css']);
});

gulp.task('default', [
    'watch'
]);

gulp.task('clean', function() {
    return gulp.src(['node_modules', 'app/bower_components'], {read: false})
        .pipe(clean())
})

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', [
    ''
]);

gulp.task('clean', function() {
    return gulp.src(['node_modules'], {read: false})
        .pipe(clean())
})

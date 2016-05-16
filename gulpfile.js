var gulp = require('gulp');

gulp.task('test', function() {
	return gulp.src('./index.html').pipe(gulp.dest('test'));
});

gulp.task('default', ['test']);
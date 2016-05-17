var gulp = require('gulp');

gulp.task('copyTemplates', function() {
	return gulp.src('./templates/index.html').pipe(gulp.dest('dist/templates'));
});

gulp.task('default', ['copyTemplates']);
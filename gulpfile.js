var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');

gulp.task('copyTemplates', function() {
	return gulp.src('./resources/templates/index.html').pipe(gulp.dest('dist/templates'));
});

gulp.task('compileLess', function () {
	return gulp.src('./resources/less/**/*.less')
		.pipe(rename({'extname':'.css'}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['copyTemplates', 'compileLess']);
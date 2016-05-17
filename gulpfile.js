var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('copyTemplates', function() {
	return gulp.src('./resources/templates/index.html').pipe(gulp.dest('dist/templates'));
});

gulp.task('compileLess', function () {
	return gulp.src('./resources/less/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['copyTemplates', 'compileLess']);
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var htmlReplace = require('gulp-html-replace');

var now = Date.now();

gulp.task('copyTemplates', function() {
	return gulp.src('./resources/templates/index.html')
		.pipe(htmlReplace({
			'css': '/css/main' + now + '.min.css'
		}))
		.pipe(gulp.dest('dist/templates'));
});

gulp.task('compileLess', function () {
	return gulp.src('./resources/less/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat('main' + now + '.min.css'))
		.pipe(cssmin())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['copyTemplates', 'compileLess']);
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');
var template = require('gulp-template');
var gutil = require('gulp-util');

var now = Date.now();
var prod = gutil.env.env === 'prod';
var config = {
	templates: {
		source: './app/templates/**/*.html',
		destination: './dist/templates'
	},
	styles: {
		source: './app/less/**/*.less',
		destination: './dist/css',
		relativeUrl: '/css/',
		filename: (function() {
			return prod ? 'main' + now + '.min.css' : 'main.min.css';
		})()
	},
	images: {
		source: './app/img/**/*.{png,gif,jpg}',
		destination: './dist/img',
		relativeUrl: '/img/'
	}
};


// Shared tasks between dev and prod
var compileTemplates = function() {
	var cssPath = config.styles.relativeUrl + config.styles.filename;

	return gulp.src(config.templates.source)
		.pipe(template({cssPath: cssPath}))
		.pipe(gulp.dest(config.templates.destination));
};

var compileStyles = function() {
	return gulp.src(config.styles.source)
		.pipe(prod ? gutil.noop() : sourcemaps.init())
		.pipe(less())
		.pipe(concat(config.styles.filename))
		.pipe(cleanCSS())
		.pipe(prod ? gutil.noop() : sourcemaps.write())
		.pipe(gulp.dest(config.styles.destination));
};

var copyImages = function() {
	return gulp.src(config.images.source)
		.pipe(gulp.dest(config.images.destination));
};


// Dev-only tasks
var watchTemplates = function() {
	gulp.watch(config.templates.source, ['compileTemplates']);
};

var watchStyles = function() {
	gulp.watch(config.styles.source, ['compileStyles']);
};

var optimizeImages = function() {
	var imagemin = require('gulp-imagemin');
	
	return gulp.src(config.images.source)
		.pipe(imagemin())
		.pipe(gulp.dest(config.images.destination));
};

gulp.task('compileTemplates', compileTemplates);
gulp.task('compileStyles', compileStyles);
gulp.task('copyImages', copyImages);
gulp.task('watchTemplates', watchTemplates);
gulp.task('watchStyles', watchStyles);
gulp.task('optimizeImages', optimizeImages);

gulp.task('default', ['compileTemplates', 'compileStyles', 'copyImages']);
gulp.task('watchAll', ['default', 'watchTemplates', 'watchStyles']);
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');
var htmlclean = require('gulp-htmlclean');
var template = require('gulp-template');
var preprocess = require ('gulp-preprocess');
var gutil = require('gulp-util');

var now = Date.now();
var prod = process.env.NODE_ENV === 'prod';
var config = {
	templates: {
		source: './app/templates/**/*.hbs',
		destination: './dist/templates'
	},
	static: {
		source: './app/static-root/**/*.*',
		destination: './dist/static-root'
	},
	styles: {
		source: './app/less/**/*.less',
		destination: './dist/css',
		relativeUrl: '/css/',
		filename: prod ? 'main' + now + '.min.css' : 'main.min.css'
	},
	images: {
		source: './app/img/**/*.{png,gif,jpg}',
		destination: './dist/img',
		relativeUrl: '/img/'
	}
};

var compileTemplates = function() {
	var cssPath = config.styles.relativeUrl + config.styles.filename;

	return gulp.src(config.templates.source)
		.pipe(prod ? preprocess({context: {prod: true}}) : preprocess({context: {dev: true}}))
		.pipe(template({cssPath: cssPath}))
		.pipe(htmlclean())
		.pipe(gulp.dest(config.templates.destination));
};

var copyStaticAssets = function() {
	return gulp.src(config.static.source)
		.pipe(gulp.dest(config.static.destination));
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

var watchTemplates = function() {
	gulp.watch(config.templates.source, ['compileTemplates']);
};

var watchStyles = function() {
	gulp.watch(config.styles.source, ['compileStyles']);
};

gulp.task('compileTemplates', compileTemplates);
gulp.task('copyStaticAssets', copyStaticAssets);
gulp.task('compileStyles', compileStyles);
gulp.task('watchTemplates', watchTemplates);
gulp.task('watchStyles', watchStyles);
gulp.task('copyImages', copyImages);

gulp.task('default', ['compileTemplates', 'copyStaticAssets', 'compileStyles', 'copyImages']);
gulp.task('watchAll', ['compileTemplates', 'copyStaticAssets', 'compileStyles', 'watchTemplates', 'watchStyles']);
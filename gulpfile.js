const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const htmlclean = require('gulp-htmlclean');
const template = require('gulp-template');
const preprocess = require ('gulp-preprocess');
const gutil = require('gulp-util');

const now = Date.now();
const prod = process.env.NODE_ENV === 'production';

if (!prod) {
	const imagemin = require('gulp-imagemin');
	const sourcemaps = require('gulp-sourcemaps');
	const watch = require('gulp-watch');
}

const config = {
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

const compileTemplates = function() {
	const cssPath = config.styles.relativeUrl + config.styles.filename;

	return gulp.src(config.templates.source)
		.pipe(prod ? preprocess({context: {prod: true}}) : preprocess({context: {dev: true}}))
		.pipe(template({cssPath: cssPath}))
		.pipe(htmlclean())
		.pipe(gulp.dest(config.templates.destination));
};

const copyStaticAssets = function() {
	return gulp.src(config.static.source)
		.pipe(gulp.dest(config.static.destination));
};

const compileStyles = function() {
	return gulp.src(config.styles.source)
		.pipe(prod ? gutil.noop() : sourcemaps.init())
		.pipe(less())
		.pipe(concat(config.styles.filename))
		.pipe(cleanCSS())
		.pipe(prod ? gutil.noop() : sourcemaps.write())
		.pipe(gulp.dest(config.styles.destination));
};

const copyImages = function() {
	return gulp.src(config.images.source)
		.pipe(gulp.dest(config.images.destination));
};

const optimizeImages = function() {
	return gulp.src(config.images.source)
		.pipe(imagemin());
};

const watchTemplates = function() {
	gulp.watch(config.templates.source, ['compileTemplates']);
};

const watchStyles = function() {
	gulp.watch(config.styles.source, ['compileStyles']);
};

gulp.task('compileTemplates', compileTemplates);
gulp.task('copyStaticAssets', copyStaticAssets);
gulp.task('compileStyles', compileStyles);
gulp.task('watchTemplates', watchTemplates);
gulp.task('watchStyles', watchStyles);
gulp.task('copyImages', copyImages);
gulp.task('optimizeImages', optimizeImages);

gulp.task('pre-commit', ['optimizeImages']);

gulp.task('default', ['compileTemplates', 'copyStaticAssets', 'compileStyles', 'copyImages']);
gulp.task('watchAll', ['compileTemplates', 'copyStaticAssets', 'compileStyles', 'watchTemplates', 'watchStyles']);
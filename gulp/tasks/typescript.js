var gulp = require('gulp'),
    del = require('del'),
	path = require('../paths'),
	browserSync = require('browser-sync').create(),
	$ = require('gulp-load-plugins')({ lazy: true });



var tsProject = $.typescript.createProject('tsconfig.json', { sortOutput: true });

gulp.task('build:tsconf', function () {
	return gulp.src([path.app.ts]).pipe($.tsconfigFiles());
});


gulp.task('typescript', function () {
	return gulp.src([path.app.ts, path.typings])
		.pipe($.sourcemaps.init())
		.pipe($.typescript(tsProject))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(path.build.basePath))
		.pipe(browserSync.stream());
});
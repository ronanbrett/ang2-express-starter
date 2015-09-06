var gulp = require('gulp'),
    path = require('../paths'),
    config = require('../config'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')({ lazy: true });


gulp.task('serve', function() {
    runSequence(
        'clean',
		'bundle/angular2',
		'build:tsconf',
        'typescript',
        'copy:libs',
		'copy:bower',
        'inject:all',
        'styles',
        'images',
        'copy:build',
        'browserSync'
    )
});

gulp.task('build', function() {
    runSequence(
        'clean',
		'bundle/angular2',
		'build:tsconf',
        'typescript',
        'copy:libs',
        'copy:bower',
        'inject:all',
        'styles',
        'images',
        'copy:build',
		'browserSyncApi'
    )
});



gulp.task('browserSync', function () {
	browserSync.init({
		port: 80,
		server: {
			baseDir: [path.build.basePath, './.tmp', './scripts']
		},
		rewriteRules: [
			{
				match: /..\/.tmp\/|..\/scripts\/|\/build|dist\/|reflect-metadata\/|rx\//g,
				fn: function (match) {
					return '';
				}
			}

		]
	});

	$.watch(path.app.templates, function () {
		runSequence(
			'clean:html',
			'copy:build',
			browserSync.reload
			);
	});

	$.watch(path.app.scss, function () {
		runSequence(
			'inject:scss',
			'styles',
			'copy:build',
			browserSync.reload
			);
	});

	$.watch(path.app.ts, function () {
		runSequence(
			'build:tsconf',
			'typescript',
			browserSync.reload
			);
	});
	$.watch(path.app.images, function () {
		runSequence(
			'images',
			browserSync.reload
			);
	});
});


gulp.task('api', function () {
    $.nodemon({
        script: path.server,
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })

});

gulp.task('browserSyncApi', ['api'], function() {
	browserSync.init({
		proxy:  "localhost:9000"
	});
	$.watch(path.app.templates, function () {
		runSequence(
			'clean:html',
			'copy:build',
			browserSync.reload
			);
	});

	$.watch(path.app.scss, function () {
		runSequence(
			'inject:scss',
			'styles',
			'copy:build',
			browserSync.reload
			);
	});

	$.watch(path.app.ts, function () {
		runSequence(
			'build:tsconf',
			'typescript',
			browserSync.reload
			);
	});
	$.watch(path.app.images, function () {
		runSequence(
			'images',
			browserSync.reload
			);
	});
});
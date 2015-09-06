var gulp 			= require('gulp'),
	path			= require('../paths'),
	config        	= require('../config'),
    $             	= require('gulp-load-plugins')({lazy: true});

gulp.task('images', ['clean:images'], function() {
    return gulp
        .src(path.app.images)
        .pipe($.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(path.build.basePath + 'images'));
});

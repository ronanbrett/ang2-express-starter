var gulp          = require('gulp'),
    path          = require('../paths'),
    config        = require('../config');
	browserSync   = require('browser-sync').create(),
	$             = require('gulp-load-plugins')({lazy: true}),

	

gulp.task('styles', function() {
    return gulp.src([path.app.scss])
        .pipe($.changed(path.app.scss, {
            extension: '.scss'
        }))
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            precision: 10
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer(config.styles.AUTOPREFIX))
        .pipe(gulp.dest(path.tmp.basePath))
        .pipe($.if('*.css', $.minifyCss()))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.build.basePath))
        .pipe(browserSync.stream())
        .pipe($.size({
            title: 'styles'
        }));
});
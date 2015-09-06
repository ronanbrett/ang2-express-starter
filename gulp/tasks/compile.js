var gulp          = require('gulp'),
    path          = require('../paths'),
    config        = require('../config'),
    $             = require('gulp-load-plugins')({lazy: true});

gulp.task('build:deps', function () {
  var Builder = require('systemjs-builder');
  var builder = new Builder(config.systemjs);
  
  builder.build('angular2/router', path.scripts.vendors + '/router.js', {});  
  builder.build('angular2/test_lib', path.scripts.vendors + '/test_lib.js', {});  
  return builder.build('angular2/angular2', path.scripts.vendors + '/angular2.js', {});
});


gulp.task('deps/angular2', function () {
	var angular2Path = 'build/libs/angular2';
	return gulp
		.src([
			'!node_modules/angular2/es6/**',
			'!node_modules/angular2/node_modules/**',
			'!node_modules/angular2/angular2_sfx.js',
			'!node_modules/angular2/angular2_sfx.js.map',
			'node_modules/angular2/**/*.js',
			'node_modules/angular2/**/*.map'
		])
		.pipe($.changed(angular2Path))
		.pipe($.size({
			showFiles: true,
			gzip: true
		}))
		.pipe(gulp.dest(angular2Path));
});



gulp.task('bundle/angular2', function () {
	var angular2Path = path.build.libs;
	return gulp
		.src([
			path.scripts.bundles + '*.js',
			path.scripts.bundles + '*.map',
      '!' + path.scripts.bundles +'**.min.js'
		])
		.pipe($.changed(angular2Path))
		.pipe($.size({
			showFiles: true,
			gzip: true
		}))
		.pipe(gulp.dest(angular2Path));
});



gulp.task('ngAnnotate', function() {
    return gulp.src(path.build.js)
  .pipe($.plumber())
  .pipe($.ngAnnotate())
  .pipe(gulp.dest(path.build));
});
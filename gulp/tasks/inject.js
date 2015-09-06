var gulp          = require('gulp'),
    path          = require('../paths'),
    config        = require('../config'),
    mainBowerFiles    = require('main-bower-files'),
    browserSync   = require('browser-sync').create(),
    $             = require('gulp-load-plugins')({lazy: true}),
    series        = require('stream-series');


/**
 *  Gulp: Inject Typescript
 *  
 */

gulp.task('inject:ts',function() {
  var tsTarget = gulp.src('./typings/tsd.d.ts');
  var tsStream = gulp.src(path.app.ts, {
      read: false
  });
  return tsTarget.pipe($.inject(tsStream, {relative: true})).pipe(gulp.dest('typings'))
});


/**
 *  Gulp: Inject SCSS
 *  
 */

gulp.task('inject:scss',function() {
  var scssStream = gulp.src([path.app.defaultStyles,'!src/client/app.scss','!src/client/styles/_variables.scss'], {
      read: false
  });
  var cssTarget = gulp.src(path.app.styles);
  return cssTarget.pipe($.inject(scssStream, {relative: true})).pipe(gulp.dest(path.client))
});


/**
 *  Gulp: Inject JS + Angular into Html
 *  
 */

gulp.task('inject:html', function() {
 
  // Vendor Files
  var vendorStream = gulp.src('./scripts/vendors/**.*js', {
      read: false
  });

  var libsStream = gulp.src(path.scripts.ordered, {
      read: false
  });

  var appStream = gulp.src(path.build.ordered);

  // Angular Files
  var target = gulp.src('./src/client/index.html');
  return target.pipe($.inject(series(vendorStream,appStream), { ignorePath:'build' ,relative: true,addRootSlash:false } ))
      .pipe($.inject(gulp.src('./build/libs/vendors/**'), {name: 'bower',relative:false, ignorePath: '/build/'}))
      .pipe($.inject(libsStream, {name: 'libs' ,relative: false,  ignorePath: '/build/' }))
      .pipe(gulp.dest('./src/client/'))
});



/**
 *  Gulp: Inject Everything
 *  
 */

gulp.task('inject:all',['inject:ts','inject:scss','inject:html']);


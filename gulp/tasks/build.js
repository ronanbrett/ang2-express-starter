var gulp          = require('gulp'),
    del           = require('del'),
    path          = require('../paths'),
    runSequence   = require('run-sequence'),
    mainBowerFiles    = require('main-bower-files'),
    $             = require('gulp-load-plugins')({lazy: true});


gulp.task('clean', function(cb) {
  return del(['./.tmp', 'build/*','dist/*', 'ui-docs', '!build/.git','!dist/.git'], {
      dot: true
  }, cb)
});

gulp.task('clean:images', function(cb) {
  del([path.build.images,'!build/.git'], {
      dot: true
  }, cb)
});

gulp.task('clean:html', function(cb) {
  del(['build/**/*.html','!build/.git'], {
      dot: true
  }, cb)
});

gulp.task('clean:css', function(cb) {
  del(['build/**/*.css','!build/.git'], {
      dot: true
  }, cb)
});

gulp.task('copy:bower', function(){
  return gulp.src(mainBowerFiles(), {base: './scripts'}).pipe(gulp.dest('./build/libs/vendors'));
  
})

gulp.task('copy:libs',function(){
  var libsStream = gulp.src(path.scripts.libs);
  return libsStream.pipe(gulp.dest(path.build.libs))
})

gulp.task('copy:deps',function(){
  var libsStream = gulp.src(path.scripts.vendors + '/**');
  return libsStream.pipe(gulp.dest(path.build.libs))
})

gulp.task('copy:build', function(){
  return gulp.src(path.app.templates)
  .pipe(gulp.dest(path.build.basePath));
});


gulp.task('concat', function() {
  var assets = $.useref.assets({searchPath: '{.tmp,src/client,build}'});

  return gulp.src(path.build.html)
    .pipe(assets)
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.if('*.js', $.uglify()))
    .pipe(assets.restore())
    .pipe($.useref())

    .pipe($.if('*.html', $.minifyHtml()))
    .pipe(gulp.dest(path.dist.basePath))
    .pipe($.size({title: 'html'}));
});


gulp.task('optimize', function(cb) {
    runSequence(
        'clean',
        'typescript',
        'inject:all',
        'styles',
        'images',
        ['copy:build'],
        ['ngAnnotate'],
        cb

    )
});

gulp.task('build', function() {
    runSequence(
        'optimize',
        'concat'
    )
})
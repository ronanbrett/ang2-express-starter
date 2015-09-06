var gulp          = require('gulp'),
    runSequence   = require('run-sequence');

require('require-dir')('./gulp/tasks', { recurse: true });

gulp.task('default', ['clean'], function(cb) {
    runSequence(
       ['serve'],
        cb
    );
});


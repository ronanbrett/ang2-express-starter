var gulp          	= require('gulp'),
	fabricator    	= require('gulp-fabricator'),
	path			= require('../paths'),
	config			= require('../config');

// /**
//  *  Generate KSS Objects
//  *  Task: "gulp ui-kit-generator"
//  *  Pull CSS Comments out of the scss files and into objects
//  *  TODO: Decide what to do with these
//  */

gulp.task('ui', function() {
    return gulp.src(path.app.scss)
        .pipe(fabricator({
            output: 'index.html'
        }))
        .pipe(gulp.dest('ui-docs'));
});

var gulp      = require('gulp'),
    path 			= require('../paths'),
    config    = require('../config'),
    glob      = require('glob'),
    stylish   = require('gulp-tslint-stylish'),
    $         = require('gulp-load-plugins')({lazy: true});


gulp.task('vet',function(){
  gulp.src(path.app.ts)
    .pipe($.tslint())
    .pipe($.tslint.report(stylish, {
        emitError: false,
        sort: true,
        bell: true
      }));
});


gulp.task('plato', function(done) {
    console.log('Analyzing source with Plato');
    console.log('Browse to /report/plato/index.html to see Plato results');

    startPlatoVisualizer(done);
});


/**
 * Start Plato inspector and visualizer
 * 
 */

function startPlatoVisualizer(done) {
    console.log('Running Plato');

    var files = glob.sync(config.plato.js);
    var excludeFiles = /.*\.spec\.js/;
    var plato = require('plato');

    var options = {
        title: 'Plato Inspections Report',
        exclude: excludeFiles
    };
    var outputDir = path.test.report + '/plato';

    plato.inspect(files, outputDir, options, platoCompleted);

    function platoCompleted(report) {
        var overview = plato.getOverviewReport(report);
        if (done) { done(); }
    }
};
var path = require('./paths');
var wiredep = require('wiredep');
var bowerFiles = wiredep({
    devDependencies: true,
    directory: 'scripts'
})['js'];
    
var config = {
	
	systemjs: {
		defaultJSExtensions: true,
		paths: {
			"angular2/*": "node_modules/angular2/es6/prod/*.js",
			"rx": "node_modules/angular2/node_modules/rx/dist/rx.js"
		},
		meta: {
			'rx': {
				format: 'cjs' //https://github.com/systemjs/builder/issues/123
			}
		}
	},
	plato: {
		js: 'build/app/**/*.js'
	},
	karma: getKarmaOptions(),
	
	styles: {
		AUTOPREFIX: [
			'ie >= 10',
			'ie_mob >= 10',
			'ff >= 30',
			'chrome >= 34',
			'safari >= 7',
			'opera >= 23',
			'ios >= 7',
			'android >= 4.4',
			'bb >= 10'
		]
	}
}

function getKarmaOptions() {
        var options = {
            browsers: ['PhantomJS'],
            frameworks: ['jasmine','phantomjs-shim'],
            files: [].concat(
                path.test.libs,
                {
                    pattern: 'node_modules/angular2/src/**/*.js',
                    included: false
                    
                },
                {
                    pattern: 'build/**',
                    included: false,
                    watched: true
                },
                'tests/test-runner.js'
            ),
            exclude: [],
            coverage: {
                dir: path.test.report + 'coverage',
                reporters: [
                    // reporters not supporting the `file` property
                    {
                        type: 'html',
                        subdir: 'report-html'
                    }, {
                        type: 'lcov',
                        subdir: 'report-lcov'
                    }, {
                        type: 'text-summary'
                    } //, subdir: '.', file: 'text-summary.txt'}
                ]
            },
            preprocessors: {

            }
 
        };
        options.preprocessors[path.build.client + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }

module.exports = config;
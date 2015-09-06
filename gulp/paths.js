var path = require('path');

var paths = {
	
	root : './',
	
	gulpfile:   ['./gulpfile.js', './gulp/**/*.js'],
	
	app: {
		src:			'/src/',
		images:         './src/client/images/**/*.{png,gif,jpg,jpeg,svg}',
		ts:				'./src/client/**/*.ts',
		js:				'./src/client/**/*.js',
		templates:		'./src/client/**/*.html',
		html:			'./src/client/index.html',
		scss:			'./src/client/**/*.scss',
		styles:			'./src/client/app.scss',
		defaultStyles:	'./src/client/**/_*.scss',

	},
	
	client:				'./src/client/',
	
	typings:			'./typings/**/*.ts',
	
	scripts: {
		vendors:		'./scripts/vendors/',
		bundles:		'node_modules/angular2/bundles/',
		libs:			[	'node_modules/traceur/bin/traceur-runtime.js',
							'node_modules/es6-module-loader/dist/es6-module-loader.js',
      						'node_modules/es6-module-loader/dist/es6-module-loader.js.map',
        					'node_modules/systemjs/dist/system.*',
							'scripts/vendors/system.config.js',
        					'node_modules/reflect-metadata/Reflect.js',
        					'node_modules/reflect-metadata/Reflect.js.map',
        					'node_modules/zone.js/dist/zone.js',
        					'node_modules/zone.js/dist/long-stack-trace-zone.js',
        					'node_modules/rx/dist/rx.js',
        					'node_modules/flux/dist/Flux.js',
        					'node_modules/lodash/dist/lodash.min.js',
        					'node_modules/postal/lib/postal.min.js'
						],
		ordered:		[
						
							'./build/libs/traceur-runtime.js',
							'./build/libs/es6-module-loader.js',
							'./build/libs/system.js',
							'./build/libs/system.config.js',
							'./build/libs/Reflect.js',
							'./build/libs/lodash.min.js',
							'./build/libs/postal.min.js',
							'./build/libs/angular2.js',
							'./build/libs/router.dev.js',
							'./build/libs/http.dev.js',
							'./build/libs/test_lib.dev.js',

							
						]
	},
	
	tmp: {
		basePath:			'/tmp/'
	},
	
	server:				'./src/server/app.js',
	
	build: {
		basePath:		'./build/',
		client:			'./build/app/',
		html:			'./build/**/*.html',
		libs:			'./build/libs/',
		js:				'./build/**/*.js',
		images:         './build/**/*.{png,gif,jpg,jpeg}',
		ordered:		 [
							'./build/**/app.module.js',
							'./build/**/*.module.js',
							'./build/**/*.js'
						]
		
	},
	
	bundles:			[	
							'node_modules/angular2/bundles/' + '/angular2.dev.js',
							'node_modules/angular2/bundles/' + '/router.dev.js',
							'node_modules/angular2/bundles/' + '/http.dev.js'
						],
	
	
	dist: {
		basePath:		'./dist/'
	},
	
	test: {
		specHelpers:	'/src/client/test-helpers/*.js',
		specs:			'/src/client/**/*.spec.js',
		serverIntegrationSpecs:	'/src/client/tests/server-integration/**/*.spec.js',
		report:			'./report/',
		libs:			[
							'node_modules/zone.js/dist/zone-microtask.js',
                			'node_modules/zone.js/dist/long-stack-trace-zone.js',
                			'node_modules/zone.js/dist/jasmine-patch.js',
                			'node_modules/traceur/bin/traceur-runtime.js',
                			'node_modules/systemjs/dist/system.js',
                			'node_modules/systemjs/dist/system-polyfills.js',
                			'node_modules/reflect-metadata/Reflect.js','node_modules/rx/dist/rx.js',
        					'node_modules/lodash/dist/lodash.min.js',
						]
	}
	
}

module.exports = paths;

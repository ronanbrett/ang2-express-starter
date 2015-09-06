/// <reference path="../../../../typings/tsd.d.ts" />

/*
 * Angular 2
 */

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';


// global App only directives
export var appDirectives: Array<any> = [
	

];

// global Angular core and other Angular module directives (form/router)
export var angularDirectives: Array<any> = [
// Angular's core directives
	CORE_DIRECTIVES,

// Angular's form directives
	FORM_DIRECTIVES,

// Angular's router
	ROUTER_DIRECTIVES
];
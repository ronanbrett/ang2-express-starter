/*
 * Angular 2
 */

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';


import {Section} from './section/section';
import {Sidebar, SidebarAction} from './toolbars/sidebar/sidebar';

// global App only directives
export var appDirectives: Array<any> = [
	Sidebar,
	Section,
	SidebarAction
	

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

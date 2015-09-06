/// <reference path="../../../../typings/tsd.d.ts" />

/*
 * Angular 2
 */
import {Injectable} from 'angular2/angular2';

@Injectable() class Logger {
	_names: Array<string>;

	constructor() {
	}

	error(message: string, data: any, title: string) {
		toastr.error(message, title);
	}
	info(message: string, data: any, title: string) {
		toastr.info(message, title);
	}
	success(message: string, data: any, title: string) {
		toastr.success(message, title);
	}
	warning(message: string, data: any, title: string) {
		toastr.warning(message, title);
	}

}

export { Logger }
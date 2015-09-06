import {describe, it, expect } from 'angular2/test_lib';
import { DOM } from 'angular2/src/dom/dom_adapter';
import { ObservableWrapper } from 'angular2/src/facade/async';
import {
	Injector,
	bind,
	Component,
	View,
	
} from 'angular2/angular2';

import {
	MockBackend,
	MockConnection,
	ConnectionBackend,
	BaseRequestOptions,
	Response,
	Http
} from 'http/http';

export function main () {
	describe('Core', () => {
		it('should exist', () => {
			expect(true).toBe(true);
		})
	})
}
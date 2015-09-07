import { bind } from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from 'angular2/router';
import { HTTP_BINDINGS } from 'http/http';

export const locationInjectables: Array<any> = [
	ROUTER_BINDINGS,
	HTTP_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
];



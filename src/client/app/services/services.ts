import {bind} from 'angular2/angular2';
import {ComponentsService} from './components';
import {CSSService} from './css';
import { Http,  } from 'http/http';

export {ComponentsService} from './components';

// Include injectables that you want to have globally throughout our app
export var appServices: Array<any> = [
	ComponentsService,
	CSSService
];



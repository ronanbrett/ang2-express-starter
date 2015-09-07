import {bind} from 'angular2/angular2';
import {BlocksService} from './blocks';
import { Http,  } from 'http/http';

// Include injectables that you want to have globally throughout our app
export var appServices: Array<any> = [
	BlocksService
];



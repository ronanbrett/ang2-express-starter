import {Injectable, bind} from 'angular2/angular2';
import {Observable} from 'rx';
import {Http, Headers, Jsonp} from 'http/http';

@Injectable()
export class CSSService {
	constructor(public http: Http) {
		
	}
	
	getRules() {
		return this.http.get('api/css/')
		.toRx()
		.map(res => res.json());
	}
}

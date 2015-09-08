import {Injectable, bind} from 'angular2/angular2';
import {Observable} from 'rx';
import {Http, Headers, Jsonp} from 'http/http';

@Injectable()
export class BlocksService {
	constructor(public http: Http) {
		
	}
	
	getBlocks() {
		return this.http.get('api/blocks/')
		.toRx()
		.map(res => res.json());
	}
}

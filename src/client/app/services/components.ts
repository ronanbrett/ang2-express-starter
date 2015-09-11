import {Injectable, bind} from 'angular2/angular2';
import {Observable} from 'rx';
import {Http, Headers, Jsonp} from 'http/http';

/*
 *	Blocks Object
 *	
 *	_id: "55efef4b37512bc7b6611cb8"
 *	hash: "20c089a080c4c18c63ec021ca91799dc"
 *	markup:
 *		escaped: "&lt;menu&gt;&lt;/menu&gt;"
 *		example: "<menu></menu>"
 *	name: "Layout"
 *	state:
 *		description: "Highlights when hovering."
 *		escaped: "active"name: ".active"
 *
 *	url: "styles\layout\_layout"
 *	version: "0.0.1"
*/

@Injectable()
export class ComponentsService {
	constructor(public http: Http) {
		
	}
	
	getComponents() {
		return this.http.get('api/components/')
		.toRx()
		.map(res => res.json());
	}
}

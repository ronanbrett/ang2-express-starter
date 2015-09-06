/// <reference path="../../../../typings/tsd.d.ts" />

import { Inject, Component, View, ViewEncapsulation, NgFor } from 'angular2/angular2';
import {RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';

@Component({
	selector: 'top-nav',
	properties: ['title']
})

@View({
	directives: [RouterLink],
	templateUrl: 'app/layout/topNav.html'
})

export class TopNav {
	constructor() {
		
	}
}
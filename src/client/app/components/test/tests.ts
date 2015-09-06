import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {appDirectives, angularDirectives} from 'app/directives/directives';

import {appPipes} from 'app/pipes/pipes';

import {TestsHome} from './home/home';

@Component({
	selector: 'tests'
})

@RouteConfig([
	{ path: '/', redirectTo: '/home' },
	{ path: '/home', as: 'home', component: TestsHome },
])


@View({
	directives: [RouterOutlet],
	templateUrl : 'app/components/test/tests.html',
	viewBindings: [ appPipes ]
})


export class Tests {
}
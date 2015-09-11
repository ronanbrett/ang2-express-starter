import {Component, View, Inject} from 'angular2/angular2';
import {RouterOutlet, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ComponentsService} from 'app/services/services';
import {UILibrary} from 'app/components/ui_library/ui_library';

import {Tests} from 'app/components/test/tests';
import {appPipes} from 'app/pipes/pipes';


@Component({
	selector: 'app', // without [ ] means we are selecting the tag directly
	bindings: [ComponentsService]
})

@View({
	directives: [RouterOutlet],
	templateUrl : './app/layout/shell.html',
	viewBindings: [ appPipes ]
})


@RouteConfig(
	[
		{path: '/',  redirectTo: '/ui'},
		{path: '/tests/...',  component: Tests, as: 'tests'},
		{path: '/ui/...',  component: UILibrary, as: 'ui'},
	])


export class App {

	votes: number;
	

	constructor() {
		
	}
	voteUp(): void {
	}
}
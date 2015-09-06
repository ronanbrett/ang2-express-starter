import {Component, View} from 'angular2/angular2';
import {RouterOutlet, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


import {Tests} from 'app/components/test/tests';
import {appPipes} from 'app/pipes/pipes';


@Component({
	selector: 'app', // without [ ] means we are selecting the tag directly
	bindings: []
})

@View({
	directives: [RouterOutlet],
	templateUrl : './app/layout/shell.html',
	viewBindings: [ appPipes ]
})



export class App {

	votes: number;

	constructor() {
		this.votes = 10;
	}
	voteUp(): void {
	}
}
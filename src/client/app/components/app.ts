import {Component, View, Inject} from 'angular2/angular2';
import {RouterOutlet, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {BlocksService} from 'app/services/blocks';

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
	blocksService: BlocksService;
	blocks;

	constructor(blocksService: BlocksService) {
		blocksService.getBlocks().subscribe(res => { 
			this.blocks = res
			console.log(res);
		});
	}
	voteUp(): void {
	}
}
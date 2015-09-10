import {Component, View, Inject, Host, NgFor} from 'angular2/angular2';
import {BlocksService} from 'app/services/blocks';
import {angularDirectives} from 'app/directives/directives';

@Component({
	selector: 'ui-library'
})

@View({
	templateUrl:'app/components/ui_library/ui_library.html',
	directives: [angularDirectives, NgFor]
})

export class UILibrary {
	blocks;
	
	constructor(public blocksService: BlocksService) {
		blocksService.getBlocks().subscribe(res => { 
			this.blocks = res
			console.log(res);
		});
	}
}

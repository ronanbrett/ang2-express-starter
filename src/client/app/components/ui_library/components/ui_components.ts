import {Component, View, Inject, NgFor} from 'angular2/angular2';
import {appDirectives, angularDirectives} from 'app/directives/directives';
import {ComponentsService} from 'app/services/services';

@Component({
	selector: 'ui-components'
})


@View({
	templateUrl: 'app/components/ui_library/components/ui_components.html',
	directives: [angularDirectives, appDirectives, NgFor]
})

export class UIComponents {
	blocks;
	constructor(public componentsService: ComponentsService)
	{
		componentsService.getComponents().subscribe(res => { 
		// this.blocks = res
		console.log(res);
		});	
	}
}
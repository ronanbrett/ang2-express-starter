import {Component, View, Inject} from 'angular2/angular2';
import {appDirectives, angularDirectives} from 'app/directives/directives';


@Component({
	selector: 'sidebar'
})


@View({
	templateUrl: 'app/directives/toolbars/sidebar/sidebar.html',

})

export class Sidebar {
	constructor()
	{
		
	}
}


@Component({
	selector: 'sidebar-action'
})

@View({
	templateUrl: 'app/directives/toolbars/sidebar/sidebar_action.html',
})

export class SidebarAction {
	constructor()
	{
		
	}
}
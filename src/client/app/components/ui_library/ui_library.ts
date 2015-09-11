import {Component, View, Inject, Host, NgFor} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {angularDirectives} from 'app/directives/directives';
import {UIComponent, UIComponents} from './ui_library_modules';

@Component({
	selector: 'ui-library',

})


@RouteConfig([
	{ path: '/', redirectTo: '/home' },
	{ path: '/home', as: 'home', component: UIComponents },
])


@View({
	directives: [RouterOutlet],
	templateUrl : 'app/components/test/tests.html'
})


export class UILibrary {
	
	
	constructor() {
	
	}
}

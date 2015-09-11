import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'section',
	properties:['title']
})

@View({
	templateUrl: 'app/directives/section/section.html',
	styleUrls: ['app/directives/section/section.css'],
})

export class Section  {
	constructor() {
		
	}
}
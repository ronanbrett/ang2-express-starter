/// <reference path="../../../typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';

// /*
//  * Angular Modules
//  */
import { FORM_DIRECTIVES} from 'angular2/angular2';

import { locationInjectables } from './core/location';



/*
 * App Services
 * our collection of injectables services
//  */
import {appServices} from './services/services';
import {appDirectives, angularDirectives} from './directives/directives';



var universalInjectables = [
  locationInjectables,
  angularDirectives,
  appServices,
  appDirectives
]

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './components/app';



bootstrap(
  // Top Level Component
  App,
  [universalInjectables]
  
);


/// <reference path="../../../../typings/tsd.d.ts" />

import {bind} from 'angular2/angular2';
import {Logger} from './logger';

// Include injectables that you want to have globally throughout our app
export var helperInjectables: Array<any> = [
  Logger
];

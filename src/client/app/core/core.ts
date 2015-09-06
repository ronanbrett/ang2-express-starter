/*
 * Angular 2
 */
import {Component, View} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';
import {Logger} from '../helpers/logger';

@Component({
  selector: 'core',
  injectables: []
})

@View({
  templateUrl : './app/core/layout/shell.html',
})




export class Core {
  votes: number;
  public logger: Logger

  
  constructor(logger: Logger) {
    this.logger = logger; 
    this.votes = 10
  }
  
  voteUp(){
   this.votes += 1;
   this.logger.info('Votes Increased!',this.votes,'Vote Change');
  }
}
/// <reference path="../../../../typings/tsd.d.ts" />

import {
  isBlank,
  isString,
  isArray,
  StringWrapper,
  BaseException,
  CONST
} from 'angular2/src/facade/lang';

import {Pipe} from 'angular2/angular2';

@Pipe({
  name: 'filter'
})
export class FilterPipe {
	transform(value: any, args: List<any> = null): any {
		if (isBlank(args) || args.length == 0) {
			throw new BaseException('filter pipe requires one argument');
		}
		if (args[0]['*'] == '*') {
			return value;
		}
		
		
		return _.filter(value, args[0]);
	}
}


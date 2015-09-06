import {
	describe,
	it,
	expect,
	beforeEach
} from 'angular2/test_lib';

import {BaseException} from 'angular2/src/facade/lang';
import { FilterPipe } from './filter.pipe';

export function main() {
	describe('FilterPipe', () => {
		let pipe;
		let arr;
		let filter;
		
		beforeEach(() => {
			pipe = new FilterPipe();
			arr = [{name:'name',age:12},{name:'andy',age:14}];
			filter = [{age:12}];
		});
		
		describe('transform', () => {
			it('should have an argument', () => {
				expect(function() {pipe.transform(null)
					.toThrow( new BaseException('filter pipe requires one argument'));
				});
			});
			it('should filter an array', () => {
				expect(pipe.transform(arr, filter)).toEqual([{name:'name',age:12}])
			});
		});
	});
}


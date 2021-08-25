import {
	getYearAndMonth,
	isToday,
	getWeekday,
	isWeekend,
	getPrev,
	getNext,
	getStart,
	getEnd,
	getMonthType,
	getIsSelected,
} from '../../lib/utils';

import { firstOfMay2021 } from '../fixture';

describe('utils > misc utils', () => {
	it('getYearAndMonth returns correct value without provided args', () => {
		const today = new Date(Date.now());
		const yearAndMonth = getYearAndMonth();
		
		const expected = {
			month: today.getMonth(),
			year: today.getFullYear(),
		};
		
		expect(yearAndMonth).toEqual(expected);
	});
	
	it('getYearAndMonth with provided date', () => {
		const date = new Date(1990, 2, 6)
		const yearAndMonth = getYearAndMonth(date);
		
		const expected = { month: 2, year: 1990 };
		
		expect(yearAndMonth).toEqual(expected);
	});
	
	it('isToday returns true if it is current day', () => {
		const today = new Date(Date.now());
		const result = isToday(today.getFullYear(), today.getMonth(), today.getDate());
		
		expect(result).toEqual(true);
	});
	
	it('isToday returns false if it`s not today', () => {
		const result = isToday(1990, 2, 6);
		
		expect(result).toEqual(false);
	});
	
	it('getWeekday returns correct weekday if week starts on monday', () => {
		const weekday = getWeekday(2021, 2, 6, true);
		
		expect(weekday).toEqual(5);
	});
	
	it('getWeekday returns correct weekday if week starts on sunday', () => {
		const weekday = getWeekday(2021, 2, 6, false);
		
		expect(weekday).toEqual(6);
	});
	
	it('isWeekend returns correct value when week starts on sunday', () => {
		const result = isWeekend(0, false);
		expect(result).toEqual(true);
	});
	
	it('isWeekend returns correct value when week starts on monday', () => {
		const result = isWeekend(0, true);
		
		expect(result).toEqual(false);
	});
	
	it('getPrev returns correct value for january of 2020', () => {
		const prev = getPrev(2020, 0);
		
		expect(prev).toEqual({ month: 11, year: 2019 });
	});
	
	it('getPrev returns correct value for may of 2021', () => {
		const prev = getPrev(2021, 4);
		
		expect(prev).toEqual({ month: 3, year: 2021 });
	});
	
	it('getNext returns correct value for december of 2020', () => {
		const next = getNext(2020, 11);
		
		expect(next).toEqual({ month: 0, year: 2021 });
	});
	
	it('getNext returns correct value for august of 2021', () => {
		const next = getNext(2021, 7);
		
		expect(next).toEqual({ month: 8, year: 2021 });
	});
	
	it('getStart returns correct first day of previous month', () => {
		const start = getStart({ month: 6, year: 2021 }, 6);
		
		expect(start).toEqual(26);
	});
	
	it('getEnd returns correct last day of next month', () => {
		const last = getEnd(1);
		
		expect(last).toEqual(5);
	});
	
	it('getMonthType returns past month', () => {
		const monthType = getMonthType(2021, 1, 2021, 2);
		
		expect(monthType).toEqual('prev');
	});
	
	it('getMonthType returns current month', () => {
		const monthType = getMonthType(2021, 2, 2021, 2);
		
		expect(monthType).toEqual('current');
	});
	
	it('getMonthType returns next month', () => {
		const monthType = getMonthType(2021, 3, 2021, 2);
		
		expect(monthType).toEqual('next');
	});
	
	it('getIsSelected returns false without selected day', () => {
		const isSelected = getIsSelected(2021, 4, 1, null);
		
		expect(isSelected).toEqual(false);
	});
	
	it('getIsSelected returns true when selected day provided', () => {
		const isSelected = getIsSelected(2021, 4, 1, firstOfMay2021);
		
		expect(isSelected).toEqual(true);
	});
});

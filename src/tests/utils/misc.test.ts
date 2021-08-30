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
		
		expect(getYearAndMonth(date)).toEqual({ month: 2, year: 1990 });
	});
	
	it('isToday returns true if it is current day', () => {
		const today = new Date(Date.now());
		const result = isToday(today.getFullYear(), today.getMonth(), today.getDate());
		
		expect(result).toEqual(true);
	});
	
	it('isToday returns false if it`s not today', () => {
		expect(isToday(1990, 2, 6)).toEqual(false);
	});
	
	it('getWeekday returns correct weekday if week starts on monday', () => {
		const weekday = getWeekday({
			requested: {
				year: 2021,
				month: 2,
			},
			day: 6,
			firstDayIsMonday: true,
		});
		
		expect(weekday).toEqual(5);
	});
	
	it('getWeekday returns correct weekday if week starts on sunday', () => {
		const weekday = getWeekday({
			requested: {
				year: 2021,
				month: 2,
			},
			day: 6,
			firstDayIsMonday: false
		});
		
		expect(weekday).toEqual(6);
	});
	
	it('isWeekend returns correct value when week starts on sunday', () => {
		expect(isWeekend(0, false)).toEqual(true);
	});
	
	it('isWeekend returns correct value when week starts on monday', () => {
		expect(isWeekend(0, true)).toEqual(false);
	});
	
	it('getPrev returns correct value for january of 2020', () => {
		expect(
			getPrev({ year: 2020, month: 0 })
		).toEqual({ month: 11, year: 2019 });
	});
	
	it('getPrev returns correct value for may of 2021', () => {
		expect(
			getPrev({ year: 2021, month: 4 })
		).toEqual({ month: 3, year: 2021 });
	});
	
	it('getNext returns correct value for december of 2020', () => {
		expect(
			getNext({ year: 2020, month: 11 })
		).toEqual({ month: 0, year: 2021 });
	});
	
	it('getNext returns correct value for august of 2021', () => {
		expect(
			getNext({ year: 2021, month: 7 })
		).toEqual({ month: 8, year: 2021 });
	});
	
	it('getStart returns correct first day of previous month', () => {
		expect(getStart({ month: 6, year: 2021 }, 6)).toEqual(26);
	});
	
	it('getEnd returns correct last day of next month', () => {
		expect(getEnd(1)).toEqual(5);
	});
	
	it('getMonthType returns past month', () => {
		expect(
			getMonthType({
				requested: { year: 2021, month: 1 },
				active: { year: 2021, month: 2 }
			})
		).toEqual('prev');
	});
	
	it('getMonthType returns current month', () => {
		expect(
			getMonthType({
				requested: { year: 2021, month: 2 },
				active: { year: 2021, month: 2 }
			})
		).toEqual('current');
	});
	
	it('getMonthType returns next month', () => {
		expect(
			getMonthType({
				requested: { year: 2021, month: 3 },
				active: { year: 2021, month: 2}
			})
		).toEqual('next');
	});
	
	it('getIsSelected returns false without selected day', () => {
		expect(
			getIsSelected({ year: 2021, month: 4 }, 1, null)
		).toEqual(false);
	});
	
	it('getIsSelected returns true when selected day provided', () => {
		const testDate = new Date(2021, 4, 1);
		
		expect(
			getIsSelected({ year: 2021, month: 4 }, 1, testDate)
		).toEqual(true);
	});
});

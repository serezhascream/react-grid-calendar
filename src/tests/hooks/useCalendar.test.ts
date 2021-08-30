const { renderHook, act, cleanup  } = require('@testing-library/react-hooks');

import useCalendar from '../../lib/hooks/useCalendar';

describe('hooks > useCalendar', () => {
	afterEach(cleanup);
	const today = new Date(Date.now());
	const defaultOptions = {
		selected: null,
		markers: [],
		firstDayIsMonday: true
	};
	
	it('returns actual month and year as active', () => {
		const { result } = renderHook(() => useCalendar(defaultOptions));
		const expected = { month: today.getMonth(), year: today.getFullYear()}
		
		expect(result.current.active).toEqual(expected);
	});
	
	it('has calendar data', () => {
		const { result } = renderHook(() => useCalendar(defaultOptions));
		
		expect(result.current.data.length > 0).toEqual(true);
	});
	
	
	it('setActive method works', () => {
		const { result } = renderHook(() => useCalendar(defaultOptions));
		const newActive = { month: 2, year: 2021 };
		
		act(() => {
			result.current.setActive({ month: 2, year: 2021 });
		});
	
		expect(result.current.active).toEqual(newActive);
	});
	
	it('switchMonth method works', () => {
		const { result } = renderHook(() => useCalendar(defaultOptions));
		const newActive = { month: 2, year: 2021 };
		
		act(() => result.current.setActive(newActive));
		expect(result.current.active.month).toEqual(2);
		
		act(() => result.current.switchMonth('prev'));
		expect(result.current.active.month).toEqual(1);
		
		act(() => result.current.switchMonth('next'));
		expect(result.current.active.month).toEqual(2);
	});
});

const { renderHook, act, cleanup  } = require('@testing-library/react-hooks');

import useCalendar from '../../lib/hooks/useCalendar';
import { TDayObject } from '../../lib/types';

describe('hooks > useCalendar', () => {
	afterEach(cleanup);
	const today = new Date(Date.now());
	
	it('returns actual month and year as active', () => {
		const { result } = renderHook(() => useCalendar(null, [], true));
		const expected = { month: today.getMonth(), year: today.getFullYear()}
		
		expect(result.current.active).toEqual(expected);
	});
	
	it('has calendar data', () => {
		const { result } = renderHook(() => useCalendar(null, [], true));
		
		expect(result.current.data.length > 0).toEqual(true);
	});
	
	
	it('setActive method works', () => {
		const { result } = renderHook(() => useCalendar(null, [], true));
		const newActive = { month: 2, year: 2021 };
		
		act(() => {
			result.current.setActive({ month: 2, year: 2021 });
		});
	
		expect(result.current.active).toEqual(newActive);
	});

	it('setSelected method works', () => {
		const { result } = renderHook(() => useCalendar(null, [], true));
		const testDate = new Date(2021, 2, 6);
		
		const testDay:TDayObject = {
			day: 6,
			month: 'current',
			timestamp: testDate.getTime(),
			weekday: 5,
			isToday: false,
			isWeekend: true,
			isSelected: true,
			hasMarker: false,
		};
		
		act(() => {
			result.current.setActive({ month: 2, year: 2021 });
			result.current.setSelected(testDay);
		});
			
		const selectedDay = result.current.data.find((day: TDayObject) => day.isSelected === true);
		
		expect(selectedDay).toBeTruthy();
		expect(selectedDay).toEqual(testDay);
	});
	
	it('switchMonth method works', () => {
		const { result } = renderHook(() => useCalendar(null, [], true));
		const newActive = { month: 2, year: 2021 };
		
		act(() => result.current.setActive(newActive));
		expect(result.current.active.month).toEqual(2);
		
		act(() => result.current.switchMonth('prev'));
		expect(result.current.active.month).toEqual(1);
		
		act(() => result.current.switchMonth('next'));
		expect(result.current.active.month).toEqual(2);
	});
});

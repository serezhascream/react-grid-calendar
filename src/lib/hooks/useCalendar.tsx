import * as React from 'react';

import { getYearAndMonth, getPrev, getNext, getCalendarData } from '../utils';
import { TYearAndMonth, TCalendarData, TSwitchDirection } from '../types';

interface TUseCalendarOptions {
	selected: Date | null,
	markers: number[],
	firstDayIsMonday: boolean;
}

interface HookReturn {
	active: TYearAndMonth;
	data: TCalendarData;
	setActive(active: TYearAndMonth): void;
	switchMonth: TSwitchDirection;
}

export const useCalendar = (options: TUseCalendarOptions): HookReturn => {
	const { selected = null, markers, firstDayIsMonday } = options;
	const activeYearMonth = getYearAndMonth(selected);
	const [active, setActive] = React.useState<TYearAndMonth>(activeYearMonth);
	
	const data = React.useMemo(
		(): TCalendarData => getCalendarData({ active, selected, markers, firstDayIsMonday }),
		[active, selected, firstDayIsMonday]
	);
	
	const handlerSetActive = React.useCallback(
		(active: TYearAndMonth): void => setActive(active), [setActive]
	);
	
	const handlerSwitchMonth = React.useCallback((direction: string): void => {
		if (direction === 'prev') {
			setActive(getPrev(active));
			
			return;
		}
		
		if (direction === 'next') {
			setActive(getNext(active));
			
			return;
		}
	}, [active]);
	
	return {
		active,
		data,
		
		setActive: handlerSetActive,
		switchMonth: handlerSwitchMonth,
	};
};

export default useCalendar;

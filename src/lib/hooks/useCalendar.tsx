import * as React from 'react';

import { getYearAndMonth, getPrev, getNext, getCalendarData } from '../utils';
import { TSelectedDay, TYearAndMonth, TCalendarData, TSwitchDirection } from '../types';

interface TUseCalendarOptions {
	selectedDay: TSelectedDay,
	markers: number[],
	firstDayIsMonday: boolean;
};

interface HookReturn {
	active: TYearAndMonth;
	data: TCalendarData;
	setActive(active: TYearAndMonth): void;
	switchMonth: TSwitchDirection;
	setSelected(day:TSelectedDay): void;
};

export const useCalendar = (options: TUseCalendarOptions): HookReturn => {
	const { selectedDay, markers, firstDayIsMonday } = options;
	const activeYearMonth = getYearAndMonth();
	const [active, setActive] = React.useState<TYearAndMonth>(activeYearMonth);
	const [selected, setSelected] = React.useState<TSelectedDay>(selectedDay);
	
	const data = React.useMemo(
		(): TCalendarData => getCalendarData({ active, selected, markers, firstDayIsMonday }),
		[active, selected, firstDayIsMonday]
	);
	
	const handlerSetSelected = React.useCallback(
		(day: TSelectedDay): void => setSelected(day), [setSelected]
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
		setSelected: handlerSetSelected,
		switchMonth: handlerSwitchMonth,
	};
};

export default useCalendar;

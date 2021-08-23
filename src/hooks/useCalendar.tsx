import * as React from 'react';

import {
	getYearAndMonth,
	getPrev,
	getNext,
	getCalendarData
} from 'utils';

import {
	TSelectedDay,
	TYearAndMonth,
	TUseCalendarReturn,
	TCalendarData
} from 'types';

export const useCalendar = (
	selectedDay: TSelectedDay = null,
	markers: number[],
	firstDayIsMonday = true): TUseCalendarReturn => {
	const activeYearMonth = getYearAndMonth();
	const [active, setActive] = React.useState(activeYearMonth);
	const [selected, setSelected] = React.useState(selectedDay);
	
	const data = React.useMemo(
		(): TCalendarData => getCalendarData(active, selected, markers, firstDayIsMonday),
		[active, selected, firstDayIsMonday]
	);
	
	const handlerSetSelected = React.useCallback(
		(day: TSelectedDay): void => setSelected(day),
		[setSelected]
	);
	
	const handlerSetActive = React.useCallback(
		(active: TYearAndMonth): void => setActive(active),
		[setActive]
	);
	
	const handlerSwitchMonth = React.useCallback((direction: string): void => {
		const { year, month } = active;
		
		if (direction === 'prev') {
			const newActive = getPrev(year,month);
			
			setActive(newActive);
			return;
		}
		
		if (direction === 'next') {
			const newActive = getNext(year,month);
			
			setActive(newActive);
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

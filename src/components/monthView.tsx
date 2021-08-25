import * as React from 'react';

import { TMonthViewProps, TDayObject } from '../types';
import { testIds } from '../data/tests';
import WeekdayTitles from './weekdayTitles';
import Day from './day';

const MonthView = ({
	data = [],
	activeView,
	firstDayIsMonday,
	onClick,
}: TMonthViewProps) => {
	const handlerClick = React.useCallback((day: TDayObject) => onClick(day), [onClick]);
	
	if (activeView !== 'month') {
		return null;
	}
	
	return (
		<React.Fragment>
			<WeekdayTitles firstDayIsMonday={firstDayIsMonday} />
			<div className="rgc-calendar__month" data-testid={testIds.monthView}>
				{
					data.map(day => (
						<Day key={day.timestamp} day={day} onClick={handlerClick} />
					))
				}
			</div>
		</React.Fragment>
	);
};

export default React.memo(MonthView);

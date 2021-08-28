import * as React from 'react';

import { TCalendarData, TDayObject, TDaySelectFunc } from '../types';

import { testIds } from '../data/tests';
import WeekdayTitles from './weekdayTitles';
import Day from './day';

interface Props {
	data: TCalendarData;
	activeView: string | null;
	firstDayIsMonday: boolean;
	weekdayTitles: string[];
	onClick: TDaySelectFunc;
}

const MonthView: React.VFC<Props> = props => {
	const { data, activeView, firstDayIsMonday, weekdayTitles, onClick } = props;

	const handlerClick = React.useCallback((day: TDayObject) => onClick(day), [onClick]);
	
	if (activeView !== 'month') {
		return null;
	}
	
	return (
		<React.Fragment>
			<WeekdayTitles weekdayTitles={weekdayTitles} firstDayIsMonday={firstDayIsMonday} />
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

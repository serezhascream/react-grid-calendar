import * as React from 'react';

import { testIds } from '../data/tests';
import { getClasses  } from '../utils/classes';

interface Props {
	weekdayTitles: string[];
	firstDayIsMonday: boolean;
	classPrefix?: string | string[] | null;
}

const WeekdayTitles: React.VFC<Props> = props => {
	const { weekdayTitles, firstDayIsMonday, classPrefix = null } = props;
	const CWeekdayTitles = getClasses(['calendar__weekday-titles'], classPrefix);
	
	const weekend_days = React.useMemo(
		() => (firstDayIsMonday ? [5, 6] : [0, 6]),
		[firstDayIsMonday]
	);
	
	return (
		
		<div className={CWeekdayTitles} data-testid={testIds.weekdayTitles}>
			{
				weekdayTitles.map((day: string, i: number) => {
					const classes = [ 'calendar__weekday-day'];
					if (weekend_days.includes(i)) {
						classes.push('calendar__weekday-day--weekend');
					}
					const CWeekday = getClasses(classes, classPrefix);
					
					return (
						<span key={day} className={CWeekday}>{day}</span>
					);
				})
			}
		</div>
	);
};

export default React.memo(WeekdayTitles);

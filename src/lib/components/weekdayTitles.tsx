import * as React from 'react';
import classNames from 'classnames';

import { WEEKDAY_TITLES } from '../data/constants';
import { testIds } from '../data/tests';

const WeekdayTitles = ({ firstDayIsMonday }: { firstDayIsMonday: boolean }) => {
	const titles = React.useMemo(() => {
		if (firstDayIsMonday) {
			return WEEKDAY_TITLES;
		}

		return ['sun', ...WEEKDAY_TITLES.slice(0, -1)];
	}, [firstDayIsMonday]);

	const weekend_days = React.useMemo(
		() => (firstDayIsMonday ? [5, 6] : [0, 6]),
		[firstDayIsMonday]
	);
	
	return (
		
		<div className="rgc-calendar__weekday-titles" data-testid={testIds.weekdayTitles}>
			{
				titles.map((day: string, i: number) => {
					const classes = classNames(
						'rgc-calendar__weekday-day',
						{ 'rgc-calendar__weekday-day--weekend': weekend_days.includes(i) }
					);
					
					return (
						<span key={day} className={classes}>{day}</span>
					);
				})
			}
		</div>
	);
};

export default React.memo(WeekdayTitles);

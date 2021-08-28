import * as React from 'react';
import classNames from 'classnames';

import { testIds } from '../data/tests';

interface Props {
	weekdayTitles: string[];
	firstDayIsMonday: boolean;
}

const WeekdayTitles: React.VFC<Props> = props => {
	const { weekdayTitles, firstDayIsMonday } = props;
	
	const weekend_days = React.useMemo(
		() => (firstDayIsMonday ? [5, 6] : [0, 6]),
		[firstDayIsMonday]
	);
	
	return (
		
		<div className="rgc-calendar__weekday-titles" data-testid={testIds.weekdayTitles}>
			{
				weekdayTitles.map((day: string, i: number) => {
					const classes = classNames(
						'rgc-calendar__weekday-day',
						{'rgc-calendar__weekday-day--weekend': weekend_days.includes(i)}
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

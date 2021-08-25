import * as React from 'react';
import classNames from 'classnames';

import { TDayProps } from '../types';
import { testIds } from '../data/tests';

const Day = ({ day, onClick }: TDayProps) => {
	const classes = React.useMemo(
		() => classNames(
			'rgc-calendar__day',
			{
				'rgc-calendar__day--today': day.isToday,
				[`rgc-calendar__day--${day.month}`]: day.month !== 'current',
				'rgc-calendar__day--weekend': day.isWeekend,
				'rgc-calendar__day--selected': day.isSelected,
				'rgc-calendar__day--has-marker': day.hasMarker,
			}
		),
		[day]
	);
	
	const handlerClick = React.useCallback(() => onClick(day), [onClick, day]);
	
	return (
		<span
			key={day.timestamp}
			className={classes}
			onClick={handlerClick}
			data-testid={testIds.day}
		>
			{day.day}
		</span>
	);
};

export default React.memo(Day);

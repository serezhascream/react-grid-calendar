import * as React from 'react';

import { TDayObject, TDaySelectFunc } from '../types';
import { testIds } from '../data/tests';
import { getDayClasses } from '../utils/classes';

interface Props {
	day: TDayObject;
	classPrefix?: string | string[] | null;
	onClick: TDaySelectFunc;
}

const Day: React.VFC<Props> = (props: Props) => {
	const { day, classPrefix = null, onClick } = props;
	const CDay = getDayClasses(day, classPrefix);
	
	const handlerClick = React.useCallback((): void => onClick(day), [onClick, day]);
	
	return (
		<span
			key={day.timestamp}
			className={CDay}
			onClick={handlerClick}
			data-testid={testIds.day}
		>
			{day.day}
		</span>
	);
};

export default React.memo(Day);

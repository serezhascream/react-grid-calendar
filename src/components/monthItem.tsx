import * as React from 'react';

import { TMonthItemProps } from 'types';
import { testIds } from 'data/tests';

const MonthItem = ({ title, index, onClick }: TMonthItemProps) => {
	const handlerClick = React.useCallback(() => onClick(index), [onClick, index]);
	
	return (
		<div
			className="rgc-calendar__year-month"
			data-testid={testIds.monthItem}
			onClick={handlerClick}
		>
			{title}
		</div>
	);
};


export default React.memo(MonthItem);

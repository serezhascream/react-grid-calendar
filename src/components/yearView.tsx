import * as React from 'react';

import { TYearViewProps } from 'types';
import { MONTHS_TITLES } from 'data/constants';
import { testIds } from 'data/tests';
import MonthItem from './monthItem';

const YearView = ({ onClick, activeView }: TYearViewProps) => {
	const handlerClick = React.useCallback(
		(index: number) => onClick(index),
		[onClick]
	);

	if (activeView !== 'year') {
		return null;
	}
	
	return (
		<div className="rgc-calendar__year" data-testid={testIds.yearView}>
			{
				MONTHS_TITLES.map((title, i) => (
					<MonthItem
						key={title}
						title={title}
						index={i}
						onClick={handlerClick}
					/>
				))
			}
		</div>
	);
};

export default React.memo(YearView);

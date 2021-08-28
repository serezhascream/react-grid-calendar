import * as React from 'react';

import { testIds } from '../data/tests';
import MonthItem from './monthItem';
import { getClasses } from '../utils/classes';

interface Props {
	activeView: string | null;
	monthTitles: string[];
	classPrefix?: string | string[] | null;
	onClick(index: number): void;
}

const YearView: React.VFC<Props> = props => {
	const { activeView, monthTitles, classPrefix = null, onClick } = props;
	const CYearView = getClasses(['calendar__year'], classPrefix);
	
	const handlerClick = React.useCallback(
		(index: number): void => onClick(index),
		[onClick]
	);

	if (activeView !== 'year') {
		return null;
	}
	
	return (
		<div className={CYearView} data-testid={testIds.yearView}>
			{
				monthTitles.map((title, i) => (
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

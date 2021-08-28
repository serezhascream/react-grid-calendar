import * as React from 'react';

import { testIds } from '../data/tests';
import MonthItem from './monthItem';

interface Props {
	activeView: string | null;
	monthTitles: string[];
	onClick(index: number): void;
}

const YearView: React.VFC<Props> = props => {
	const { activeView, monthTitles, onClick } = props;
	
	const handlerClick = React.useCallback(
		(index: number): void => onClick(index),
		[onClick]
	);

	if (activeView !== 'year') {
		return null;
	}
	
	return (
		<div className="rgc-calendar__year" data-testid={testIds.yearView}>
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

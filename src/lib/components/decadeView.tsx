import * as React from 'react';

import { TDecadeViewProps } from '../types';
import { testIds } from '../data/tests';
import YearItem from './yearItem';

const DecadeView = ({ decade, activeView, onClick, }: TDecadeViewProps) => {

	const handlerClick = React.useCallback(
		(year: number): void => onClick(year), [onClick]
	);

	if (activeView !== 'decade') {
		return null;
	}
	
	return (
		<div
			className="rgc-calendar__decade"
			data-testid={testIds.decadeView}
		>
			{
				decade.map((year: number) => (
					<YearItem key={year} year={year} onClick={handlerClick} />
				))
			}
		</div>
	);
};

export default React.memo(DecadeView);

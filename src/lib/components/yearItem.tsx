import * as React from 'react';

import { TYearItemProps } from '../types';
import { testIds } from '../data/tests';

const YearItem = ({ year, onClick } : TYearItemProps) => {
	const handlerClick = React.useCallback((): void => onClick(year), [onClick, year]);
	
	return (
		<div
			className="rgc-calendar__decade-year"
			data-testid={testIds.yearItem}
			onClick={handlerClick}
		>
			{year}
		</div>
	);
};

export default React.memo(YearItem);

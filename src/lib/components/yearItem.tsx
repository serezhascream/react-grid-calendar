import * as React from 'react';

import { testIds } from '../data/tests';
import { getClasses } from '../utils/classes';

interface Props {
	year: number;
	classPrefix?: string | string[] | null;
	onClick(year: number): void;
}

const YearItem: React.VFC<Props> = props => {
	const { year, classPrefix = null, onClick } = props;
	const CYearItem = getClasses(['calendar__decade-year'], classPrefix);
	
	const handlerClick = React.useCallback((): void => onClick(year), [onClick, year]);
	
	return (
		<div
			className={CYearItem}
			data-testid={testIds.yearItem}
			onClick={handlerClick}
		>
			{year}
		</div>
	);
};

export default React.memo(YearItem);

import * as React from 'react';

import { testIds } from '../data/tests';
import { getClasses } from '../utils/classes';

interface Props {
	year: number;
	isActive?: boolean;
	classPrefix?: string | string[] | null;
	onClick(year: number): void;
}

const YearItem: React.VFC<Props> = (props: Props) => {
	const { year, isActive = false, classPrefix = null, onClick } = props;
	const classes = ['calendar__decade-year'];

	if (isActive) {
		classes.push('calendar__decade-year--active');
	}
	
	const CYearItem = getClasses(classes, classPrefix);
	
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

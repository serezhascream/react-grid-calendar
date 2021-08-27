import * as React from 'react';

import { testIds } from '../data/tests';

interface Props {
	year: number;
	onClick(year: number): void;
}

const YearItem: React.VFC<Props> = props => {
	const { year, onClick } = props;
	
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

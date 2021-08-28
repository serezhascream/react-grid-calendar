import * as React from 'react';

import { testIds } from '../data/tests';
import { getClasses } from '../utils/classes';

interface Props {
	title: string;
	index: number;
	classPrefix?: string | string[] | null;
	onClick(index:number): void;
}

const MonthItem: React.VFC<Props> = props => {
	const { title, index, classPrefix = null, onClick } = props;
	const CMonthItem = getClasses(['rgc-calendar__year-month'], classPrefix);
	const handlerClick = React.useCallback((): void => onClick(index), [onClick, index]);
	
	return (
		<div
			className={CMonthItem}
			data-testid={testIds.monthItem}
			onClick={handlerClick}
		>
			{title}
		</div>
	);
};


export default React.memo(MonthItem);

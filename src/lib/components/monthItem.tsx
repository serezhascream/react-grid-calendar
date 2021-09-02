import * as React from 'react';

import { testIds } from '../data/tests';
import { getClasses } from '../utils/classes';

interface Props {
	title: string;
	index: number;
	classPrefix?: string | string[] | null;
	isActive?: boolean;
	onClick(index:number): void;
}

const MonthItem: React.VFC<Props> = (props: Props) => {
	const { title, index, classPrefix = null, isActive = false, onClick } = props;
	const classes = ['calendar__year-month'];
	
	if (isActive) {
		classes.push('calendar__year-month--active');
	}
	
	const CMonthItem = getClasses(classes, classPrefix);
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

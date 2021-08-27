import * as React from 'react';

import { testIds } from '../data/tests';

interface Props {
	title: string;
	index: number;
	onClick(index:number): void;
}

const MonthItem: React.VFC<Props> = props => {
	const { title, index, onClick } = props;
	const handlerClick = React.useCallback((): void => onClick(index), [onClick, index]);
	
	return (
		<div
			className="rgc-calendar__year-month"
			data-testid={testIds.monthItem}
			onClick={handlerClick}
		>
			{title}
		</div>
	);
};


export default React.memo(MonthItem);

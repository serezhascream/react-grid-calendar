import * as React from 'react';

import { testIds } from '../data/tests';
import { getClasses } from '../utils/classes';
import YearItem from './yearItem';

interface Props {
	decade: number[];
	activeView: string | null;
	activeYear?: number | null;
	classPrefix?: string | string[] | null;
	onClick(year: number): void;
}

const DecadeView: React.VFC<Props> = (props: Props) => {
	const {
		decade,
		activeView,
		activeYear = null,
		classPrefix = null,
		onClick
	} = props;
	const CDecadeView = getClasses(['calendar__decade'], classPrefix);

	const handlerClick = React.useCallback(
		(year: number): void => onClick(year), [onClick]
	);

	if (activeView !== 'decade') {
		return null;
	}
	
	return (
		<div
			className={CDecadeView}
			data-testid={testIds.decadeView}
		>
			{
				decade.map((year: number) => (
					<YearItem
						key={year}
						year={year}
						isActive={year === activeYear}
						classPrefix={classPrefix}
						onClick={handlerClick}
					/>
				))
			}
		</div>
	);
};

export default React.memo(DecadeView);

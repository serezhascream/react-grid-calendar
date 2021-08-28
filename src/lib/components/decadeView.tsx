import * as React from 'react';

import { testIds } from '../data/tests';
import YearItem from './yearItem';

interface Props {
	decade: number[]
	activeView: string | null,
	onClick(year: number): void,
}

const DecadeView: React.VFC<Props> = props => {
	const { decade, activeView, onClick } = props;

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

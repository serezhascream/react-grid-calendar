import * as React from 'react';

import { testIds } from '../../data/tests';
import { getClasses } from '../../utils/classes'

interface Props {
	title: string | number;
	view: 'month' | 'year';
	targetView: 'year' | 'decade';
	classPrefix: string | string[] | null;
	onClick: (view: string) => void;
};

const ViewButton: React.VFC<Props> = props => {
	const { title, view, targetView, classPrefix, onClick} = props;
	const testId = React.useMemo(
		() => (view === 'month' ? testIds.controlsMonthTitle : testIds.controlsYearTitle),
		[view]
	);
	const CViewButton = React.useMemo(
		() => getClasses([`calendar__controls-${view}`], classPrefix),
		[view, classPrefix]
	);
	const CYearBtn = getClasses(['calendar__controls-year'], classPrefix);
	
	const handlerClick = React.useCallback(
		() => onClick(targetView), [targetView, onClick]
	);
	
	return (
		<span
			className={CViewButton}
			data-testid={testId}
			onClick={handlerClick}
		>
			{ title }
		</span>
	);
};

export default React.memo(ViewButton);

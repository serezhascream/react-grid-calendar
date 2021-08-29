import * as React from 'react';

import { TSwitchDirection, TYearAndMonth } from '../../types';
import { testIds } from '../../data/tests';
import { getClasses, getArrowButtonClass } from '../../utils/classes'
import ArrowButton from './arrowButton';

interface Props {
	active: TYearAndMonth;
	activeView: string;
	monthTitles: string[];
	classPrefix?: string | string[] | null;
	onSwitchDirection: TSwitchDirection;
	onSwitchView(view: string): void;
};

const Controls: React.VFC<Props> = props => {
	const {
		active,
		activeView,
		monthTitles,
		classPrefix = null,
		onSwitchDirection,
		onSwitchView,
	} = props;
	
	const monthTitle = React.useMemo(
		() => (monthTitles[active.month]), [active, monthTitles]
	);
	const CControls = getClasses(['calendar__controls'], classPrefix);
	const CMonthBtn = getClasses(['calendar__controls-month'], classPrefix);
	const CYearBtn = getClasses(['calendar__controls-year'], classPrefix);

	const handlerSwitchDirection = React.useCallback(
		(direction: string): void => onSwitchDirection(direction), [onSwitchDirection]
	);
	
	const handlerClickOnMonth = React.useCallback(
		(): void => onSwitchView('year'), [onSwitchView]
	);

	const handlerClickOnYear = React.useCallback(
		(): void => onSwitchView('decade'), [onSwitchView]
	);
	
	return (
		<div className={CControls} data-testid={testIds.controls}>
			<ArrowButton
				direction="prev"
				activeView={activeView}
				classPrefix={classPrefix}
				onClick={handlerSwitchDirection}
			/>
			<span
				className={CMonthBtn}
				data-testid={testIds.controlsMonthTitle}
				onClick={handlerClickOnMonth}
			>
				{ monthTitle }
			</span>
			<span
				className={CYearBtn}
				data-testid={testIds.controlsYearTitle}
				onClick={handlerClickOnYear}
			>
				{active.year}
			</span>
			<ArrowButton
				direction="next"
				activeView={activeView}
				classPrefix={classPrefix}
				onClick={handlerSwitchDirection}
			/>
		</div>
	);
};

export default React.memo(Controls);

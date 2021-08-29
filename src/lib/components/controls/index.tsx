import * as React from 'react';

import { TSwitchDirection, TYearAndMonth } from '../../types';
import { testIds } from '../../data/tests';
import { getClasses, getArrowButtonClass } from '../../utils/classes'

interface Props {
	active: TYearAndMonth;
	activeView: string | null;
	monthTitles: string[];
	classPrefix?: string | string[] | null;
	onSwitchDirection: TSwitchDirection;
	onSwitchView(view: string): void;
}

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
	const CPrevBtn = React.useMemo(
		() => getArrowButtonClass('prev', classPrefix, activeView),
		[classPrefix, activeView]
	);
	const CNextBtn = React.useMemo(
		() => getArrowButtonClass('next', classPrefix, activeView),
		[classPrefix, activeView]
	);
	const CControls = getClasses(['calendar__controls'], classPrefix);
	const CMonthBtn = getClasses(['calendar__controls-month'], classPrefix);
	const CYearBtn = getClasses(['calendar__controls-year'], classPrefix);

	const handlerClickPrev = React.useCallback(
		(): void => onSwitchDirection('prev'), [onSwitchDirection]
	);

	const handlerClickNext = React.useCallback(
		(): void => onSwitchDirection('next'), [onSwitchDirection]
	);
	
	const handlerClickOnMonth = React.useCallback(
		(): void => onSwitchView('year'), [onSwitchView]
	);

	const handlerClickOnYear = React.useCallback(
		(): void => onSwitchView('decade'), [onSwitchView]
	);
	
	return (
		<div className={CControls} data-testid={testIds.controls}>
			<span
				className={CPrevBtn}
				data-testid={testIds.controlsPrevBtn}
				onClick={handlerClickPrev}
			>{'<'}</span>
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
			<span
				className={CNextBtn}
				data-testid={testIds.controlsNextBtn}
				onClick={handlerClickNext}
			>{'>'}</span>
		</div>
	);
};

export default React.memo(Controls);

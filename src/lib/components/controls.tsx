import * as React from 'react';
import classNames from 'classnames';

import { TSwitchDirection, TYearAndMonth } from '../types';
import { testIds } from '../data/tests';

interface Props {
	active: TYearAndMonth,
	activeView: string | null,
	monthTitles: string[],
	onSwitchDirection: TSwitchDirection,
	onSwitchView(view: string): void,
}

const Controls: React.VFC<Props> = props => {
	const {
		active,
		activeView,
		monthTitles,
		onSwitchDirection,
		onSwitchView,
	} = props;
	
	const monthTitle = React.useMemo(
		() => (monthTitles[active.month]), [active, monthTitles]
	);
	
	const blockedArrowsClass = React.useMemo(
		() => classNames({' rgc-calendar__btn--blocked': activeView === 'year'}),
		[activeView]
	);

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
		<div className="rgc-calendar__controls" data-testid={testIds.controls}>
			<span
				className={`rgc-calendar__btn rgc-calendar__btn-prev${blockedArrowsClass}`}
				data-testid={testIds.controlsPrevBtn}
				onClick={handlerClickPrev}
			>{'<'}</span>
			<span
				className="rgc-calendar__controls-month"
				data-testid={testIds.controlsMonthTitle}
				onClick={handlerClickOnMonth}
			>
				{ monthTitle }
			</span>
			<span
				className="rgc-calendar__controls-year"
				data-testid={testIds.controlsYearTitle}
				onClick={handlerClickOnYear}
			>
				{active.year}
			</span>
			<span
				className={`rgc-calendar__btn rgc-calendar__btn-next${blockedArrowsClass}`}
				data-testid={testIds.controlsNextBtn}
				onClick={handlerClickNext}
			>{'>'}</span>
		</div>
	);
};

export default React.memo(Controls);

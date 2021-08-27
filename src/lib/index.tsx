import * as React from 'react';
 
import { testIds } from './data/tests';
import useCalendar from './hooks/useCalendar';
import useDecade from './hooks/useDecade';

import Controls from './components/controls';
import MonthView from './components/monthView';
import YearView from './components/yearView';
import DecadeView from './components/decadeView';

import {
	TWeekdayTitles,
	TSelectedDay,
	TDayObject,
	TYearAndMonth
} from './types';

import { WEEKDAY_TITLES } from './data/constants';

import './styles/index.scss';

interface Props {
	firstDayIsMonday?: boolean;
	selected?: TSelectedDay;
	markers?: number[];
	weekdayTitles?: string[];
	onSelectDay?: (day: TDayObject) => void;
}

const Calendar: React.VFC<Props> = props => {
	const {
		firstDayIsMonday = true,
		selected = null,
		markers = [],
		weekdayTitles = WEEKDAY_TITLES,
		onSelectDay = () => {},
	} = props;
	
	const {
		data,
		active,
		setActive,
		switchMonth,
		setSelected,
	} = useCalendar(selected, markers, firstDayIsMonday);
	
	const [activeView, setActiveView] = React.useState<string | null>('month');
	const [current, setCurrent] = React.useState<TYearAndMonth>(active);
	const { decade, switchDecade } = useDecade(current.year);
	
	const handleSwitchDirection = React.useCallback((direction: string): void => {
		if (activeView === 'month') {
			switchMonth(direction);
		}

		if (activeView === 'decade') {
			switchDecade(direction);
		}
	}, [activeView, switchMonth, switchDecade]);

	const handlerSwitchView = React.useCallback((view: string): void => {
		setActiveView(view);
	}, []);
	
	const handlerSelectDay = React.useCallback((day: TDayObject): void => {
		if (day.month !== 'current') {
			switchMonth(day.month);
		}

		onSelectDay(day);
	}, [switchMonth, onSelectDay]);

	const handlerSelectMonth = React.useCallback((month: number): void => {
		const { year } = current;
		
		setCurrent({ year, month });
		setActive({ year, month });
		setActiveView('month');
	}, [current, setActive]);

	const handlerSelectYear = React.useCallback((year: number): void => {
		const { month } = current;

		setCurrent({ year, month });
		setActiveView('year');
	},[current, setActive]);

	React.useEffect(() => setCurrent(active), [active]);
	React.useEffect(() => setSelected(selected), [selected]);
	
	return (
		<div className="org-calendar" data-testid={testIds.calendar}>
			<Controls
				active={current}
				activeView={activeView}
				onSwitchDirection={handleSwitchDirection}
				onSwitchView={handlerSwitchView}
			/>
			<MonthView
				data={data}
				activeView={activeView}
				firstDayIsMonday={firstDayIsMonday}
				weekdayTitles={weekdayTitles as TWeekdayTitles}
				onClick={handlerSelectDay}
			/>
			<YearView
				activeView={activeView}
				onClick={handlerSelectMonth}
			/>
			<DecadeView
				decade={decade}
				activeView={activeView}
				onClick={handlerSelectYear}
			/>
		</div>
	);
};

export default React.memo(Calendar); 

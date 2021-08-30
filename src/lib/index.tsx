import * as React from 'react';
 
import { TDayObject, TYearAndMonth } from './types';
import { testIds } from './data/tests';
import useCalendar from './hooks/useCalendar';
import useDecade from './hooks/useDecade';
import { getLocalizedNames } from './utils/localization';
import { getClasses } from './utils/classes';

import Controls from './components/controls';
import MonthView from './components/monthView';
import YearView from './components/yearView';
import DecadeView from './components/decadeView';

import './styles/index.scss';

interface Props {
	firstDayIsMonday?: boolean;
	date?: Date | null;
	markers?: number[];
	locale?: string;
	classPrefix?: string | string[] | null;
	onSelectDay?: (day: Date| null) => void;
}

const Calendar: React.VFC<Props> = (props: Props) => {
	const {
		firstDayIsMonday = true,
		date = null,
		markers = [],
		locale = 'en-US',
		classPrefix = null,
		onSelectDay = () => {},
	} = props;

	const CMainComponent = getClasses(['calendar'], classPrefix);
	
	const [selected, setSelected] = React.useState(date);
	const calendar = useCalendar({ selected, markers, firstDayIsMonday });
	const { data, active, setActive, switchMonth } = calendar;
	const { weekdays, months } = getLocalizedNames({ locale, firstDayIsMonday });
	
	const [activeView, setActiveView] = React.useState<string>('month');
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

		setSelected(new Date(day.date));
		onSelectDay(new Date(day.date));
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
	
	return (
		<div className={CMainComponent} data-testid={testIds.calendar}>
			<Controls
				active={current}
				activeView={activeView}
				monthTitles={months}
				classPrefix={classPrefix}
				onSwitchDirection={handleSwitchDirection}
				onSwitchView={handlerSwitchView}
			/>
			<MonthView
				data={data}
				activeView={activeView}
				firstDayIsMonday={firstDayIsMonday}
				weekdayTitles={weekdays}
				classPrefix={classPrefix}
				onClick={handlerSelectDay}
			/>
			<YearView
				activeView={activeView}
				monthTitles={months}
				classPrefix={classPrefix}
				onClick={handlerSelectMonth}
			/>
			<DecadeView
				decade={decade}
				activeView={activeView}
				classPrefix={classPrefix}
				onClick={handlerSelectYear}
			/>
		</div>
	);
};

export default React.memo(Calendar); 

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import DecadeView from '../../lib/components/decadeView';
import YearView from '../../lib/components/yearView';
import MonthView from '../../lib/components/monthView';

import { nineties_decade, may2021 } from '../fixture';
import { testIds } from '../../lib/data/tests';
import { WEEKDAY_TITLES } from '../../lib/data/constants';
import { getCalendarData } from '../../lib/utils/index';

describe('components > DecadeView', () => {
	it('renders', () => {
		render(<DecadeView
			decade={nineties_decade}
			activeView="decade"
			onClick={() => {}}
		/>);
		
		expect(
			screen.getByTestId(testIds.decadeView)
		).toBeInTheDocument();
	});
});

describe('components > YearView', () => {
	it('renders', () => {
		render(<YearView
			activeView="year"
			onClick={() => {}}
		/>);
		
		expect(
			screen.getByTestId(testIds.yearView)
		).toBeInTheDocument();
	});
});

describe('components > MonthView', () => {
	it('renders', () => {
		const calendarData = getCalendarData(may2021, null, [], true);
		
		render(<MonthView
			data={calendarData}
			activeView="month"
			firstDayIsMonday={true}
			weekdayTitles={WEEKDAY_TITLES}
			onClick={() => {}}
		/>);
		
		expect(
			screen.getByTestId(testIds.monthView)
		).toBeInTheDocument();
	});
});

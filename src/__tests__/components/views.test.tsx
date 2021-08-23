import * as React from 'react';
import { render, screen } from '@testing-library/react';

import DecadeView from 'components/decadeView';
import YearView from 'components/yearView';
import MonthView from 'components/monthView';

import { nineties_decade, may2021 } from 'data/fixture';
import { testIds } from 'data/tests';
import { getCalendarData } from 'utils/index';

describe('components > calendar > DecadeView', () => {
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

describe('components > calendar > YearView', () => {
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

describe('components > calendar > MonthView', () => {
	it('renders', () => {
		const calendarData = getCalendarData(may2021, null, [], true);
		
		render(<MonthView
			data={calendarData}
			activeView="month"
			firstDayIsMonday={true}
			onClick={() => {}}
		/>);
		
		expect(
			screen.getByTestId(testIds.monthView)
		).toBeInTheDocument();
	});
});

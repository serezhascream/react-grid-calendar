import * as React from 'react';
import { render, screen } from '@testing-library/react';

import WeekdayTitles from '../../lib/components/weekdayTitles';
import { WEEKDAY_TITLES } from '../../lib/data/constants';
import { weekdayTitlesRus } from '../fixture';
import { testIds } from '../../lib/data/tests';
import { TWeekdayTitles } from '../../lib/types';

describe('components > WeekdayTitles', () => {
	it('renders', () => {
		render(
			<WeekdayTitles
				weekdayTitles={WEEKDAY_TITLES}
				firstDayIsMonday
			/>
		);

		const titles = screen.getByTestId(testIds.weekdayTitles);

		expect(titles).toBeInTheDocument();
	});
	
	it('renders correctly when week starts on monday', () => {
		render(
			<WeekdayTitles
				weekdayTitles={WEEKDAY_TITLES}
				firstDayIsMonday
			/>
		);

		const titles = screen.getByTestId(testIds.weekdayTitles);

		expect(titles.children[0].textContent).toEqual('mon');
	});
	
	it('renders correctly when week starts on sunday', () => {
		render(
			<WeekdayTitles
				weekdayTitles={WEEKDAY_TITLES}
				firstDayIsMonday={false}
			/>
		);


		const titles = screen.getByTestId(testIds.weekdayTitles);

		expect(titles.children[0].textContent).toEqual('sun');
	});
	it('renders correctly with provided weekday titles', () => {
		let weekdays = [];
		
		render(
			<WeekdayTitles
				weekdayTitles={weekdayTitlesRus as TWeekdayTitles}
				firstDayIsMonday
			/>
		);

		const titles = screen.getByTestId(testIds.weekdayTitles);
		
		for (let i = 0; i < titles.children.length; i++) {
			weekdays.push(titles.children[i].textContent);
		}
		
		expect(weekdays).toEqual(weekdayTitlesRus);
	});
});

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import WeekdayTitles from '../../lib/components/weekdayTitles';
import { getLocalizedNames } from '../../lib/utils/localization';
import { WEEKDAY_TITLES } from '../../lib/data/constants';
import { weekdayTitlesRus } from '../fixture';
import { testIds } from '../../lib/data/tests';

describe('components > WeekdayTitles', () => {
	const { weekdays: defaultWeekdayTitles } = getLocalizedNames({ locale: 'en-US', firstDayIsMonday: true });
	
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
				weekdayTitles={defaultWeekdayTitles}
				firstDayIsMonday
			/>
		);

		const titles = screen.getByTestId(testIds.weekdayTitles);

		expect(titles.children[0]).toHaveTextContent('Mon');
	});
	
	it('renders correctly when week starts on sunday', () => {
		const { weekdays } = getLocalizedNames({ locale: 'en-US', firstDayIsMonday: false });
		
		render(
			<WeekdayTitles
				weekdayTitles={weekdays}
				firstDayIsMonday={false}
			/>
		);


		const titles = screen.getByTestId(testIds.weekdayTitles);

		expect(titles.children[0]).toHaveTextContent('Sun');
	});
	it('renders correctly with russian locale', () => {
		const { weekdays } = getLocalizedNames({ locale: 'ru-RU', firstDayIsMonday: true });
		
		render(
			<WeekdayTitles
				weekdayTitles={weekdays}
				firstDayIsMonday
			/>
		);

		const titles = screen.getByTestId(testIds.weekdayTitles);
		
		expect(titles.children[0]).toHaveTextContent('Пн');
	});
});

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { feb2021 } from '../fixture';
import { testIds } from '../../lib/data/tests';
import Controls from '../../lib/components/controls';
import { getLocalizedNames } from '../../lib/utils/localization';

describe('components > Controls', () => {
	const { months: defaultMonthTitles } = getLocalizedNames({ locale: 'en-US', firstDayIsMonday: true });
	
	it('renders', () => {
		render(
			<Controls
				active={feb2021}
				activeView="month"
				monthTitles={defaultMonthTitles}
				onSwitchDirection={() => {}}
				onSwitchView={() => {}}
			/>
		);

		expect(screen.getByTestId(testIds.controls)).toBeInTheDocument();
	});
	
	it('has an arrow buttons', () => {
		render(
			<Controls
				active={feb2021}
				activeView="month"
				monthTitles={defaultMonthTitles}
				onSwitchDirection={() => {}}
				onSwitchView={() => {}}
			/>
		);

		expect(screen.getByTestId(testIds.controlsPrevBtn)).toBeInTheDocument();
		expect(screen.getByTestId(testIds.controlsNextBtn)).toBeInTheDocument();
	});
	
	it('has a month button', () => {
		render(
			<Controls
				active={feb2021}
				activeView="month"
				monthTitles={defaultMonthTitles}
				onSwitchDirection={() => {}}
				onSwitchView={() => {}}
			/>
		);

		expect(screen.getByTestId(testIds.controlsMonthTitle)).toBeInTheDocument();
	});
	
	it('has a year button', () => {
		render(
			<Controls
				active={feb2021}
				activeView="month"
				monthTitles={defaultMonthTitles}
				onSwitchDirection={() => {}}
				onSwitchView={() => {}}
			/>
		);

		expect(screen.getByTestId(testIds.controlsMonthTitle)).toBeInTheDocument();
	});
	
	it('month title has the correct text', () => {
		const { months } = getLocalizedNames({ locale: 'ru-RU', firstDayIsMonday: true });

		render(
			<Controls
				active={feb2021}
				activeView="month"
				monthTitles={months}
				onSwitchDirection={() => {}}
				onSwitchView={() => {}}
			/>
		);
		
		expect(
			screen.getByTestId(testIds.controlsMonthTitle)
		).toHaveTextContent('Февраль');
	});
});

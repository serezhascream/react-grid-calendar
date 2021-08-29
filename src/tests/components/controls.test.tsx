import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { feb2021 } from '../fixture';
import { testIds } from '../../lib/data/tests';
import Controls from '../../lib/components/controls';
import { getLocalizedNames } from '../../lib/utils/localization';

const {
	controls,
	controlsPrevBtn,
	controlsNextBtn,
	controlsYearTitle,
	controlsMonthTitle
} = testIds;

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

		expect(screen.getByTestId(controls)).toBeInTheDocument();
		expect(screen.getByTestId(controlsYearTitle)).toBeInTheDocument();
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

		expect(screen.getByTestId(controlsPrevBtn)).toBeInTheDocument();
		expect(screen.getByTestId(controlsNextBtn)).toBeInTheDocument();
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

		expect(screen.getByTestId(controlsMonthTitle)).toBeInTheDocument();
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

		expect(screen.getByTestId(controlsMonthTitle)).toBeInTheDocument();
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
			screen.getByTestId(controlsMonthTitle)
		).toHaveTextContent('Февраль');
	});
	it('click on month title works', () => {
		const handlerSwitchView = jest.fn(view => view);
		
		render(
			<Controls
				active={feb2021}
				activeView="month"
				monthTitles={defaultMonthTitles}
				onSwitchDirection={() => {}}
				onSwitchView={handlerSwitchView}
			/>
		);
		
		userEvent.click(screen.getByTestId(controlsMonthTitle));
		
		expect(handlerSwitchView).toHaveBeenCalledWith('year');
	});
	it('click on year title works', () => {
		const handlerSwitchView = jest.fn(view => view);
		
		render(
			<Controls
				active={feb2021}
				activeView="month"
				monthTitles={defaultMonthTitles}
				onSwitchDirection={() => {}}
				onSwitchView={handlerSwitchView}
			/>
		);
		
		userEvent.click(screen.getByTestId(controlsYearTitle));
		
		expect(handlerSwitchView).toHaveBeenCalledWith('decade');
	});
});

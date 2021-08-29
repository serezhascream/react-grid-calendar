import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { testIds } from '../../lib/data/tests';
import ViewButton from '../../lib/components/controls/viewButton';

describe('components > Controls > ViewButton', () => {
	it('renders', () => {
		render(
			<ViewButton
				title="July"
				view="month"
				targetView="year"
				classPrefix={null}
				onClick={() => {}}
			/>
		);

		expect(
			screen.getByTestId(testIds.controlsMonthTitle)
		).toBeInTheDocument();
	});

	it('renders as a year title when a provided view is year', () => {
		render(
			<ViewButton
				title={2021}
				view="year"
				targetView="decade"
				classPrefix={null}
				onClick={() => {}}
			/>
		);

		expect(
			screen.getByTestId(testIds.controlsYearTitle)
		).toBeInTheDocument();
	});
	
	it('has the provided title', () => {
		render(
			<ViewButton
				title="July"
				view="month"
				targetView="year"
				classPrefix={null}
				onClick={() => {}}
			/>
		);

		expect(
			screen.getByTestId(testIds.controlsMonthTitle)
		).toHaveTextContent('July');
	});

	it('has a correct class for month view', () => {
		render(
			<ViewButton
				title="July"
				view="month"
				targetView="year"
				classPrefix={null}
				onClick={() => {}}
			/>
		);

		expect(
			screen.getByTestId(testIds.controlsMonthTitle)
		).toHaveClass('rgc-calendar__controls-month');
	});

	it('has a correct class when classPrefix provided', () => {
		render(
			<ViewButton
				title={2021}
				view="year"
				targetView="decade"
				classPrefix="js"
				onClick={() => {}}
			/>
		);

		expect(
			screen.getByTestId(testIds.controlsYearTitle)
		).toHaveClass('js-calendar__controls-year');
	});
	
	it('returns a correct view name on click', () => {
		const targetView = 'year';
		const handlerClick = jest.fn(view => view);
		
		render(
			<ViewButton
				title="July"
				view="month"
				targetView={targetView}
				classPrefix={null}
				onClick={handlerClick}
			/>
		);

		userEvent.click(screen.getByTestId(testIds.controlsMonthTitle));

		expect(handlerClick).toHaveBeenCalledWith(targetView);
	});
});

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Calendar from '../../lib/index';
import { testIds } from '../../lib/data/tests';

describe('components > Calendar', () => {
	it('renders', () => {
		render(
			<Calendar
				firstDayIsMonday
				selected={null}
				onSelectDay={() => {}}
				markers={[]}
			/>
		);

		expect(
			screen.getByTestId(testIds.calendar)
		).toBeInTheDocument();
	});
	it.todo('contains selected day');
	it.todo('returns selected day');
});

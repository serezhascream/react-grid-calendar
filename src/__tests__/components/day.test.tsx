import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Day from '../../lib/components/day';
import { testIds } from '../../lib/data/tests';
import { firstOfMay2021 } from '../fixture';

describe('components > Day', () => {
	it('renders', () => {
		render(<Day day={firstOfMay2021} onClick={() => {}} />);
		const day = screen.getByTestId(testIds.day);

		expect(day).toBeInTheDocument();
	});

	it('returns day object on click', () => {
		const mockCallback = jest.fn((day) => day);
		render(<Day day={firstOfMay2021} onClick={mockCallback} />);

		userEvent.click(screen.getByTestId(testIds.day));

		expect(mockCallback).toHaveBeenCalledWith(firstOfMay2021);
	})
});

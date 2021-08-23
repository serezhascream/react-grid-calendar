import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import YearItem from 'components/yearItem';
import { testIds } from 'data/tests';

describe('components > calendar > YearItem', () => {
	it('renders', () => {
		render(<YearItem year={2019} onClick={() => {}} />);

		expect(
			screen.getByTestId(testIds.yearItem)
		).toBeInTheDocument();
	});
	it('returns a year on click', () => {
		const handlerClick = jest.fn(year => year);
		render(<YearItem year={2019} onClick={handlerClick} />);

		userEvent.click(screen.getByTestId(testIds.yearItem))

		expect(handlerClick).toHaveBeenCalledWith(2019);
	});
});

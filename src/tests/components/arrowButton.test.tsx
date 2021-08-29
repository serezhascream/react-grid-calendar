import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { testIds } from '../../lib/data/tests';
import ArrowButton from '../../lib/components/controls/arrowButton';

describe('components > Controls > ArrowButton', () => {
	it('renders', () => {
		render(
			<ArrowButton
				direction='prev'
				activeView="month"
				onClick={() => {}}
			/>
		);
		
		expect(
			screen.getByTestId(testIds.controlsPrevBtn)
		).toBeInTheDocument();
	});
	
	it('has a correct title', () => {
		render(
			<ArrowButton
				direction='prev'
				activeView="month"
				onClick={() => {}}
			/>
		);
		
		expect(
			screen.getByTestId(testIds.controlsPrevBtn)
		).toHaveTextContent('<');
	});
	
	it('has a correct class when direction is next', () => {
		render(
			<ArrowButton
				direction='next'
				activeView="month"
				onClick={() => {}}
			/>
		);
		
		expect(
			screen.getByTestId(testIds.controlsNextBtn)
		).toHaveClass('rgc-calendar__btn-next');
	});
	
	it('returns a provided direction on click', () => {
		const direction = 'next';
		const handlerClick = jest.fn(direction => direction);
		
		render(
			<ArrowButton
				direction={direction}
				activeView="month"
				onClick={handlerClick}
			/>
		);

		userEvent.click(screen.getByTestId(testIds.controlsNextBtn));

		expect(handlerClick).toHaveBeenCalledWith(direction);
	});
	
	it('has a class with the provided prefix', () => {
		render(
			<ArrowButton
				direction='prev'
				activeView="month"
				classPrefix="op"
				onClick={() => {}}
			/>
		);
		
		expect(
			screen.getByTestId(testIds.controlsPrevBtn)
		).toHaveClass('op-calendar__btn');
	});
	
	it('has --blocked class when activeView is year', () => {
		render(
			<ArrowButton
				direction='prev'
				activeView="year"
				onClick={() => {}}
			/>
		);
		
		expect(
			screen.getByTestId(testIds.controlsPrevBtn)
		).toHaveClass('rgc-calendar__btn--blocked');
	});
});

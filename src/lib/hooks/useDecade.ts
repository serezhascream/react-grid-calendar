import * as React from 'react';

import { TSwitchDirection } from '../types';

interface TReturn {
	decade: number[];
	switchDecade: TSwitchDirection;
};

export const getDecade = (year: number): number[] => {
	const decade = [];
	const firstYear = year - (year % 10);
	const lastYear = firstYear + 9;
	
	for (let i = firstYear; i <= lastYear; i++) {
		decade.push(i);
	}
	
	return decade;
};

export const useDecade = (currentYear: number): TReturn => {
	const [decade, setDecade] = React.useState<number[]>(() => getDecade(currentYear));
	
	const handlerSwitchDecade = React.useCallback((direction: string): void => {
		if (direction === 'prev') {
			setDecade(getDecade(decade[0] - 10));
			return;
		}
		
		setDecade(getDecade(decade[0] + 10));
	}, [decade]);
	
	return { decade, switchDecade: handlerSwitchDecade };
};

export default useDecade;

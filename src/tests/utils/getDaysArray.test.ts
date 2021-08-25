import { getDaysArray } from '../../lib/utils/';
import { firstOfMay2021, jan2021, feb2021, may2021 } from '../fixture';

describe('utils > getDaysArray', () => {
	
	it('returns an array with the default parameters', () => {
		const days = getDaysArray(feb2021, feb2021, null, []);
		
		expect(days.length).toBe(28);
	});
	
	it('returns the correct array when first day is sunday', () => {
		const days = getDaysArray(feb2021, feb2021, null, [], 1, null, false);
		
		expect(days[0].weekday).toBe(1);
	});
	
	it('sets monthType as next when active month is previous', () => {
		const days = getDaysArray(feb2021, jan2021, null, []);
		
		expect(days[0].month).toBe('next');
	});
	
	it('returns the correct array within range', () => {
		const days = getDaysArray(feb2021, feb2021, null, [], 8, 18);
		
		expect(days.length).toBe(11);
	});
	
	it('returns an array that contains a selected day', () => {
		const days = getDaysArray(may2021, may2021, firstOfMay2021, []);
		
		expect(days.find(day => day.isSelected)).toBeTruthy();
	});
});

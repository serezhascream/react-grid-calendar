import { getMarkedDays } from '../../lib/utils/getMarkedDays';
import { getDaysArray } from '../../lib/utils/';
import { jan2021, feb2021, may2021, markersMay } from '../fixture';

describe('utils > getDaysArray', () => {
	
	it('returns an array with the default parameters', () => {
		const days = getDaysArray({ requested: feb2021, active: feb2021 });
		
		expect(days.length).toBe(28);
	});
	
	it('returns the correct array when first day is sunday', () => {
		const days = getDaysArray({
			requested: feb2021,
			active: feb2021,
			firstDayIsMonday: false,
		});
		
		expect(days[0].weekday).toBe(1);
	});
	
	it('sets monthType as next when active month is previous', () => {
		const days = getDaysArray({ requested: feb2021, active: jan2021 });
		
		expect(days[0].month).toBe('next');
	});
	
	it('returns the correct array within range', () => {
		const days = getDaysArray({
			requested: feb2021,
			active: feb2021,
			start: 8,
			end: 18,
		});
		
		expect(days.length).toBe(11);
	});
	
	it('returns an array that contains a selected day', () => {
		const days = getDaysArray({
			requested: may2021,
			active: may2021,
			selected: new Date(2021, 4, 1),
		});
		
		expect(days.find(day => day.isSelected)).toBeTruthy();
	});
	
	it('returns an array that contains a maked day', () => {
		const markers = getMarkedDays(markersMay);
		
		const days = getDaysArray({
			requested: may2021,
			active: may2021,
			selected: new Date(2021, 4, 1),
			markers,
		});
		
		const markedDay = days.find(day => day.day === 19);
		
		expect(markedDay?.hasMarker).toBeTruthy();
	});
});

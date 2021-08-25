import { getCalendarData } from '../../lib/utils/';
import { may2021, firstOfMay2021 } from '../fixture';

describe('utils > getCalendarData', () => {
	it('returns correct data when week starts on monday', () => {
		const data = getCalendarData(may2021, null, [], true);
		
		expect(data.length).toEqual(42);
		expect(data[0].day).toEqual(26);
	});
	
	it('returned data contains selected day', () => {
		const data = getCalendarData(may2021, firstOfMay2021, [], true);
		
		expect(data.find(day => day.isSelected)).toBeTruthy();
	});
	
	it('returns correct data when week starts on sunday', () => {
		const data = getCalendarData(may2021, null, [], false);
		
		expect(data[0].day).toEqual(25);
	});
});

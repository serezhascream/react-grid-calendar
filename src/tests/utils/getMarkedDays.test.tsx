import { getMarkedDays } from '../../lib/utils/getMarkedDays';
import { markersMay, markersMayWithDupes } from '../fixture';

const stamps = markersMay.map(marker => marker.getTime());

describe('utils > getMarkedDays', () => {
	it('getMarkedDays returns an array of dates', () => {
		const days = getMarkedDays(markersMay);

		expect(days).toEqual(stamps);
	});
	it('getMarkedDays returns a unique values', () => {
		const days = getMarkedDays(markersMayWithDupes);
		
		expect(days).toEqual(stamps);
	});
});

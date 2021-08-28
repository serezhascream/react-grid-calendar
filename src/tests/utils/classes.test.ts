import { getClasses, getPrefixes } from '../../lib/utils/classes';

const testClasses = ['apple', 'pineaple', 'pen'];
const testPrefix = 'extra';
const testPrefixes = ['super', 'hyper'];

const expectedDefault = 'rgc-apple rgc-pineaple rgc-pen';
const expectedExtra = 'extra-apple extra-pineaple extra-pen';
const expectedSuper = 'super-apple super-pineaple super-pen';
const expectedHyper = 'hyper-apple hyper-pineaple hyper-pen';

describe('utils > classes', () => {
	it('getClasses returns correct string without provided prefix', () => {
		expect(getClasses(testClasses, null)).toEqual(expectedDefault);
	});
	
	it('getClasses returns correct string for provided prefix string', () => {
		expect(
			getClasses(testClasses, testPrefix)
		).toEqual(`${expectedDefault} ${expectedExtra}`);
	});
	
	it('getClasses returns correct string for provided array of prefixes', () => {
		expect(
			getClasses(testClasses, testPrefixes)
		).toEqual(`${expectedDefault} ${expectedSuper} ${expectedHyper}`);
	});
	
	it('getPrefixes returns correct string without provided prefix', () => {
		expect(getPrefixes(null)).toEqual(['rgc']);
	});
	
	it('getPrefixes returns correct string for provided prefix string', () => {
		expect(getPrefixes(testPrefix)).toEqual(['rgc', testPrefix]);
	});
	
	it('getPrefixes returns correct string for provided array of prefixes', () => {
		expect(getPrefixes(testPrefixes)).toEqual(['rgc', ...testPrefixes]);
	});
});

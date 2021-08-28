import {
	getClasses,
	getPrefixes,
	getArrowButtonClass,
} from '../../lib/utils/classes';

const testClasses = ['apple', 'pineaple', 'pen'];
const testPrefix = 'extra';
const testPrefixes = ['super', 'hyper'];

const expectedDefault = 'rgc-apple rgc-pineaple rgc-pen';
const expectedExtra = 'extra-apple extra-pineaple extra-pen';
const expectedSuper = 'super-apple super-pineaple super-pen';
const expectedHyper = 'hyper-apple hyper-pineaple hyper-pen';
const EDefaultArrowNext = 'rgc-calendar__btn rgc-calendar__btn-next';
const EPrefixArrowNext = 'ultra-calendar__btn ultra-calendar__btn-next';
		

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
	it('getArrowButtonClass for next button', () => {
		expect(
			getArrowButtonClass('next', null, 'month')
		).toEqual('rgc-calendar__btn rgc-calendar__btn-next');
	});
	it('getArrowButtonClass for with prefix', () => {
		const EDefaultArrowNext = 'rgc-calendar__btn rgc-calendar__btn-next';
		const EPrefixArrowNext = 'ultra-calendar__btn ultra-calendar__btn-next';
		
		expect(
			getArrowButtonClass('next', 'ultra', 'month')
		).toEqual(EDefaultArrowNext + ' ' + EPrefixArrowNext);
	});
	
	it('getArrowButtonClass for blocked button', () => {
		expect(
			getArrowButtonClass('next', null, 'year')
		).toEqual(EDefaultArrowNext + ' rgc-calendar__btn--blocked');
	});
});

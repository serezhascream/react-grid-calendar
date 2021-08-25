import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import { getDecade, useDecade } from '../../lib/hooks/useDecade';
import { eighties_decade, seventies_decade } from '../fixture';

describe('hooks > useDecade', () => {
	afterEach(cleanup);
	
	it('getDecade function returns correct decade for 1984', () => {
		const decade = getDecade(1984);
		
		expect(decade).toEqual(eighties_decade);
	});
	
	it('hook returns correct decade for 1984', () => {
		const { result } = renderHook(() => useDecade(1984));
		
		expect(result.current.decade).toEqual(eighties_decade);
	});
	
	it.todo('hook switches decade to 90s');
	
	it('hook switches decade to 70s', () => {
		const { result } = renderHook(() => useDecade(1984));
		
		act(() => result.current.switchDecade('prev'));
		
		expect(result.current.decade).toEqual(seventies_decade);
	});
});

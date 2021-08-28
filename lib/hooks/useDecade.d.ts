import { TSwitchDirection } from '../types';
interface TReturn {
    decade: number[];
    switchDecade: TSwitchDirection;
}
export declare const getDecade: (year: number) => number[];
export declare const useDecade: (currentYear: number) => TReturn;
export default useDecade;

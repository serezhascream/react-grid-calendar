import { TYearAndMonth, TCalendarData, TSwitchDirection } from '../types';
interface TUseCalendarOptions {
    selected: Date | null;
    markers: number[];
    firstDayIsMonday: boolean;
}
interface HookReturn {
    active: TYearAndMonth;
    data: TCalendarData;
    setActive(active: TYearAndMonth): void;
    switchMonth: TSwitchDirection;
}
export declare const useCalendar: (options: TUseCalendarOptions) => HookReturn;
export default useCalendar;

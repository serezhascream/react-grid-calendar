import { TSelectedDay, TYearAndMonth, TCalendarData, TSwitchDirection } from '../types';
interface TUseCalendarOptions {
    selectedDay: TSelectedDay;
    markers: number[];
    firstDayIsMonday: boolean;
}
interface HookReturn {
    active: TYearAndMonth;
    data: TCalendarData;
    setActive(active: TYearAndMonth): void;
    switchMonth: TSwitchDirection;
    setSelected(day: TSelectedDay): void;
}
export declare const useCalendar: (options: TUseCalendarOptions) => HookReturn;
export default useCalendar;

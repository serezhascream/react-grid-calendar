import { TYearAndMonth, TSelectedDay } from './index';
export interface TGetDaysArrayOptions {
    requested: TYearAndMonth;
    active: TYearAndMonth;
    selected?: TSelectedDay;
    markers?: number[];
    start?: number;
    end?: number | null;
    firstDayIsMonday?: boolean;
}
export interface TGetCalendarDataOpts {
    active: TYearAndMonth;
    selected?: TSelectedDay;
    markers?: number[];
    firstDayIsMonday?: boolean;
}
export interface TGetWeekdaysOptions {
    requested: TYearAndMonth;
    firstDayIsMonday: boolean;
}
export interface TGetWeekdayOptions {
    requested: TYearAndMonth;
    day: number;
    firstDayIsMonday: boolean;
}
export interface TGetMonthTypeOptions {
    requested: TYearAndMonth;
    active: TYearAndMonth;
}

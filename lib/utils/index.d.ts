import { TYearAndMonth, TDayObject, TCalendarData, TMonthType } from '../types';
import { TGetDaysArrayOptions, TGetCalendarDataOpts, TGetWeekdaysOptions, TGetWeekdayOptions, TGetMonthTypeOptions } from '../types/utils';
export declare const getYearAndMonth: (initialDate?: Date | null) => TYearAndMonth;
export declare const isToday: (year: number, month: number, day: number) => boolean;
export declare const getWeekday: (options: TGetWeekdayOptions) => number;
export declare const isWeekend: (weekday: number, firstDayIsMonday: boolean) => boolean;
export declare const getPrev: ({ year, month }: TYearAndMonth) => TYearAndMonth;
export declare const getNext: ({ year, month }: TYearAndMonth) => TYearAndMonth;
export declare const getNumOfDaysInMonth: (year: number, month: number) => number;
export declare const getStart: ({ year, month }: TYearAndMonth, firstWeekday: number) => number;
export declare const getEnd: (lastWeekday: number) => number;
export declare const getMonthType: (options: TGetMonthTypeOptions) => TMonthType;
export declare const getIsSelected: ({ year, month }: TYearAndMonth, day: number, selected: Date | null) => boolean;
export declare const getDaysArray: (options: TGetDaysArrayOptions) => TDayObject[];
export declare const getWeekdays: (options: TGetWeekdaysOptions) => {
    first: number;
    last: number;
};
export declare const getCalendarData: (options: TGetCalendarDataOpts) => TCalendarData;

export declare type TMonthType = "prev" | "current" | "next";
export interface TDayObject {
    day: number;
    month: TMonthType;
    isToday: boolean;
    timestamp: number;
    weekday: number;
    isWeekend: boolean;
    isSelected: boolean;
    hasMarker: boolean;
}
export declare type TSelectedDay = TDayObject | null;
export declare type TCalendarData = TDayObject[];
export declare type TDaySelectFunc = (day: TDayObject) => void;
export declare type TSwitchDirection = (direction: string) => void;
export interface TYearAndMonth {
    year: number;
    month: number;
}
export interface TUseCalendarOptions {
    selectedDay: TSelectedDay;
    markers: number[];
    firstDayIsMonday: boolean;
}

export declare type TMonthType = "prev" | "current" | "next";
export interface TDayObject {
    day: number;
    date: Date;
    month: TMonthType;
    isToday: boolean;
    timestamp: number;
    weekday: number;
    isWeekend: boolean;
    isSelected: boolean;
    hasMarker: boolean;
}
export declare type TCalendarData = TDayObject[];
export declare type TDaySelectFunc = (day: TDayObject) => void;
export declare type TSwitchDirection = (direction: string) => void;
export declare type TConditionalObj = {
    [key: string]: boolean;
};
export interface TYearAndMonth {
    year: number;
    month: number;
}
export interface TUseCalendarOptions {
    selectedDay: Date | null;
    markers: number[];
    firstDayIsMonday: boolean;
}

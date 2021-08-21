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
export declare type TUseCalendarReturn = {
    active: TYearAndMonth;
    data: TCalendarData;
    setActive(active: TYearAndMonth): void;
    switchMonth: TSwitchDirection;
    setSelected(day: TDayObject): void;
};
export declare type TUseDecadeReturn = {
    decade: number[];
    switchDecade: TSwitchDirection;
};
export interface TCalendarProps {
    firstDayIsMonday: boolean;
    selected: TDayObject;
    markers: number[];
    onSelectDay(day: TDayObject): void;
}
export interface TDayProps {
    day: TDayObject;
    onClick: TDaySelectFunc;
}
export interface TMonthItemProps {
    title: string;
    index: number;
    onClick(index: number): void;
}
export interface TMonthViewProps {
    data: TCalendarData;
    activeView: string;
    firstDayIsMonday: boolean;
    onClick: TDaySelectFunc;
}
export interface TDecadeViewProps {
    decade: number[];
    activeView: string;
    onClick(year: number): void;
}
export interface TYearItemProps {
    year: number;
    onClick(year: number): void;
}
export interface TYearViewProps {
    onClick(index: number): void;
    activeView: string;
}
export interface TControlsProps {
    active: {
        year: number;
        month: number;
    };
    activeView: string;
    onSwitchDirection: TSwitchDirection;
    onSwitchView(view: string): void;
}

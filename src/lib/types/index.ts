export type TMonthType = "prev" | "current" | "next";

export interface TDayObject {
	day: number;
	month:TMonthType;
	isToday: boolean;
	timestamp: number;
	weekday: number;
	isWeekend: boolean;
	isSelected: boolean;
	hasMarker: boolean;
}

export type TSelectedDay = TDayObject | null;
export type TCalendarData = TDayObject[];
export type TDaySelectFunc = (day: TDayObject) => void;
export type TSwitchDirection = (direction: string) => void;

export interface TYearAndMonth {
	year: number;
	month: number;
}

export interface TUseCalendarOptions {
	selectedDay: TSelectedDay,
	markers: number[],
	firstDayIsMonday;
};

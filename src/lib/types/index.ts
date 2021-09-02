export type TMonthType = "prev" | "current" | "next";

export interface TDayObject {
	day: number;
	date: Date;
	month:TMonthType;
	isToday: boolean;
	timestamp: number;
	weekday: number;
	isWeekend: boolean;
	isSelected: boolean;
	hasMarker: boolean;
}

export type TCalendarData = TDayObject[];
export type TDaySelectFunc = (day: TDayObject) => void;
export type TSwitchDirection = (direction: string) => void;
export type TConditionalObj = { [key: string]: boolean };

export interface TYearAndMonth {
	year: number;
	month: number;
}

export interface TUseCalendarOptions {
	selectedDay: Date | null,
	markers: number[],
	firstDayIsMonday: boolean;
}

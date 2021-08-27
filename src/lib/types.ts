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

export type TUseCalendarReturn = {
	active: TYearAndMonth,
	data: TCalendarData,
	setActive(active: TYearAndMonth): void,
	switchMonth: TSwitchDirection,
	setSelected(day:TSelectedDay): void,
};

export type TUseDecadeReturn = {
	decade: number[],
	switchDecade: TSwitchDirection
};

export type TWeekdayTitles = [string, string, string, string, string, string, string];

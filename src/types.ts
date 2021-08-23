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

// PROPS

export interface TCalendarProps {
	firstDayIsMonday: boolean;
	selected: TSelectedDay;
	markers: number[],
	onSelectDay(day: TDayObject): void;
}

export interface TDayProps {
	day: TDayObject;
	onClick: TDaySelectFunc;
}

export interface TMonthItemProps {
	title: string;
	index: number;
	onClick(index:number): void;
}

export interface TMonthViewProps {
	data: TCalendarData;
	activeView: string;
	firstDayIsMonday: boolean;
	onClick: TDaySelectFunc;
}

export interface TDecadeViewProps {
	decade: number[]
	activeView: string,
	onClick(year: number): void,
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
		year: number,
		month: number,
	},
	activeView: string,
	onSwitchDirection: TSwitchDirection,
	onSwitchView(view: string): void,
}

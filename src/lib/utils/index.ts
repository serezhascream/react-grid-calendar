import {
	TYearAndMonth,
	TDayObject,
	TCalendarData,
	TMonthType,
	TSelectedDay,
} from '../types';

import {
	TGetDaysArrayOptions,
	TGetCalendarDataOpts,
	TGetWeekdaysOptions,
	TGetWeekdayOptions,
	TGetMonthTypeOptions,
} from '../types/utils';

export const getYearAndMonth = (initialDate: Date | null = null): TYearAndMonth => {
	const activeDate = initialDate || new Date(Date.now());
	
	return {
		month: activeDate.getMonth(),
		year: activeDate.getFullYear(),
	};
};

export const isToday = (year: number, month: number, day: number): boolean => {
	const today = new Date(Date.now());
	
	return today.getFullYear() === year && today.getMonth() + 1 === month + 1 && today.getDate() === day;
};

export const getWeekday = (options: TGetWeekdayOptions): number => {
	const { requested, day, firstDayIsMonday } = options;
	const weekday = new Date(requested.year, requested.month, day).getDay();

	if (firstDayIsMonday) {
		return weekday === 0 ? 6 : weekday - 1;
	}

	return weekday;
};


export const isWeekend = (weekday: number, firstDayIsMonday: boolean): boolean => {
	const weekends = firstDayIsMonday ? [5,6] : [0,6];

	return weekends.includes(weekday);
};

export const getPrev = ({ year, month }: TYearAndMonth): TYearAndMonth  => {
	return {
		year: month === 0 ? year - 1 : year,
		month: month === 0 ? 11 : month - 1,
	};
};

export const getNext = ({ year, month }: TYearAndMonth): TYearAndMonth => {
	return {
		year: month === 11 ? year + 1 : year,
		month: month === 11 ? 0 : month + 1,
	};
};

export const getNumOfDaysInMonth = (year: number, month: number): number => {
	return new Date(year, month + 1, 0).getDate();
};

export const getStart = ({year, month}: TYearAndMonth, firstWeekday: number): number => {
	const daysInPrevMonth = getNumOfDaysInMonth(year, month);
	
	return daysInPrevMonth - firstWeekday + 1;
};

export const getEnd = (lastWeekday: number): number => (6 - lastWeekday);

export const getMonthType = (options: TGetMonthTypeOptions): TMonthType => {
	const { requested, active } = options;
	
	if (requested.year < active.year || requested.month < active.month) {
		return 'prev';
	}
	
	if (requested.year > active.year || requested.month > active.month) {
		return 'next';
	}

	return 'current';
};
	
export const getIsSelected = (
	{ year, month }: TYearAndMonth,
	day: number,
	selected: TSelectedDay
): boolean => {
	if (! selected) {
		return false;
	}

	const selectedDate = new Date(selected.timestamp);
	const { year: selectedYear, month: selectedMonth } = getYearAndMonth(selectedDate);

	return year === selectedYear && month === selectedMonth && selected.day === day;
};


export const getDaysArray = (options: TGetDaysArrayOptions): TDayObject[] => {
	const {
		requested,
		active,
		selected = null,
		markers = [],
		start = 1,
		end = null,
		firstDayIsMonday = true,
	} = options;
	
	const days = [];
	const lastDay = end || getNumOfDaysInMonth(requested.year, requested.month);
	
	for (let day = start; day <= lastDay; day++) {
		const date = new Date(requested.year, requested.month, day);
		const weekday = getWeekday({ requested, day, firstDayIsMonday });
		const timestamp = date.getTime();
		
		days.push({
			day,
			month: getMonthType({ requested, active }),
			timestamp,
			isToday: isToday(requested.year, requested.month, day),
			isWeekend: isWeekend(weekday, firstDayIsMonday),
			weekday,
			isSelected: getIsSelected(requested, day, selected),
			hasMarker: markers.includes(timestamp),
		});
	}
	
	return days;
};

export const getWeekdays = (options: TGetWeekdaysOptions): { first: number, last: number } => {
	const { requested, firstDayIsMonday } = options;
	const lastDate = getNumOfDaysInMonth(requested.year, requested.month);
	
	return {
		first: getWeekday({ requested, day: 1, firstDayIsMonday }),
		last: getWeekday({ requested, day: lastDate, firstDayIsMonday }),
	};
};

export const getCalendarData = (options: TGetCalendarDataOpts): TCalendarData => {
	const { active, firstDayIsMonday = true } = options;
	const weekdays = getWeekdays({ requested: active, firstDayIsMonday });
	const data = [];

	if (weekdays.first > 0) {
		const prev = getPrev(active);
		const prevDaysArray = getDaysArray({
			requested: prev,
			start: getStart(prev, weekdays.first),
			...options
		});
		
		data.push(...prevDaysArray);
	}
	
	data.push(...getDaysArray({ requested: active, ...options }));
	
	if (weekdays.last < 6) {
		const nextDaysArray = getDaysArray({
			requested: getNext(active),
			end: getEnd(weekdays.last),
			...options,
		});
		
		data.push(...nextDaysArray);
	}
	
	return data;
};

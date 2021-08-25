import {
	TYearAndMonth,
	TDayObject,
	TCalendarData,
	TMonthType,
	TSelectedDay,
} from '../types';

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

export const getWeekday = (
	year: number,
	month: number,
	day:number,
	firstDayIsMonday: boolean
): number => {
	const weekday = new Date(year, month, day).getDay();

	if (firstDayIsMonday) {
		return weekday === 0 ? 6 : weekday - 1;
	}

	return weekday;
};


export const isWeekend = (weekday: number, firstDayIsMonday: boolean): boolean => {
	const weekends = firstDayIsMonday ? [5,6] : [0,6];

	return weekends.includes(weekday);
};

export const getPrev = (year: number, month: number): TYearAndMonth  => {
	return {
		year: month === 0 ? year - 1 : year,
		month: month === 0 ? 11 : month - 1,
	};
};

export const getNext = (year: number, month: number): TYearAndMonth => {
	return {
		year: month === 11 ? year + 1 : year,
		month: month === 11 ? 0 : month + 1,
	};
};

export const getNumOfDaysInMonth = (year: number, month: number): number => {
	return new Date(year, month + 1, 0).getDate();
};

export const getStart = (
	{year, month}: TYearAndMonth,
	firstWeekday: number
): number => {
	const daysInPrevMonth = getNumOfDaysInMonth(year, month);
	
	return daysInPrevMonth - firstWeekday + 1;
};

export const getEnd = (lastWeekday: number): number => (6 - lastWeekday);

export const getMonthType = (
	year: number,
	month: number,
	activeYear: number,
	activeMonth: number
): TMonthType => {
	if (year < activeYear || month < activeMonth) {
		return 'prev';
	}
	
	if (year > activeYear || month > activeMonth) {
		return 'next';
	}

	return 'current';
};
	
export const getIsSelected = (
	year: number,
	month: number,
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

export const getDaysArray = (
	{year, month}: TYearAndMonth,
	{year: activeYear, month: activeMonth}: TYearAndMonth,
	selected: TSelectedDay,
	markers: number[],
	start = 1,
	end: number | null = null,
	firstDayIsMonday = true,
): TDayObject[] => {
	const days = [];
	const lastDay = end || getNumOfDaysInMonth(year, month);
	
	for (let i = start; i <= lastDay; i++) {
		const date = new Date(year, month, i);
		const weekday = getWeekday(year, month, i, firstDayIsMonday);
		const monthType = getMonthType(year, month, activeYear, activeMonth);
		const isSelected = selected ? getIsSelected(year, month, i, selected) : false;
		const timestamp = date.getTime();
		const hasMarker = markers.includes(timestamp);
		
		days.push({
			day: i,
			month: monthType,
			timestamp,
			isToday: isToday(year, month, i),
			isWeekend: isWeekend(weekday, firstDayIsMonday),
			weekday,
			isSelected,
			hasMarker,
		});
	}
	
	return days;
};

export const getCalendarData = (
	active: TYearAndMonth,
	selected: TSelectedDay,
	markers: number[],
	firstDayIsMonday: boolean
): TCalendarData => {
	const data = [];
	const { month, year } = active;

	const firstWeekday = getWeekday(year, month, 1, firstDayIsMonday);
	const lastWeekday = getWeekday(
		year,
		month,
		getNumOfDaysInMonth(year, month),
		firstDayIsMonday,
	);
	
	if (firstWeekday > 0) {
		const prev = getPrev(year, month);
		const start = getStart(prev, firstWeekday);
		const prevDaysArray = getDaysArray(prev, active, selected, markers, start, null, firstDayIsMonday);
		
		data.push(...prevDaysArray);
	}
	
	data.push(...getDaysArray({year, month}, active, selected, markers, 1, null, firstDayIsMonday));
	
	if (lastWeekday < 6) {
		const next = getNext(year, month);
		const end = getEnd(lastWeekday);
		const nextDaysArray = getDaysArray(next, active, selected, markers, 1, end, firstDayIsMonday);
		
		data.push(...nextDaysArray);
	}
	
	return data;
};

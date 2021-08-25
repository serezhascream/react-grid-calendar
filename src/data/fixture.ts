import { TDayObject } from '../types';

export const seventies_decade = [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979];
export const eighties_decade = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989];
export const nineties_decade = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989];

export const day:TDayObject = {
	day: 1,
	month: 'current',
	isToday: false,
	timestamp: 1000000000,
	weekday: 1,
	isWeekend: false,
	isSelected: false,
	hasMarker: false,
};

export const firstOfMay2021:TDayObject = {
	day: 1,
	month: "current",
	timestamp: 1619816400000,
	isToday: false,
	isWeekend: true,
	weekday: 5,
	isSelected: false,
	hasMarker: false,
};

export const jan2021 = { month: 0, year: 2021 };
export const feb2021 = { month: 1, year: 2021 };
export const may2021 = { month: 4, year: 2021 };

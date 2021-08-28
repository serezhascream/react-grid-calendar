import { TDayObject, TConditionalObj } from '../types';

const defaultClassPrefix = 'rgc';

export const getPrefixes = (prefix: string | string[] | null): string[] => {
	if (!prefix) {
		return [defaultClassPrefix];
	}
	
	if (typeof prefix === 'string') {
		return [defaultClassPrefix, prefix];
	}
	
	return [defaultClassPrefix, ...prefix];
}

export const getClasses = (classes: string[], prefix: string | string[] | null) => {
	const prefixes = getPrefixes(prefix);
	
	const classNames = prefixes.reduce((acc, prefix): string[] => {
		const cn = classes.reduce(
			(prev, className): string[] => ([...prev, `${prefix}-${className}`]), []
		);
		
		return [...acc, ...cn];
	}, []);
	
	return classNames.join(' ');
}

export const getConditionalClasses = (classesObject: TConditionalObj): string[] => {
	return Object.keys(classesObject).filter(key => (!!classesObject[key]));
};

export const getArrowButtonClass = (
	btn: string,
	classPrefix: string | string[] | null,
	activeView: string | null,
): string => {
	const buttonClasses = ['calendar__btn', `calendar__btn-${btn}`];

	if (activeView === 'year') {
		buttonClasses.push('calendar__btn--blocked');
	}
	
	return getClasses(
		buttonClasses, classPrefix
	)
}

export const getDayClasses = (
	day: TDayObject,
	classPrefix: string | string[] | null
): string => {
	const conditionalClasses = getConditionalClasses({
		'calendar__day--today': day.isToday,
		[`calendar__day--${day.month}`]: day.month !== 'current',
		'calendar__day--weekend': day.isWeekend,
		'calendar__day--selected': day.isSelected,
		'calendar__day--has-marker': day.hasMarker,
	});
	const classes = ['calendar__day', ...conditionalClasses];

	return getClasses(classes, classPrefix);
};

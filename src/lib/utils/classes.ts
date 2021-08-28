
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

export const getUniqueValues = (arr: number[]): number[] => {
	const set = new Set(arr);
	return [...set];
};

export const getTimestamps = (marker: Date): number => {
	const year = marker.getFullYear();
	const month = marker.getMonth();
	const day = marker.getDate();
	const date = new Date(year, month, day);
	
	return date.getTime();
};

export const getMarkedDays = (markers: Date[]): number[] => {
	if (! markers.length) {
		return [];
	}
	
	const timestamps = markers.map(marker => getTimestamps(marker));
	
	return getUniqueValues(timestamps);
};

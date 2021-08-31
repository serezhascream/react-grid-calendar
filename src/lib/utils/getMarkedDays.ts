
export const getUniqueValues = (arr: Date[]): Date[] => {
	const set = new Set(arr);
	return [...set];
}

export const getModifiedMarker = (marker: Date): Date => {
	const year = marker.getFullYear();
	const month = marker.getMonth();
	const day = marker.getDate();
	
	return new Date(year, month, day);
};

export const getMarkedDays = (markers: Date[]): Date[] => {
	if (! markers.length) {
		return [];
	}
	
	const modifiedMarkers = markers.map(marker => getModifiedMarker(marker));
	
	return getUniqueValues(modifiedMarkers);
};

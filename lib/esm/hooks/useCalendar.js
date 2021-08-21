import * as React from 'react';
import { getYearAndMonth, getPrev, getNext, getCalendarData } from '../utils';
export var useCalendar = function (selectedDay, markers, firstDayIsMonday) {
    if (selectedDay === void 0) { selectedDay = null; }
    if (firstDayIsMonday === void 0) { firstDayIsMonday = true; }
    var activeYearMonth = getYearAndMonth();
    var _a = React.useState(activeYearMonth), active = _a[0], setActive = _a[1];
    var _b = React.useState(selectedDay), selected = _b[0], setSelected = _b[1];
    var data = React.useMemo(function () { return getCalendarData(active, selected, markers, firstDayIsMonday); }, [active, selected, firstDayIsMonday]);
    var handlerSetSelected = React.useCallback(function (day) { return setSelected(day); }, [setSelected]);
    var handlerSetActive = React.useCallback(function (active) { return setActive(active); }, [setActive]);
    var handlerSwitchMonth = React.useCallback(function (direction) {
        var year = active.year, month = active.month;
        if (direction === 'prev') {
            var newActive = getPrev(year, month);
            setActive(newActive);
            return;
        }
        if (direction === 'next') {
            var newActive = getNext(year, month);
            setActive(newActive);
            return;
        }
    }, [active]);
    return {
        active: active,
        data: data,
        setActive: handlerSetActive,
        setSelected: handlerSetSelected,
        switchMonth: handlerSwitchMonth,
    };
};
export default useCalendar;

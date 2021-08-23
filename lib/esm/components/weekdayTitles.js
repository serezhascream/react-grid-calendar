var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import * as React from 'react';
import classNames from 'classnames';
import { WEEKDAY_TITLES } from 'data/constants';
import { testIds } from 'data/tests';
var WeekdayTitles = function (_a) {
    var firstDayIsMonday = _a.firstDayIsMonday;
    var titles = React.useMemo(function () {
        if (firstDayIsMonday) {
            return WEEKDAY_TITLES;
        }
        return __spreadArray(['sun'], WEEKDAY_TITLES.slice(0, -1));
    }, [firstDayIsMonday]);
    var weekend_days = React.useMemo(function () { return (firstDayIsMonday ? [5, 6] : [0, 6]); }, [firstDayIsMonday]);
    return (React.createElement("div", { className: "rgc-calendar__weekday-titles", "data-testid": testIds.weekdayTitles }, titles.map(function (day, i) {
        var classes = classNames('rgc-calendar__weekday-day', { 'rgc-calendar__weekday-day--weekend': weekend_days.includes(i) });
        return (React.createElement("span", { key: day, className: classes }, day));
    })));
};
export default React.memo(WeekdayTitles);

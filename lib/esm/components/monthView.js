import * as React from 'react';
import { testIds } from '../data/tests';
import WeekdayTitles from './weekdayTitles';
import Day from './day';
var MonthView = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, activeView = _a.activeView, firstDayIsMonday = _a.firstDayIsMonday, onClick = _a.onClick;
    var handlerClick = React.useCallback(function (day) { return onClick(day); }, [onClick]);
    if (activeView !== 'month') {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(WeekdayTitles, { firstDayIsMonday: firstDayIsMonday }),
        React.createElement("div", { className: "rgc-calendar__month", "data-testid": testIds.monthView }, data.map(function (day) { return (React.createElement(Day, { key: day.timestamp, day: day, onClick: handlerClick })); }))));
};
export default React.memo(MonthView);

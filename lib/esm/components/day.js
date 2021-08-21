import * as React from 'react';
import classNames from 'classnames';
import { testIds } from '../data/tests';
var Day = function (_a) {
    var day = _a.day, onClick = _a.onClick;
    var classes = React.useMemo(function () {
        var _a;
        return classNames('rgc-calendar__day', (_a = {
                'rgc-calendar__day--today': day.isToday
            },
            _a["rgc-calendar__day--" + day.month] = day.month !== 'current',
            _a['rgc-calendar__day--weekend'] = day.isWeekend,
            _a['rgc-calendar__day--selected'] = day.isSelected,
            _a['rgc-calendar__day--has-marker'] = day.hasMarker,
            _a));
    }, [day]);
    var handlerClick = React.useCallback(function () { return onClick(day); }, [onClick, day]);
    return (React.createElement("span", { key: day.timestamp, className: classes, onClick: handlerClick, "data-testid": testIds.day }, day.day));
};
export default React.memo(Day);

import * as React from 'react';
import { testIds } from '../data/tests';
var MonthItem = function (_a) {
    var title = _a.title, index = _a.index, onClick = _a.onClick;
    var handlerClick = React.useCallback(function () { return onClick(index); }, [onClick, index]);
    return (React.createElement("div", { className: "rgc-calendar__year-month", "data-testid": testIds.monthItem, onClick: handlerClick }, title));
};
export default React.memo(MonthItem);

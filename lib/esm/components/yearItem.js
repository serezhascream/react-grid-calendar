import * as React from 'react';
import { testIds } from '../data/tests';
var YearItem = function (_a) {
    var year = _a.year, onClick = _a.onClick;
    var handlerClick = React.useCallback(function () { return onClick(year); }, [onClick, year]);
    return (React.createElement("div", { className: "rgc-calendar__decade-year", "data-testid": testIds.yearItem, onClick: handlerClick }, year));
};
export default React.memo(YearItem);

import * as React from 'react';
import { MONTHS_TITLES } from '../data/constants';
import { testIds } from '../data/tests';
import MonthItem from './monthItem';
var YearView = function (_a) {
    var onClick = _a.onClick, activeView = _a.activeView;
    var handlerClick = React.useCallback(function (index) { return onClick(index); }, [onClick]);
    if (activeView !== 'year') {
        return null;
    }
    return (React.createElement("div", { className: "rgc-calendar__year", "data-testid": testIds.yearView }, MONTHS_TITLES.map(function (title, i) { return (React.createElement(MonthItem, { key: title, title: title, index: i, onClick: handlerClick })); })));
};
export default React.memo(YearView);

import * as React from 'react';
import { testIds } from '../data/tests';
import YearItem from './yearItem';
var DecadeView = function (_a) {
    var decade = _a.decade, activeView = _a.activeView, onClick = _a.onClick;
    var handlerClick = React.useCallback(function (year) { return onClick(year); }, [onClick]);
    if (activeView !== 'decade') {
        return null;
    }
    return (React.createElement("div", { className: "rgc-calendar__decade", "data-testid": testIds.decadeView }, decade.map(function (year) { return (React.createElement(YearItem, { key: year, year: year, onClick: handlerClick })); })));
};
export default React.memo(DecadeView);

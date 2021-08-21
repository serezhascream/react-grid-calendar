import * as React from 'react';
import { MONTHS_TITLES } from '../data/constants';
import { testIds } from '../data/tests';
var Controls = function (_a) {
    var active = _a.active, activeView = _a.activeView, onSwitchDirection = _a.onSwitchDirection, onSwitchView = _a.onSwitchView;
    var monthTitle = React.useMemo(function () { return (MONTHS_TITLES[active.month]); }, [active]);
    var blockedArrowsClass = React.useMemo(function () { return (activeView === 'year' ? ' rgc-calendar__btn--blocked' : ''); }, [activeView]);
    var handlerClickPrev = React.useCallback(function () { return onSwitchDirection('prev'); }, [onSwitchDirection]);
    var handlerClickNext = React.useCallback(function () { return onSwitchDirection('next'); }, [onSwitchDirection]);
    var handlerClickOnMonth = React.useCallback(function () { return onSwitchView('year'); }, [onSwitchView]);
    var handlerClickOnYear = React.useCallback(function () { return onSwitchView('decade'); }, [onSwitchView]);
    return (React.createElement("div", { className: "rgc-calendar__controls", "data-testid": testIds.controls },
        React.createElement("span", { className: "rgc-calendar__btn rgc-calendar__btn-prev" + blockedArrowsClass, "data-testid": testIds.controlsPrevBtn, onClick: handlerClickPrev }, '<'),
        React.createElement("span", { className: "rgc-calendar__controls-month", "data-testid": testIds.controlsMonthTitle, onClick: handlerClickOnMonth }, monthTitle),
        React.createElement("span", { className: "rgc-calendar__controls-year", "data-testid": testIds.controlsYearTitle, onClick: handlerClickOnYear }, active.year),
        React.createElement("span", { className: "rgc-calendar__btn rgc-calendar__btn-next" + blockedArrowsClass, "data-testid": testIds.controlsNextBtn, onClick: handlerClickNext }, '>')));
};
export default React.memo(Controls);

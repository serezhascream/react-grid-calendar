import * as React from 'react';
import { testIds } from 'data/tests';
import useCalendar from 'hooks/useCalendar';
import useDecade from 'hooks/useDecade';
import Controls from 'components/controls';
import MonthView from 'components/monthView';
import YearView from 'components/yearView';
import DecadeView from 'components/decadeView';
import 'styles/index.css';
var Calendar = function (_a) {
    var _b = _a.firstDayIsMonday, firstDayIsMonday = _b === void 0 ? true : _b, _c = _a.selected, selected = _c === void 0 ? null : _c, _d = _a.markers, markers = _d === void 0 ? [] : _d, onSelectDay = _a.onSelectDay;
    var _e = useCalendar(selected, markers, firstDayIsMonday), data = _e.data, active = _e.active, setActive = _e.setActive, switchMonth = _e.switchMonth, setSelected = _e.setSelected;
    var _f = React.useState('month'), activeView = _f[0], setActiveView = _f[1];
    var _g = React.useState(active), current = _g[0], setCurrent = _g[1];
    var _h = useDecade(current.year), decade = _h.decade, switchDecade = _h.switchDecade;
    var handleSwitchDirection = React.useCallback(function (direction) {
        if (activeView === 'month') {
            switchMonth(direction);
        }
        if (activeView === 'decade') {
            switchDecade(direction);
        }
    }, [activeView, switchMonth, switchDecade]);
    var handlerSwitchView = React.useCallback(function (view) {
        setActiveView(view);
    }, []);
    var handlerSelectDay = React.useCallback(function (day) {
        if (day.month !== 'current') {
            switchMonth(day.month);
        }
        onSelectDay(day);
    }, [switchMonth, onSelectDay]);
    var handlerSelectMonth = React.useCallback(function (month) {
        var year = current.year;
        setCurrent({ year: year, month: month });
        setActive({ year: year, month: month });
        setActiveView('month');
    }, [current, setActive]);
    var handlerSelectYear = React.useCallback(function (year) {
        var month = current.month;
        setCurrent({ year: year, month: month });
        setActiveView('year');
    }, [current, setActive]);
    React.useEffect(function () {
        setCurrent(active);
    }, [active]);
    React.useEffect(function () {
        setSelected(selected);
    }, [selected]);
    return (React.createElement("div", { className: "org-calendar", "data-testid": testIds.calendar },
        React.createElement(Controls, { active: current, activeView: activeView, onSwitchDirection: handleSwitchDirection, onSwitchView: handlerSwitchView }),
        React.createElement(MonthView, { data: data, activeView: activeView, firstDayIsMonday: firstDayIsMonday, onClick: handlerSelectDay }),
        React.createElement(YearView, { activeView: activeView, onClick: handlerSelectMonth }),
        React.createElement(DecadeView, { decade: decade, activeView: activeView, onClick: handlerSelectYear })));
};
export default React.memo(Calendar);

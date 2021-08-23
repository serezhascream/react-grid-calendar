"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var tests_1 = require("data/tests");
var useCalendar_1 = __importDefault(require("hooks/useCalendar"));
var useDecade_1 = __importDefault(require("hooks/useDecade"));
var controls_1 = __importDefault(require("components/controls"));
var monthView_1 = __importDefault(require("components/monthView"));
var yearView_1 = __importDefault(require("components/yearView"));
var decadeView_1 = __importDefault(require("components/decadeView"));
require("styles/index.css");
var Calendar = function (_a) {
    var _b = _a.firstDayIsMonday, firstDayIsMonday = _b === void 0 ? true : _b, _c = _a.selected, selected = _c === void 0 ? null : _c, _d = _a.markers, markers = _d === void 0 ? [] : _d, onSelectDay = _a.onSelectDay;
    var _e = useCalendar_1.default(selected, markers, firstDayIsMonday), data = _e.data, active = _e.active, setActive = _e.setActive, switchMonth = _e.switchMonth, setSelected = _e.setSelected;
    var _f = React.useState('month'), activeView = _f[0], setActiveView = _f[1];
    var _g = React.useState(active), current = _g[0], setCurrent = _g[1];
    var _h = useDecade_1.default(current.year), decade = _h.decade, switchDecade = _h.switchDecade;
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
    return (React.createElement("div", { className: "org-calendar", "data-testid": tests_1.testIds.calendar },
        React.createElement(controls_1.default, { active: current, activeView: activeView, onSwitchDirection: handleSwitchDirection, onSwitchView: handlerSwitchView }),
        React.createElement(monthView_1.default, { data: data, activeView: activeView, firstDayIsMonday: firstDayIsMonday, onClick: handlerSelectDay }),
        React.createElement(yearView_1.default, { activeView: activeView, onClick: handlerSelectMonth }),
        React.createElement(decadeView_1.default, { decade: decade, activeView: activeView, onClick: handlerSelectYear })));
};
exports.default = React.memo(Calendar);

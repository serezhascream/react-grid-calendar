"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

var _tests = require("./data/tests");

var _useCalendar = _interopRequireDefault(require("./hooks/useCalendar"));

var _useDecade = _interopRequireDefault(require("./hooks/useDecade"));

var _localization = require("./utils/localization");

var _controls = _interopRequireDefault(require("./components/controls"));

var _monthView = _interopRequireDefault(require("./components/monthView"));

var _yearView = _interopRequireDefault(require("./components/yearView"));

var _decadeView = _interopRequireDefault(require("./components/decadeView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  const styles = ":root {\n  --calendar-text-color: #263238;\n  --calendar-accent-color: #BD2C2C; }\n\n.rgc-calendar {\n  width: 320px; }\n  .rgc-calendar__controls {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    user-select: none; }\n  .rgc-calendar__btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    color: var(--calendar-text-color); }\n    .rgc-calendar__btn:hover {\n      color: var(--calendar-accent-color);\n      font-weight: bold; }\n    .rgc-calendar__btn--blocked {\n      cursor: default;\n      opacity: .3; }\n    .rgc-calendar__btn--blocked:hover {\n      color: var(--calendar-text-color);\n      font-weight: normal; }\n  .rgc-calendar__controls-year, .rgc-calendar__controls-month {\n    cursor: pointer;\n    color: var(--calendar-text-color); }\n    .rgc-calendar__controls-year:hover, .rgc-calendar__controls-month:hover {\n      color: var(--calendar-accent-color); }\n  .rgc-calendar__month, .rgc-calendar__year, .rgc-calendar__decade {\n    display: grid;\n    color: var(--calendar-text-color); }\n  .rgc-calendar__month {\n    grid-template-columns: repeat(7, auto); }\n  .rgc-calendar__year {\n    grid-template-columns: repeat(3, auto); }\n  .rgc-calendar__decade {\n    grid-template-columns: repeat(4, auto); }\n  .rgc-calendar__year-month, .rgc-calendar__decade-year {\n    padding: 12px;\n    text-align: center;\n    cursor: pointer; }\n    .rgc-calendar__year-month:hover, .rgc-calendar__decade-year:hover {\n      color: var(--calendar-accent-color); }\n  .rgc-calendar__day {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 43px;\n    font-size: 14px;\n    cursor: pointer; }\n    .rgc-calendar__day--today {\n      font-weight: bold; }\n    .rgc-calendar__day--prev, .rgc-calendar__day--next {\n      opacity: .3; }\n    .rgc-calendar__day--weekend {\n      color: var(--calendar-accent-color); }\n    .rgc-calendar__day:before {\n      content: '';\n      position: absolute;\n      display: block;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      border: 2px solid transparent;\n      opacity: 0;\n      margin: auto; }\n    .rgc-calendar__day:hover:before, .rgc-calendar__day--selected:before {\n      border-color: var(--calendar-accent-color);\n      opacity: .3; }\n    .rgc-calendar__day--selected:before, .rgc-calendar__day--selected:hover:before {\n      border-color: var(--calendar-accent-color);\n      opacity: 1; }\n    .rgc-calendar__day--has-marker:after {\n      content: '';\n      position: absolute;\n      display: block;\n      bottom: 6px;\n      right: 0;\n      left: 0;\n      width: 3px;\n      height: 3px;\n      margin: 0 auto;\n      background-color: var(--calendar-text-color); }\n  .rgc-calendar__weekday-titles {\n    display: grid;\n    grid-template-columns: repeat(7, minmax(0, 1fr)); }\n  .rgc-calendar__weekday-day {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 43px;\n    font-size: 14px;\n    color: var(--calendar-text-color); }\n    .rgc-calendar__weekday-day--weekend {\n      color: var(--calendar-accent-color); }\n";
  const fileName = "index_index";
  const element = document.querySelector("style[data-sass-component='index_index']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const Calendar = props => {
  const {
    firstDayIsMonday = true,
    selected = null,
    markers = [],
    locale = 'en-US',
    onSelectDay = () => {}
  } = props;
  const calendar = (0, _useCalendar.default)({
    selectedDay: selected,
    markers,
    firstDayIsMonday
  });
  const {
    data,
    active,
    setActive,
    switchMonth,
    setSelected
  } = calendar;
  const {
    weekdays,
    months
  } = (0, _localization.getLocalizedNames)({
    locale,
    firstDayIsMonday
  });
  const [activeView, setActiveView] = React.useState('month');
  const [current, setCurrent] = React.useState(active);
  const {
    decade,
    switchDecade
  } = (0, _useDecade.default)(current.year);
  const handleSwitchDirection = React.useCallback(direction => {
    if (activeView === 'month') {
      switchMonth(direction);
    }

    if (activeView === 'decade') {
      switchDecade(direction);
    }
  }, [activeView, switchMonth, switchDecade]);
  const handlerSwitchView = React.useCallback(view => {
    setActiveView(view);
  }, []);
  const handlerSelectDay = React.useCallback(day => {
    if (day.month !== 'current') {
      switchMonth(day.month);
    }

    onSelectDay(day);
  }, [switchMonth, onSelectDay]);
  const handlerSelectMonth = React.useCallback(month => {
    const {
      year
    } = current;
    setCurrent({
      year,
      month
    });
    setActive({
      year,
      month
    });
    setActiveView('month');
  }, [current, setActive]);
  const handlerSelectYear = React.useCallback(year => {
    const {
      month
    } = current;
    setCurrent({
      year,
      month
    });
    setActiveView('year');
  }, [current, setActive]);
  React.useEffect(() => setCurrent(active), [active]);
  React.useEffect(() => setSelected(selected), [selected]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rgc-calendar",
    "data-testid": _tests.testIds.calendar
  }, /*#__PURE__*/React.createElement(_controls.default, {
    active: current,
    activeView: activeView,
    monthTitles: months,
    onSwitchDirection: handleSwitchDirection,
    onSwitchView: handlerSwitchView
  }), /*#__PURE__*/React.createElement(_monthView.default, {
    data: data,
    activeView: activeView,
    firstDayIsMonday: firstDayIsMonday,
    weekdayTitles: weekdays,
    onClick: handlerSelectDay
  }), /*#__PURE__*/React.createElement(_yearView.default, {
    activeView: activeView,
    monthTitles: months,
    onClick: handlerSelectMonth
  }), /*#__PURE__*/React.createElement(_decadeView.default, {
    decade: decade,
    activeView: activeView,
    onClick: handlerSelectYear
  }));
};

var _default = /*#__PURE__*/React.memo(Calendar);

exports.default = _default;
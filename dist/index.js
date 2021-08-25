"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

var _tests = require("data/tests");

var _useCalendar = _interopRequireDefault(require("hooks/useCalendar"));

var _useDecade = _interopRequireDefault(require("hooks/useDecade"));

var _controls = _interopRequireDefault(require("components/controls"));

var _monthView = _interopRequireDefault(require("components/monthView"));

var _yearView = _interopRequireDefault(require("components/yearView"));

var _decadeView = _interopRequireDefault(require("components/decadeView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Calendar = _ref => {
  let {
    firstDayIsMonday = true,
    selected = null,
    markers = [],
    onSelectDay
  } = _ref;
  const {
    data,
    active,
    setActive,
    switchMonth,
    setSelected
  } = (0, _useCalendar.default)(selected, markers, firstDayIsMonday);
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
  React.useEffect(() => {
    setCurrent(active);
  }, [active]);
  React.useEffect(() => {
    setSelected(selected);
  }, [selected]);
  return /*#__PURE__*/React.createElement("div", {
    className: "org-calendar",
    "data-testid": _tests.testIds.calendar
  }, /*#__PURE__*/React.createElement(_controls.default, {
    active: current,
    activeView: activeView,
    onSwitchDirection: handleSwitchDirection,
    onSwitchView: handlerSwitchView
  }), /*#__PURE__*/React.createElement(_monthView.default, {
    data: data,
    activeView: activeView,
    firstDayIsMonday: firstDayIsMonday,
    onClick: handlerSelectDay
  }), /*#__PURE__*/React.createElement(_yearView.default, {
    activeView: activeView,
    onClick: handlerSelectMonth
  }), /*#__PURE__*/React.createElement(_decadeView.default, {
    decade: decade,
    activeView: activeView,
    onClick: handlerSelectYear
  }));
};

var _default = /*#__PURE__*/React.memo(Calendar);

exports.default = _default;
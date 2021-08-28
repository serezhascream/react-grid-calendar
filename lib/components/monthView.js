"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _tests = require("../data/tests");

var _weekdayTitles = _interopRequireDefault(require("./weekdayTitles"));

var _day = _interopRequireDefault(require("./day"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MonthView = props => {
  const {
    data,
    activeView,
    firstDayIsMonday,
    weekdayTitles,
    onClick
  } = props;
  const handlerClick = React.useCallback(day => onClick(day), [onClick]);

  if (activeView !== 'month') {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_weekdayTitles.default, {
    weekdayTitles: weekdayTitles,
    firstDayIsMonday: firstDayIsMonday
  }), /*#__PURE__*/React.createElement("div", {
    className: "rgc-calendar__month",
    "data-testid": _tests.testIds.monthView
  }, data.map(day => /*#__PURE__*/React.createElement(_day.default, {
    key: day.timestamp,
    day: day,
    onClick: handlerClick
  }))));
};

var _default = /*#__PURE__*/React.memo(MonthView);

exports.default = _default;
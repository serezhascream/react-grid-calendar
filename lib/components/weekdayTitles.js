"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

var React = _interopRequireWildcard(require("react"));

var _tests = require("../data/tests");

var _classes = require("../utils/classes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WeekdayTitles = props => {
  const {
    weekdayTitles,
    firstDayIsMonday,
    classPrefix = null
  } = props;
  const CWeekdayTitles = (0, _classes.getClasses)(['calendar__weekday-titles'], classPrefix);
  const weekend_days = React.useMemo(() => firstDayIsMonday ? [5, 6] : [0, 6], [firstDayIsMonday]);
  return /*#__PURE__*/React.createElement("div", {
    className: CWeekdayTitles,
    "data-testid": _tests.testIds.weekdayTitles
  }, weekdayTitles.map((day, i) => {
    const classes = ['calendar__weekday-day'];

    if (weekend_days.includes(i)) {
      classes.push('calendar__weekday-day--weekend');
    }

    const CWeekday = (0, _classes.getClasses)(classes, classPrefix);
    return /*#__PURE__*/React.createElement("span", {
      key: day,
      className: CWeekday
    }, day);
  }));
};

var _default = /*#__PURE__*/React.memo(WeekdayTitles);

exports.default = _default;
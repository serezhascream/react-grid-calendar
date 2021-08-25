"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("data/constants");

var _tests = require("data/tests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WeekdayTitles = _ref => {
  let {
    firstDayIsMonday
  } = _ref;
  const titles = React.useMemo(() => {
    if (firstDayIsMonday) {
      return _constants.WEEKDAY_TITLES;
    }

    return ['sun', ..._constants.WEEKDAY_TITLES.slice(0, -1)];
  }, [firstDayIsMonday]);
  const weekend_days = React.useMemo(() => firstDayIsMonday ? [5, 6] : [0, 6], [firstDayIsMonday]);
  return <div className="rgc-calendar__weekday-titles" data-testid={_tests.testIds.weekdayTitles}>
			{titles.map((day, i) => {
      const classes = (0, _classnames.default)('rgc-calendar__weekday-day', {
        'rgc-calendar__weekday-day--weekend': weekend_days.includes(i)
      });
      return <span key={day} className={classes}>{day}</span>;
    })}
		</div>;
};

var _default = React.memo(WeekdayTitles);

exports.default = _default;
"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _tests = require("data/tests");

var _weekdayTitles = _interopRequireDefault(require("./weekdayTitles"));

var _day = _interopRequireDefault(require("./day"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MonthView = _ref => {
  let {
    data = [],
    activeView,
    firstDayIsMonday,
    onClick
  } = _ref;
  const handlerClick = React.useCallback(day => onClick(day), [onClick]);

  if (activeView !== 'month') {
    return null;
  }

  return <React.Fragment>
			<_weekdayTitles.default firstDayIsMonday={firstDayIsMonday} />
			<div className="rgc-calendar__month" data-testid={_tests.testIds.monthView}>
				{data.map(day => <_day.default key={day.timestamp} day={day} onClick={handlerClick} />)}
			</div>
		</React.Fragment>;
};

var _default = React.memo(MonthView);

exports.default = _default;
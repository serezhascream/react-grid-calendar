"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tests = require("data/tests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Day = _ref => {
  let {
    day,
    onClick
  } = _ref;
  const classes = React.useMemo(() => (0, _classnames.default)('rgc-calendar__day', {
    'rgc-calendar__day--today': day.isToday,
    ["rgc-calendar__day--".concat(day.month)]: day.month !== 'current',
    'rgc-calendar__day--weekend': day.isWeekend,
    'rgc-calendar__day--selected': day.isSelected,
    'rgc-calendar__day--has-marker': day.hasMarker
  }), [day]);
  const handlerClick = React.useCallback(() => onClick(day), [onClick, day]);
  return <span key={day.timestamp} className={classes} onClick={handlerClick} data-testid={_tests.testIds.day}>
			{day.day}
		</span>;
};

var _default = React.memo(Day);

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useCalendar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useCalendar = options => {
  const {
    selected = null,
    markers,
    firstDayIsMonday
  } = options;
  const activeYearMonth = (0, _utils.getYearAndMonth)(selected);
  const [active, setActive] = React.useState(activeYearMonth);
  const data = React.useMemo(() => (0, _utils.getCalendarData)({
    active,
    selected,
    markers,
    firstDayIsMonday
  }), [active, selected, firstDayIsMonday]);
  const handlerSetActive = React.useCallback(active => setActive(active), [setActive]);
  const handlerSwitchMonth = React.useCallback(direction => {
    if (direction === 'prev') {
      setActive((0, _utils.getPrev)(active));
      return;
    }

    if (direction === 'next') {
      setActive((0, _utils.getNext)(active));
      return;
    }
  }, [active]);
  return {
    active,
    data,
    setActive: handlerSetActive,
    switchMonth: handlerSwitchMonth
  };
};

exports.useCalendar = useCalendar;
var _default = useCalendar;
exports.default = _default;
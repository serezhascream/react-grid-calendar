"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useDecade = exports.getDecade = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

;

const getDecade = year => {
  const decade = [];
  const firstYear = year - year % 10;
  const lastYear = firstYear + 9;

  for (let i = firstYear; i <= lastYear; i++) {
    decade.push(i);
  }

  return decade;
};

exports.getDecade = getDecade;

const useDecade = currentYear => {
  const [decade, setDecade] = React.useState(() => getDecade(currentYear));
  const handlerSwitchDecade = React.useCallback(direction => {
    if (direction === 'prev') {
      setDecade(getDecade(decade[0] - 10));
      return;
    }

    setDecade(getDecade(decade[0] + 10));
  }, [decade]);
  return {
    decade,
    switchDecade: handlerSwitchDecade
  };
};

exports.useDecade = useDecade;
var _default = useDecade;
exports.default = _default;
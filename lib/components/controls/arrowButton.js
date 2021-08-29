"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _tests = require("../../data/tests");

var _classes = require("../../utils/classes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

;

const ArrowButton = props => {
  const {
    direction,
    classPrefix = null,
    activeView,
    onClick
  } = props;
  const button = React.useMemo(() => ({
    testId: direction === 'prev' ? _tests.testIds.controlsPrevBtn : _tests.testIds.controlsNextBtn,
    arrow: direction === 'prev' ? '<' : '>'
  }), [direction]);
  const CArrowButton = React.useMemo(() => (0, _classes.getArrowButtonClass)(direction, classPrefix, activeView), [direction, classPrefix, activeView]);
  const handlerClick = React.useCallback(() => {
    onClick(direction);
  }, [direction, onClick]);
  return /*#__PURE__*/React.createElement("span", {
    className: CArrowButton,
    "data-testid": button.testId,
    onClick: handlerClick
  }, button.arrow);
};

var _default = /*#__PURE__*/React.memo(ArrowButton);

exports.default = _default;
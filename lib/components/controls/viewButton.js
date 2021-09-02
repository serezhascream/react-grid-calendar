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

const ViewButton = props => {
  const {
    title,
    view,
    targetView,
    classPrefix,
    onClick
  } = props;
  const testId = React.useMemo(() => view === 'month' ? _tests.testIds.controlsMonthTitle : _tests.testIds.controlsYearTitle, [view]);
  const CViewButton = React.useMemo(() => (0, _classes.getClasses)(["calendar__controls-".concat(view)], classPrefix), [view, classPrefix]);
  const handlerClick = React.useCallback(() => onClick(targetView), [targetView, onClick]);
  return /*#__PURE__*/React.createElement("span", {
    className: CViewButton,
    "data-testid": testId,
    onClick: handlerClick
  }, title);
};

var _default = /*#__PURE__*/React.memo(ViewButton);

exports.default = _default;
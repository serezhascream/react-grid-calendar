"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _tests = require("../data/tests");

var _classes = require("../utils/classes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Controls = props => {
  const {
    active,
    activeView,
    monthTitles,
    classPrefix = null,
    onSwitchDirection,
    onSwitchView
  } = props;
  const monthTitle = React.useMemo(() => monthTitles[active.month], [active, monthTitles]);
  const CPrevBtn = React.useMemo(() => (0, _classes.getArrowButtonClass)('prev', classPrefix, activeView), [classPrefix, activeView]);
  const CNextBtn = React.useMemo(() => (0, _classes.getArrowButtonClass)('next', classPrefix, activeView), [classPrefix, activeView]);
  const CControls = (0, _classes.getClasses)(['calendar__controls'], classPrefix);
  const CMonthBtn = (0, _classes.getClasses)(['calendar__controls-month'], classPrefix);
  const CYearBtn = (0, _classes.getClasses)(['calendar__controls-year'], classPrefix);
  const handlerClickPrev = React.useCallback(() => onSwitchDirection('prev'), [onSwitchDirection]);
  const handlerClickNext = React.useCallback(() => onSwitchDirection('next'), [onSwitchDirection]);
  const handlerClickOnMonth = React.useCallback(() => onSwitchView('year'), [onSwitchView]);
  const handlerClickOnYear = React.useCallback(() => onSwitchView('decade'), [onSwitchView]);
  return /*#__PURE__*/React.createElement("div", {
    className: CControls,
    "data-testid": _tests.testIds.controls
  }, /*#__PURE__*/React.createElement("span", {
    className: CPrevBtn,
    "data-testid": _tests.testIds.controlsPrevBtn,
    onClick: handlerClickPrev
  }, '<'), /*#__PURE__*/React.createElement("span", {
    className: CMonthBtn,
    "data-testid": _tests.testIds.controlsMonthTitle,
    onClick: handlerClickOnMonth
  }, monthTitle), /*#__PURE__*/React.createElement("span", {
    className: CYearBtn,
    "data-testid": _tests.testIds.controlsYearTitle,
    onClick: handlerClickOnYear
  }, active.year), /*#__PURE__*/React.createElement("span", {
    className: CNextBtn,
    "data-testid": _tests.testIds.controlsNextBtn,
    onClick: handlerClickNext
  }, '>'));
};

var _default = /*#__PURE__*/React.memo(Controls);

exports.default = _default;
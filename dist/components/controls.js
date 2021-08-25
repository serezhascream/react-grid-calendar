"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _constants = require("data/constants");

var _tests = require("data/tests");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Controls = _ref => {
  let {
    active,
    activeView,
    onSwitchDirection,
    onSwitchView
  } = _ref;
  const monthTitle = React.useMemo(() => _constants.MONTHS_TITLES[active.month], [active]);
  const blockedArrowsClass = React.useMemo(() => activeView === 'year' ? ' rgc-calendar__btn--blocked' : '', [activeView]);
  const handlerClickPrev = React.useCallback(() => onSwitchDirection('prev'), [onSwitchDirection]);
  const handlerClickNext = React.useCallback(() => onSwitchDirection('next'), [onSwitchDirection]);
  const handlerClickOnMonth = React.useCallback(() => onSwitchView('year'), [onSwitchView]);
  const handlerClickOnYear = React.useCallback(() => onSwitchView('decade'), [onSwitchView]);
  return <div className="rgc-calendar__controls" data-testid={_tests.testIds.controls}>
			<span className={"rgc-calendar__btn rgc-calendar__btn-prev".concat(blockedArrowsClass)} data-testid={_tests.testIds.controlsPrevBtn} onClick={handlerClickPrev}>{'<'}</span>
			<span className="rgc-calendar__controls-month" data-testid={_tests.testIds.controlsMonthTitle} onClick={handlerClickOnMonth}>
				{monthTitle}
			</span>
			<span className="rgc-calendar__controls-year" data-testid={_tests.testIds.controlsYearTitle} onClick={handlerClickOnYear}>
				{active.year}
			</span>
			<span className={"rgc-calendar__btn rgc-calendar__btn-next".concat(blockedArrowsClass)} data-testid={_tests.testIds.controlsNextBtn} onClick={handlerClickNext}>{'>'}</span>
		</div>;
};

var _default = React.memo(Controls);

exports.default = _default;
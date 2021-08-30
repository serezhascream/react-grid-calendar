"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _tests = require("../../data/tests");

var _classes = require("../../utils/classes");

var _arrowButton = _interopRequireDefault(require("./arrowButton"));

var _viewButton = _interopRequireDefault(require("./viewButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  const CControls = (0, _classes.getClasses)(['calendar__controls'], classPrefix);
  const monthTitle = React.useMemo(() => monthTitles[active.month], [active, monthTitles]);
  const handlerSwitchDirection = React.useCallback(direction => onSwitchDirection(direction), [onSwitchDirection]);
  const handlerSwitchView = React.useCallback(view => onSwitchView(view), [onSwitchView]);
  return /*#__PURE__*/React.createElement("div", {
    className: CControls,
    "data-testid": _tests.testIds.controls
  }, /*#__PURE__*/React.createElement(_arrowButton.default, {
    direction: "prev",
    activeView: activeView,
    classPrefix: classPrefix,
    onClick: handlerSwitchDirection
  }), /*#__PURE__*/React.createElement(_viewButton.default, {
    title: monthTitle,
    view: "month",
    targetView: "year",
    classPrefix: classPrefix,
    onClick: handlerSwitchView
  }), /*#__PURE__*/React.createElement(_viewButton.default, {
    title: active.year,
    view: "year",
    targetView: "decade",
    classPrefix: classPrefix,
    onClick: handlerSwitchView
  }), /*#__PURE__*/React.createElement(_arrowButton.default, {
    direction: "next",
    activeView: activeView,
    classPrefix: classPrefix,
    onClick: handlerSwitchDirection
  }));
};

var _default = /*#__PURE__*/React.memo(Controls);

exports.default = _default;
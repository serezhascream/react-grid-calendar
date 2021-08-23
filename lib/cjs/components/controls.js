"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var constants_1 = require("data/constants");
var tests_1 = require("data/tests");
var Controls = function (_a) {
    var active = _a.active, activeView = _a.activeView, onSwitchDirection = _a.onSwitchDirection, onSwitchView = _a.onSwitchView;
    var monthTitle = React.useMemo(function () { return (constants_1.MONTHS_TITLES[active.month]); }, [active]);
    var blockedArrowsClass = React.useMemo(function () { return (activeView === 'year' ? ' rgc-calendar__btn--blocked' : ''); }, [activeView]);
    var handlerClickPrev = React.useCallback(function () { return onSwitchDirection('prev'); }, [onSwitchDirection]);
    var handlerClickNext = React.useCallback(function () { return onSwitchDirection('next'); }, [onSwitchDirection]);
    var handlerClickOnMonth = React.useCallback(function () { return onSwitchView('year'); }, [onSwitchView]);
    var handlerClickOnYear = React.useCallback(function () { return onSwitchView('decade'); }, [onSwitchView]);
    return (React.createElement("div", { className: "rgc-calendar__controls", "data-testid": tests_1.testIds.controls },
        React.createElement("span", { className: "rgc-calendar__btn rgc-calendar__btn-prev" + blockedArrowsClass, "data-testid": tests_1.testIds.controlsPrevBtn, onClick: handlerClickPrev }, '<'),
        React.createElement("span", { className: "rgc-calendar__controls-month", "data-testid": tests_1.testIds.controlsMonthTitle, onClick: handlerClickOnMonth }, monthTitle),
        React.createElement("span", { className: "rgc-calendar__controls-year", "data-testid": tests_1.testIds.controlsYearTitle, onClick: handlerClickOnYear }, active.year),
        React.createElement("span", { className: "rgc-calendar__btn rgc-calendar__btn-next" + blockedArrowsClass, "data-testid": tests_1.testIds.controlsNextBtn, onClick: handlerClickNext }, '>')));
};
exports.default = React.memo(Controls);

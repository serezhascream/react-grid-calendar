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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var tests_1 = require("../data/tests");
var weekdayTitles_1 = __importDefault(require("./weekdayTitles"));
var day_1 = __importDefault(require("./day"));
var MonthView = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, activeView = _a.activeView, firstDayIsMonday = _a.firstDayIsMonday, onClick = _a.onClick;
    var handlerClick = React.useCallback(function (day) { return onClick(day); }, [onClick]);
    if (activeView !== 'month') {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(weekdayTitles_1.default, { firstDayIsMonday: firstDayIsMonday }),
        React.createElement("div", { className: "rgc-calendar__month", "data-testid": tests_1.testIds.monthView }, data.map(function (day) { return (React.createElement(day_1.default, { key: day.timestamp, day: day, onClick: handlerClick })); }))));
};
exports.default = React.memo(MonthView);

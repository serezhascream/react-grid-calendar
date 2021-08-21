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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var constants_1 = require("../data/constants");
var tests_1 = require("../data/tests");
var WeekdayTitles = function (_a) {
    var firstDayIsMonday = _a.firstDayIsMonday;
    var titles = React.useMemo(function () {
        if (firstDayIsMonday) {
            return constants_1.WEEKDAY_TITLES;
        }
        return __spreadArray(['sun'], constants_1.WEEKDAY_TITLES.slice(0, -1));
    }, [firstDayIsMonday]);
    var weekend_days = React.useMemo(function () { return (firstDayIsMonday ? [5, 6] : [0, 6]); }, [firstDayIsMonday]);
    return (React.createElement("div", { className: "rgc-calendar__weekday-titles", "data-testid": tests_1.testIds.weekdayTitles }, titles.map(function (day, i) {
        var classes = classnames_1.default('rgc-calendar__weekday-day', { 'rgc-calendar__weekday-day--weekend': weekend_days.includes(i) });
        return (React.createElement("span", { key: day, className: classes }, day));
    })));
};
exports.default = React.memo(WeekdayTitles);

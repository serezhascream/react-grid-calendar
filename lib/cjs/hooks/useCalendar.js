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
exports.useCalendar = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var useCalendar = function (selectedDay, markers, firstDayIsMonday) {
    if (selectedDay === void 0) { selectedDay = null; }
    if (firstDayIsMonday === void 0) { firstDayIsMonday = true; }
    var activeYearMonth = utils_1.getYearAndMonth();
    var _a = React.useState(activeYearMonth), active = _a[0], setActive = _a[1];
    var _b = React.useState(selectedDay), selected = _b[0], setSelected = _b[1];
    var data = React.useMemo(function () { return utils_1.getCalendarData(active, selected, markers, firstDayIsMonday); }, [active, selected, firstDayIsMonday]);
    var handlerSetSelected = React.useCallback(function (day) { return setSelected(day); }, [setSelected]);
    var handlerSetActive = React.useCallback(function (active) { return setActive(active); }, [setActive]);
    var handlerSwitchMonth = React.useCallback(function (direction) {
        var year = active.year, month = active.month;
        if (direction === 'prev') {
            var newActive = utils_1.getPrev(year, month);
            setActive(newActive);
            return;
        }
        if (direction === 'next') {
            var newActive = utils_1.getNext(year, month);
            setActive(newActive);
            return;
        }
    }, [active]);
    return {
        active: active,
        data: data,
        setActive: handlerSetActive,
        setSelected: handlerSetSelected,
        switchMonth: handlerSwitchMonth,
    };
};
exports.useCalendar = useCalendar;
exports.default = exports.useCalendar;

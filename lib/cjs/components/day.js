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
var classnames_1 = __importDefault(require("classnames"));
var tests_1 = require("../data/tests");
var Day = function (_a) {
    var day = _a.day, onClick = _a.onClick;
    var classes = React.useMemo(function () {
        var _a;
        return classnames_1.default('rgc-calendar__day', (_a = {
                'rgc-calendar__day--today': day.isToday
            },
            _a["rgc-calendar__day--" + day.month] = day.month !== 'current',
            _a['rgc-calendar__day--weekend'] = day.isWeekend,
            _a['rgc-calendar__day--selected'] = day.isSelected,
            _a['rgc-calendar__day--has-marker'] = day.hasMarker,
            _a));
    }, [day]);
    var handlerClick = React.useCallback(function () { return onClick(day); }, [onClick, day]);
    return (React.createElement("span", { key: day.timestamp, className: classes, onClick: handlerClick, "data-testid": tests_1.testIds.day }, day.day));
};
exports.default = React.memo(Day);

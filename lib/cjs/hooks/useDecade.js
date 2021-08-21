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
exports.useDecade = exports.getDecade = void 0;
var React = __importStar(require("react"));
var getDecade = function (year) {
    var decade = [];
    var firstYear = year - (year % 10);
    var lastYear = firstYear + 9;
    for (var i = firstYear; i <= lastYear; i++) {
        decade.push(i);
    }
    return decade;
};
exports.getDecade = getDecade;
var useDecade = function (currentYear) {
    var _a = React.useState(function () { return exports.getDecade(currentYear); }), decade = _a[0], setDecade = _a[1];
    var handlerSwitchDecade = React.useCallback(function (direction) {
        if (direction === 'prev') {
            setDecade(exports.getDecade(decade[0] - 10));
            return;
        }
        setDecade(exports.getDecade(decade[0] + 10));
    }, [decade]);
    return { decade: decade, switchDecade: handlerSwitchDecade };
};
exports.useDecade = useDecade;
exports.default = exports.useDecade;

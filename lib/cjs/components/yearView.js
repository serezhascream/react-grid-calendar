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
var constants_1 = require("../data/constants");
var tests_1 = require("../data/tests");
var monthItem_1 = __importDefault(require("./monthItem"));
var YearView = function (_a) {
    var onClick = _a.onClick, activeView = _a.activeView;
    var handlerClick = React.useCallback(function (index) { return onClick(index); }, [onClick]);
    if (activeView !== 'year') {
        return null;
    }
    return (React.createElement("div", { className: "rgc-calendar__year", "data-testid": tests_1.testIds.yearView }, constants_1.MONTHS_TITLES.map(function (title, i) { return (React.createElement(monthItem_1.default, { key: title, title: title, index: i, onClick: handlerClick })); })));
};
exports.default = React.memo(YearView);

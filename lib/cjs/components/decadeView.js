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
var yearItem_1 = __importDefault(require("./yearItem"));
var DecadeView = function (_a) {
    var decade = _a.decade, activeView = _a.activeView, onClick = _a.onClick;
    var handlerClick = React.useCallback(function (year) { return onClick(year); }, [onClick]);
    if (activeView !== 'decade') {
        return null;
    }
    return (React.createElement("div", { className: "rgc-calendar__decade", "data-testid": tests_1.testIds.decadeView }, decade.map(function (year) { return (React.createElement(yearItem_1.default, { key: year, year: year, onClick: handlerClick })); })));
};
exports.default = React.memo(DecadeView);

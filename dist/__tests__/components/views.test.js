"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _decadeView = _interopRequireDefault(require("components/decadeView"));

var _yearView = _interopRequireDefault(require("components/yearView"));

var _monthView = _interopRequireDefault(require("components/monthView"));

var _fixture = require("data/fixture");

var _tests = require("data/tests");

var _index = require("utils/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('components > calendar > DecadeView', () => {
  it('renders', () => {
    (0, _react2.render)( /*#__PURE__*/React.createElement(_decadeView.default, {
      decade: _fixture.nineties_decade,
      activeView: "decade",
      onClick: () => {}
    }));
    expect(_react2.screen.getByTestId(_tests.testIds.decadeView)).toBeInTheDocument();
  });
});
describe('components > calendar > YearView', () => {
  it('renders', () => {
    (0, _react2.render)( /*#__PURE__*/React.createElement(_yearView.default, {
      activeView: "year",
      onClick: () => {}
    }));
    expect(_react2.screen.getByTestId(_tests.testIds.yearView)).toBeInTheDocument();
  });
});
describe('components > calendar > MonthView', () => {
  it('renders', () => {
    const calendarData = (0, _index.getCalendarData)(_fixture.may2021, null, [], true);
    (0, _react2.render)( /*#__PURE__*/React.createElement(_monthView.default, {
      data: calendarData,
      activeView: "month",
      firstDayIsMonday: true,
      onClick: () => {}
    }));
    expect(_react2.screen.getByTestId(_tests.testIds.monthView)).toBeInTheDocument();
  });
});
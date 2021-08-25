"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _weekdayTitles = _interopRequireDefault(require("components/weekdayTitles"));

var _tests = require("data/tests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('components > calendar > WeekdayTitles', () => {
  it('renders', () => {
    (0, _react2.render)( /*#__PURE__*/React.createElement(_weekdayTitles.default, {
      firstDayIsMonday: true
    }));

    const titles = _react2.screen.getByTestId(_tests.testIds.weekdayTitles);

    expect(titles).toBeInTheDocument();
  });
  it('renders correctly when week starts on monday', () => {
    (0, _react2.render)( /*#__PURE__*/React.createElement(_weekdayTitles.default, {
      firstDayIsMonday: true
    }));

    const titles = _react2.screen.getByTestId(_tests.testIds.weekdayTitles);

    expect(titles.children[0].textContent).toEqual('mon');
  });
  it('renders correctly when week starts on sunday', () => {
    (0, _react2.render)( /*#__PURE__*/React.createElement(_weekdayTitles.default, {
      firstDayIsMonday: false
    }));

    const titles = _react2.screen.getByTestId(_tests.testIds.weekdayTitles);

    expect(titles.children[0].textContent).toEqual('sun');
  });
});
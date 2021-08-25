"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _monthItem = _interopRequireDefault(require("components/monthItem"));

var _tests = require("data/tests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('components > calendar > MonthItem', () => {
  it('renders', () => {
    (0, _react2.render)(<_monthItem.default title="March" index={2} onClick={() => {}} />);
    expect(_react2.screen.getByTestId(_tests.testIds.monthItem)).toBeInTheDocument();
  });
  it('returns correct value on click', () => {
    const handlerClick = jest.fn(index => index);
    (0, _react2.render)(<_monthItem.default title="March" index={2} onClick={handlerClick} />);

    _userEvent.default.click(_react2.screen.getByTestId(_tests.testIds.monthItem));

    expect(handlerClick).toHaveBeenCalledWith(2);
  });
});
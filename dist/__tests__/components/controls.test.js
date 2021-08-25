"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _fixture = require("data/fixture");

var _tests = require("data/tests");

var _controls = _interopRequireDefault(require("components/controls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  controls,
  controlsPrevBtn,
  controlsNextBtn,
  controlsYearTitle,
  controlsMonthTitle
} = _tests.testIds;
describe('components > calendar > Controls', () => {
  it('renders correctly', () => {
    (0, _react2.render)(<_controls.default active={_fixture.feb2021} activeView="month" onSwitchDirection={() => {}} onSwitchView={() => {}} />);
    expect(_react2.screen.getByTestId(controls)).toBeInTheDocument();
    expect(_react2.screen.getByTestId(controlsPrevBtn)).toBeInTheDocument();
    expect(_react2.screen.getByTestId(controlsNextBtn)).toBeInTheDocument();
    expect(_react2.screen.getByTestId(controlsMonthTitle)).toBeInTheDocument();
    expect(_react2.screen.getByTestId(controlsYearTitle)).toBeInTheDocument();
  });
  it('has blocked arrows when active view is year', () => {
    (0, _react2.render)(<_controls.default active={_fixture.feb2021} activeView="year" onSwitchDirection={() => {}} onSwitchView={() => {}} />);
    expect(_react2.screen.getByTestId(controlsPrevBtn)).toHaveClass('rgc-calendar__btn--blocked');
    expect(_react2.screen.getByTestId(controlsNextBtn)).toHaveClass('rgc-calendar__btn--blocked');
  });
  it('click on month title works', () => {
    const handlerSwitchView = jest.fn(view => view);
    (0, _react2.render)(<_controls.default active={_fixture.feb2021} activeView="month" onSwitchDirection={() => {}} onSwitchView={handlerSwitchView} />);

    _userEvent.default.click(_react2.screen.getByTestId(controlsMonthTitle));

    expect(handlerSwitchView).toHaveBeenCalledWith('year');
  });
  it('click on year title works', () => {
    const handlerSwitchView = jest.fn(view => view);
    (0, _react2.render)(<_controls.default active={_fixture.feb2021} activeView="month" onSwitchDirection={() => {}} onSwitchView={handlerSwitchView} />);

    _userEvent.default.click(_react2.screen.getByTestId(controlsYearTitle));

    expect(handlerSwitchView).toHaveBeenCalledWith('decade');
  });
  it('click on arrows works', () => {
    const handlerSwitchDirection = jest.fn(direction => direction);
    (0, _react2.render)(<_controls.default active={_fixture.feb2021} activeView="month" onSwitchDirection={handlerSwitchDirection} onSwitchView={() => {}} />);

    _userEvent.default.click(_react2.screen.getByTestId(controlsPrevBtn));

    expect(handlerSwitchDirection).toHaveBeenCalledWith('prev');
    handlerSwitchDirection.mockClear();

    _userEvent.default.click(_react2.screen.getByTestId(controlsNextBtn));

    expect(handlerSwitchDirection).toHaveBeenCalledWith('next');
  });
});
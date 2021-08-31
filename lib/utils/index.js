"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCalendarData = exports.getWeekdays = exports.getDaysArray = exports.getIsSelected = exports.getMonthType = exports.getEnd = exports.getStart = exports.getNumOfDaysInMonth = exports.getNext = exports.getPrev = exports.isWeekend = exports.getWeekday = exports.isToday = exports.getYearAndMonth = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/web.dom-collections.iterator.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getYearAndMonth = function getYearAndMonth() {
  let initialDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  const activeDate = initialDate || new Date(Date.now());
  return {
    month: activeDate.getMonth(),
    year: activeDate.getFullYear()
  };
};

exports.getYearAndMonth = getYearAndMonth;

const isToday = (year, month, day) => {
  const today = new Date(Date.now());
  return today.getFullYear() === year && today.getMonth() + 1 === month + 1 && today.getDate() === day;
};

exports.isToday = isToday;

const getWeekday = options => {
  const {
    requested,
    day,
    firstDayIsMonday
  } = options;
  const weekday = new Date(requested.year, requested.month, day).getDay();

  if (firstDayIsMonday) {
    return weekday === 0 ? 6 : weekday - 1;
  }

  return weekday;
};

exports.getWeekday = getWeekday;

const isWeekend = (weekday, firstDayIsMonday) => {
  const weekends = firstDayIsMonday ? [5, 6] : [0, 6];
  return weekends.includes(weekday);
};

exports.isWeekend = isWeekend;

const getPrev = _ref => {
  let {
    year,
    month
  } = _ref;
  return {
    year: month === 0 ? year - 1 : year,
    month: month === 0 ? 11 : month - 1
  };
};

exports.getPrev = getPrev;

const getNext = _ref2 => {
  let {
    year,
    month
  } = _ref2;
  return {
    year: month === 11 ? year + 1 : year,
    month: month === 11 ? 0 : month + 1
  };
};

exports.getNext = getNext;

const getNumOfDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

exports.getNumOfDaysInMonth = getNumOfDaysInMonth;

const getStart = (_ref3, firstWeekday) => {
  let {
    year,
    month
  } = _ref3;
  const daysInPrevMonth = getNumOfDaysInMonth(year, month);
  return daysInPrevMonth - firstWeekday + 1;
};

exports.getStart = getStart;

const getEnd = lastWeekday => 6 - lastWeekday;

exports.getEnd = getEnd;

const getMonthType = options => {
  const {
    requested,
    active
  } = options;

  if (requested.year < active.year || requested.month < active.month) {
    return 'prev';
  }

  if (requested.year > active.year || requested.month > active.month) {
    return 'next';
  }

  return 'current';
};

exports.getMonthType = getMonthType;

const getIsSelected = (_ref4, day, selected) => {
  let {
    year,
    month
  } = _ref4;

  if (!selected) {
    return false;
  }

  const {
    year: selectedYear,
    month: selectedMonth
  } = getYearAndMonth(selected);
  const selectedDay = selected.getDate();
  return year === selectedYear && month === selectedMonth && selectedDay === day;
};

exports.getIsSelected = getIsSelected;

const getDaysArray = options => {
  const {
    requested,
    active,
    selected = null,
    markers = [],
    start = 1,
    end = null,
    firstDayIsMonday = true
  } = options;
  const days = [];
  const lastDay = end || getNumOfDaysInMonth(requested.year, requested.month);

  for (let day = start; day <= lastDay; day++) {
    const date = new Date(requested.year, requested.month, day);
    const weekday = getWeekday({
      requested,
      day,
      firstDayIsMonday
    });
    const timestamp = date.getTime();
    days.push({
      day,
      date,
      month: getMonthType({
        requested,
        active
      }),
      timestamp,
      isToday: isToday(requested.year, requested.month, day),
      isWeekend: isWeekend(weekday, firstDayIsMonday),
      weekday,
      isSelected: getIsSelected(requested, day, selected),
      hasMarker: markers.includes(date)
    });
  }

  return days;
};

exports.getDaysArray = getDaysArray;

const getWeekdays = options => {
  const {
    requested,
    firstDayIsMonday
  } = options;
  const lastDate = getNumOfDaysInMonth(requested.year, requested.month);
  return {
    first: getWeekday({
      requested,
      day: 1,
      firstDayIsMonday
    }),
    last: getWeekday({
      requested,
      day: lastDate,
      firstDayIsMonday
    })
  };
};

exports.getWeekdays = getWeekdays;

const getCalendarData = options => {
  const {
    active,
    firstDayIsMonday = true
  } = options;
  const weekdays = getWeekdays({
    requested: active,
    firstDayIsMonday
  });
  const data = [];

  if (weekdays.first > 0) {
    const prev = getPrev(active);
    const prevDaysArray = getDaysArray(_objectSpread({
      requested: prev,
      start: getStart(prev, weekdays.first)
    }, options));
    data.push(...prevDaysArray);
  }

  data.push(...getDaysArray(_objectSpread({
    requested: active
  }, options)));

  if (weekdays.last < 6) {
    const nextDaysArray = getDaysArray(_objectSpread({
      requested: getNext(active),
      end: getEnd(weekdays.last)
    }, options));
    data.push(...nextDaysArray);
  }

  return data;
};

exports.getCalendarData = getCalendarData;
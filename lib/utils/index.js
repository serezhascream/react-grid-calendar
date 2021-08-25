"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCalendarData = exports.getDaysArray = exports.getIsSelected = exports.getMonthType = exports.getEnd = exports.getStart = exports.getNumOfDaysInMonth = exports.getNext = exports.getPrev = exports.isWeekend = exports.getWeekday = exports.isToday = exports.getYearAndMonth = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/web.dom-collections.iterator.js");

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

const getWeekday = (year, month, day, firstDayIsMonday) => {
  const weekday = new Date(year, month, day).getDay();

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

const getPrev = (year, month) => {
  return {
    year: month === 0 ? year - 1 : year,
    month: month === 0 ? 11 : month - 1
  };
};

exports.getPrev = getPrev;

const getNext = (year, month) => {
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

const getStart = (_ref, firstWeekday) => {
  let {
    year,
    month
  } = _ref;
  const daysInPrevMonth = getNumOfDaysInMonth(year, month);
  return daysInPrevMonth - firstWeekday + 1;
};

exports.getStart = getStart;

const getEnd = lastWeekday => 6 - lastWeekday;

exports.getEnd = getEnd;

const getMonthType = (year, month, activeYear, activeMonth) => {
  if (year < activeYear || month < activeMonth) {
    return 'prev';
  }

  if (year > activeYear || month > activeMonth) {
    return 'next';
  }

  return 'current';
};

exports.getMonthType = getMonthType;

const getIsSelected = (year, month, day, selected) => {
  if (!selected) {
    return false;
  }

  const selectedDate = new Date(selected.timestamp);
  const {
    year: selectedYear,
    month: selectedMonth
  } = getYearAndMonth(selectedDate);
  return year === selectedYear && month === selectedMonth && selected.day === day;
};

exports.getIsSelected = getIsSelected;

const getDaysArray = function getDaysArray(_ref2, _ref3, selected, markers) {
  let {
    year,
    month
  } = _ref2;
  let {
    year: activeYear,
    month: activeMonth
  } = _ref3;
  let start = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  let end = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  let firstDayIsMonday = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  const days = [];
  const lastDay = end || getNumOfDaysInMonth(year, month);

  for (let i = start; i <= lastDay; i++) {
    const date = new Date(year, month, i);
    const weekday = getWeekday(year, month, i, firstDayIsMonday);
    const monthType = getMonthType(year, month, activeYear, activeMonth);
    const isSelected = selected ? getIsSelected(year, month, i, selected) : false;
    const timestamp = date.getTime();
    const hasMarker = markers.includes(timestamp);
    days.push({
      day: i,
      month: monthType,
      timestamp,
      isToday: isToday(year, month, i),
      isWeekend: isWeekend(weekday, firstDayIsMonday),
      weekday,
      isSelected,
      hasMarker
    });
  }

  return days;
};

exports.getDaysArray = getDaysArray;

const getCalendarData = (active, selected, markers, firstDayIsMonday) => {
  const data = [];
  const {
    month,
    year
  } = active;
  const firstWeekday = getWeekday(year, month, 1, firstDayIsMonday);
  const lastWeekday = getWeekday(year, month, getNumOfDaysInMonth(year, month), firstDayIsMonday);

  if (firstWeekday > 0) {
    const prev = getPrev(year, month);
    const start = getStart(prev, firstWeekday);
    const prevDaysArray = getDaysArray(prev, active, selected, markers, start, null, firstDayIsMonday);
    data.push(...prevDaysArray);
  }

  data.push(...getDaysArray({
    year,
    month
  }, active, selected, markers, 1, null, firstDayIsMonday));

  if (lastWeekday < 6) {
    const next = getNext(year, month);
    const end = getEnd(lastWeekday);
    const nextDaysArray = getDaysArray(next, active, selected, markers, 1, end, firstDayIsMonday);
    data.push(...nextDaysArray);
  }

  return data;
};

exports.getCalendarData = getCalendarData;
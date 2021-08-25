"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalendarData = exports.getDaysArray = exports.getIsSelected = exports.getMonthType = exports.getEnd = exports.getStart = exports.getNumOfDaysInMonth = exports.getNext = exports.getPrev = exports.isWeekend = exports.getWeekday = exports.isToday = exports.getYearAndMonth = void 0;
var getYearAndMonth = function (initialDate) {
    if (initialDate === void 0) { initialDate = null; }
    var activeDate = initialDate || new Date(Date.now());
    return {
        month: activeDate.getMonth(),
        year: activeDate.getFullYear(),
    };
};
exports.getYearAndMonth = getYearAndMonth;
var isToday = function (year, month, day) {
    var today = new Date(Date.now());
    return today.getFullYear() === year && today.getMonth() + 1 === month + 1 && today.getDate() === day;
};
exports.isToday = isToday;
var getWeekday = function (year, month, day, firstDayIsMonday) {
    var weekday = new Date(year, month, day).getDay();
    if (firstDayIsMonday) {
        return weekday === 0 ? 6 : weekday - 1;
    }
    return weekday;
};
exports.getWeekday = getWeekday;
var isWeekend = function (weekday, firstDayIsMonday) {
    var weekends = firstDayIsMonday ? [5, 6] : [0, 6];
    return weekends.includes(weekday);
};
exports.isWeekend = isWeekend;
var getPrev = function (year, month) {
    return {
        year: month === 0 ? year - 1 : year,
        month: month === 0 ? 11 : month - 1,
    };
};
exports.getPrev = getPrev;
var getNext = function (year, month) {
    return {
        year: month === 11 ? year + 1 : year,
        month: month === 11 ? 0 : month + 1,
    };
};
exports.getNext = getNext;
var getNumOfDaysInMonth = function (year, month) {
    return new Date(year, month + 1, 0).getDate();
};
exports.getNumOfDaysInMonth = getNumOfDaysInMonth;
var getStart = function (_a, firstWeekday) {
    var year = _a.year, month = _a.month;
    var daysInPrevMonth = exports.getNumOfDaysInMonth(year, month);
    return daysInPrevMonth - firstWeekday + 1;
};
exports.getStart = getStart;
var getEnd = function (lastWeekday) { return (6 - lastWeekday); };
exports.getEnd = getEnd;
var getMonthType = function (year, month, activeYear, activeMonth) {
    if (year < activeYear || month < activeMonth) {
        return 'prev';
    }
    if (year > activeYear || month > activeMonth) {
        return 'next';
    }
    return 'current';
};
exports.getMonthType = getMonthType;
var getIsSelected = function (year, month, day, selected) {
    if (!selected) {
        return false;
    }
    var selectedDate = new Date(selected.timestamp);
    var _a = exports.getYearAndMonth(selectedDate), selectedYear = _a.year, selectedMonth = _a.month;
    return year === selectedYear && month === selectedMonth && selected.day === day;
};
exports.getIsSelected = getIsSelected;
var getDaysArray = function (_a, _b, selected, markers, start, end, firstDayIsMonday) {
    var year = _a.year, month = _a.month;
    var activeYear = _b.year, activeMonth = _b.month;
    if (start === void 0) { start = 1; }
    if (end === void 0) { end = null; }
    if (firstDayIsMonday === void 0) { firstDayIsMonday = true; }
    var days = [];
    var lastDay = end || exports.getNumOfDaysInMonth(year, month);
    for (var i = start; i <= lastDay; i++) {
        var date = new Date(year, month, i);
        var weekday = exports.getWeekday(year, month, i, firstDayIsMonday);
        var monthType = exports.getMonthType(year, month, activeYear, activeMonth);
        var isSelected = selected ? exports.getIsSelected(year, month, i, selected) : false;
        var timestamp = date.getTime();
        var hasMarker = markers.includes(timestamp);
        days.push({
            day: i,
            month: monthType,
            timestamp: timestamp,
            isToday: exports.isToday(year, month, i),
            isWeekend: exports.isWeekend(weekday, firstDayIsMonday),
            weekday: weekday,
            isSelected: isSelected,
            hasMarker: hasMarker,
        });
    }
    return days;
};
exports.getDaysArray = getDaysArray;
var getCalendarData = function (active, selected, markers, firstDayIsMonday) {
    var data = [];
    var month = active.month, year = active.year;
    var firstWeekday = exports.getWeekday(year, month, 1, firstDayIsMonday);
    var lastWeekday = exports.getWeekday(year, month, exports.getNumOfDaysInMonth(year, month), firstDayIsMonday);
    if (firstWeekday > 0) {
        var prev = exports.getPrev(year, month);
        var start = exports.getStart(prev, firstWeekday);
        var prevDaysArray = exports.getDaysArray(prev, active, selected, markers, start, null, firstDayIsMonday);
        data.push.apply(data, prevDaysArray);
    }
    data.push.apply(data, exports.getDaysArray({ year: year, month: month }, active, selected, markers, 1, null, firstDayIsMonday));
    if (lastWeekday < 6) {
        var next = exports.getNext(year, month);
        var end = exports.getEnd(lastWeekday);
        var nextDaysArray = exports.getDaysArray(next, active, selected, markers, 1, end, firstDayIsMonday);
        data.push.apply(data, nextDaysArray);
    }
    return data;
};
exports.getCalendarData = getCalendarData;
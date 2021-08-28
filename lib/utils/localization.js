"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocalizedNames = exports.capitalize = void 0;
;
;

const capitalize = word => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

exports.capitalize = capitalize;

const getMonthsNames = locale => {
  const names = [];

  for (let i = 0; i < 12; i++) {
    const date = new Date(Date.UTC(2021, i, 1));
    const month = date.toLocaleDateString(locale, {
      month: 'long'
    });
    names.push(capitalize(month));
  }

  return names;
};

const getWeekdaysNames = options => {
  const day = Number(options.firstDayIsMonday);
  const date = new Date(Date.UTC(2021, 1, day));
  const names = [];

  for (let i = 0; i < 7; i++) {
    const weekday = date.toLocaleDateString(options.locale, {
      weekday: 'short'
    });
    names.push(capitalize(weekday));
    date.setDate(date.getDate() + 1);
  }

  return names;
};

const getLocalizedNames = options => ({
  weekdays: getWeekdaysNames(options),
  months: getMonthsNames(options.locale)
});

exports.getLocalizedNames = getLocalizedNames;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDayClasses = exports.getArrowButtonClass = exports.getConditionalClasses = exports.getClasses = exports.getPrefixes = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.reduce.js");

const defaultClassPrefix = 'rgc';

const getPrefixes = prefix => {
  if (!prefix) {
    return [defaultClassPrefix];
  }

  if (typeof prefix === 'string') {
    return [defaultClassPrefix, prefix];
  }

  return [defaultClassPrefix, ...prefix];
};

exports.getPrefixes = getPrefixes;

const getClasses = (classes, prefix) => {
  const prefixes = getPrefixes(prefix);
  const classNames = prefixes.reduce((acc, prefix) => {
    const cn = classes.reduce((prev, className) => [...prev, "".concat(prefix, "-").concat(className)], []);
    return [...acc, ...cn];
  }, []);
  return classNames.join(' ');
};

exports.getClasses = getClasses;

const getConditionalClasses = classesObject => {
  return Object.keys(classesObject).filter(key => !!classesObject[key]);
};

exports.getConditionalClasses = getConditionalClasses;

const getArrowButtonClass = (btn, classPrefix, activeView) => {
  const buttonClasses = ['calendar__btn', "calendar__btn-".concat(btn)];

  if (activeView === 'year') {
    buttonClasses.push('calendar__btn--blocked');
  }

  return getClasses(buttonClasses, classPrefix);
};

exports.getArrowButtonClass = getArrowButtonClass;

const getDayClasses = (day, classPrefix) => {
  const conditionalClasses = getConditionalClasses({
    'calendar__day--today': day.isToday,
    ["calendar__day--".concat(day.month)]: day.month !== 'current',
    'calendar__day--weekend': day.isWeekend,
    'calendar__day--selected': day.isSelected,
    'calendar__day--has-marker': day.hasMarker
  });
  const classes = ['calendar__day', ...conditionalClasses];
  return getClasses(classes, classPrefix);
};

exports.getDayClasses = getDayClasses;
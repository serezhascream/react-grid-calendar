"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarkedDays = exports.getTimestamps = exports.getUniqueValues = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

const getUniqueValues = arr => {
  const set = new Set(arr);
  return [...set];
};

exports.getUniqueValues = getUniqueValues;

const getTimestamps = marker => {
  const year = marker.getFullYear();
  const month = marker.getMonth();
  const day = marker.getDate();
  const date = new Date(year, month, day);
  return date.getTime();
};

exports.getTimestamps = getTimestamps;

const getMarkedDays = markers => {
  if (!markers.length) {
    return [];
  }

  const timestamps = markers.map(marker => getTimestamps(marker));
  return getUniqueValues(timestamps);
};

exports.getMarkedDays = getMarkedDays;
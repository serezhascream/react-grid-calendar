"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarkedDays = exports.getModifiedMarker = exports.getUniqueValues = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

const getUniqueValues = arr => {
  const set = new Set(arr);
  return [...set];
};

exports.getUniqueValues = getUniqueValues;

const getModifiedMarker = marker => {
  const year = marker.getFullYear();
  const month = marker.getMonth();
  const day = marker.getDate();
  return new Date(year, month, day);
};

exports.getModifiedMarker = getModifiedMarker;

const getMarkedDays = markers => {
  if (!markers.length) {
    return [];
  }

  const modifiedMarkers = markers.map(marker => getModifiedMarker(marker));
  return getUniqueValues(modifiedMarkers);
};

exports.getMarkedDays = getMarkedDays;
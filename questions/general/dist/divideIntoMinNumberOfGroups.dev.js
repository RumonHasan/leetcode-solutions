"use strict";

var divide = function divide(intervals) {
  var array = function array(len) {
    return new Array(len).fill(0);
  };

  var min = -Infinity;
  var counter = 0;
  var start = array(intervals.length);
  var end = array(intervals.length);

  for (var intervalIndex in intervals) {
    var interval = intervals[intervalIndex];
    start[intervalIndex] = interval[0];
    end[intervalIndex] = interval[1];
  }

  start.sort(function (a, b) {
    return a - b;
  });
  end.sort(function (a, b) {
    return a - b;
  });
  var startPointer = 0;
  var endPointer = 0; // finding the max interval

  while (startPointer < start.length && endPointer < end.length) {
    var currStart = start[startPointer];
    var currEnd = end[endPointer];

    if (currStart <= currEnd) {
      counter++;
      startPointer++;
    } else {
      // if start is bigger meaning there is an entrance of new interval so moving the end pointer
      counter--;
      endPointer++;
    }

    min = Math.max(min, counter);
  }

  return min;
};

console.log(divide([[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]));
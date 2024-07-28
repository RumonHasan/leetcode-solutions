"use strict";

var removeCoveredInterval = function removeCoveredInterval(intervals) {
  intervals.sort(function (a, b) {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  var stack = [];

  for (var i = 0; i < intervals.length; i++) {
    var currInterval = intervals[i];

    if (stack.length && stack[stack.length - 1][0] <= currInterval[0] && stack[stack.length - 1][1] >= currInterval[1]) {
      continue; // just skip if its covered since one of them covered means the ones coming after will also be covered
    } else {
      stack.push(currInterval);
    }
  }

  return stack.length;
}; // console.log(
//   removeCoveredInterval([
//     [1, 4],
//     [1, 2],
//     [3, 4],
//   ])
// );
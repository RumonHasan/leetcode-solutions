"use strict";

var nonOverlappingIntervals = function nonOverlappingIntervals(intervals) {
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  var stack = [intervals[0]];

  for (var i = 1; i < intervals.length; i++) {
    var currInterval = intervals[i];

    if (stack.length && stack[stack.length - 1][1] > currInterval[0]) {
      if (stack[stack.length - 1][1] > currInterval[1]) {
        // removes the one with bigger ending range in order to preserve vals
        stack.pop();
        stack.push(currInterval);
      }
    } else if (stack[stack.length - 1][1] <= currInterval[0]) {
      // here its only gonna push since we dont need to worry about the new end limit
      stack.push(currInterval);
    }
  }

  return intervals.length - stack.length;
}; // console.log(
//   nonOverlappingIntervals([
//     [-3035, 30075],
//     [1937, 6906],
//     [11834, 20971],
//     [44578, 45600],
//     [28565, 37578],
//     [19621, 34415],
//     [32985, 36313],
//     [-8144, 1080],
//     [-15279, 21851],
//     [-27140, -14703],
//     [-12098, 16264],
//     [-36057, -16287],
//     [47939, 48626],
//     [-15129, -5773],
//     [10508, 46685],
//     [-35323, -26257],
//   ])
// );
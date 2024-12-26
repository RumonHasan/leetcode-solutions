"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var findMinArrowShots = function findMinArrowShots(points) {
  // sorting the points based on starting point
  var sortedPoints = points.sort(function (a, b) {
    return a[0] - b[0];
  });
  var arrowCount = 1;
  var prevEnd = sortedPoints[0][1]; // finding overlapping points

  for (var i = 1; i < sortedPoints.length; i++) {
    var _sortedPoints$i = _slicedToArray(sortedPoints[i], 2),
        currStart = _sortedPoints$i[0],
        currEnd = _sortedPoints$i[1];

    if (currStart > prevEnd) {
      arrowCount++;
      prevEnd = currEnd;
    } else {
      // overlap exists then update with the minimum of prev end or current end
      prevEnd = Math.min(prevEnd, currEnd);
    }
  }

  return arrowCount;
}; // console.log(
//   findMinArrowShots([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//   ])
// );
// getting non overlapping intervals


var nonOverlappingIntervals = function nonOverlappingIntervals(intervals) {
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  var stack = [intervals[0]];

  for (var i = 1; i < intervals.length; i++) {
    var currInterval = intervals[i]; // over lapping case

    if (stack.length && stack[stack.length - 1][1] > currInterval[0]) {
      var checkMinEnd = stack[stack.length - 1][1] < currInterval[1];

      if (!checkMinEnd) {
        stack.pop();
        stack.push(currInterval); // only push if the end is smaller than the prev end incase of overlap
      }
    } else {
      stack.push(currInterval);
    }
  }

  return intervals.length - stack.length;
};

console.log(nonOverlappingIntervals([[1, 2], [1, 3], [2, 3], [3, 4]]));
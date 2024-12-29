"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var maxProdOfThreeNumbers = function maxProdOfThreeNumbers(nums) {
  // regular way
  var collection = []; // scenario 1 where its for all positive

  var copy = _toConsumableArray(nums);

  for (var i = 0; i < 3; i++) {
    var maxIndex = 0;

    for (var j = 0; j < nums.length; j++) {
      var curr = nums[j];

      if (curr > nums[maxIndex]) {
        maxIndex = j;
      }
    }

    collection.push(nums[maxIndex]);
    nums[maxIndex] = -Infinity;
  }

  var allPosVal = collection.reduce(function (acc, curr) {
    return acc * curr;
  }, 1); // there could be negatives

  var minOne = Math.min.apply(Math, _toConsumableArray(copy));
  var minOneIndex = copy.indexOf(minOne);
  copy.splice(minOneIndex, 1);
  var minTwo = Math.min.apply(Math, _toConsumableArray(copy));
  var max = Math.max.apply(Math, _toConsumableArray(copy));
  var mixedVal = minTwo * max * minOne;
  return Math.max(mixedVal, allPosVal);
};

console.log(maxProdOfThreeNumbers([-100, -2, -3, 1]));
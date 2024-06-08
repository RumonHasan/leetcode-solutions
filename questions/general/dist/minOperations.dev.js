"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var minOperations = function minOperations(nums, x) {
  var maxWindow = -Infinity;
  var end = 0;
  var start = 0;
  var currSum = 0;
  var target = nums.reduce(function (a, b) {
    return a + b;
  }, 0) - x;

  while (end < nums.length) {
    currSum += nums[end];

    while (start <= end && currSum > target) {
      currSum -= nums[start];
      start++;
    }

    if (currSum === target) {
      maxWindow = Math.max(maxWindow, end - start + 1);
    }

    end++;
  }

  var minWindow = nums.length - maxWindow;
  return minWindow;
}; //console.log(minOperations([5, 2, 3, 1, 1], 5));
// swap has to happen


var buddyString = function buddyString(s, goal) {
  if (s.length !== goal.length) return false;
  var set = new Set(s);

  if (s === goal) {
    // if its equal need duplicates to swap then true
    return set.size < s.length;
  } // main case


  var stack = [];
  var map = new Map();
  var gMap = new Map();

  for (var i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    gMap.set(goal[i], (gMap.get(goal[i]) || 0) + 1);

    if (s[i] !== goal[i]) {
      stack.push(s[i]);
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (gMap.has(key) && gMap.get(key) !== value || !gMap.has(key)) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return stack.length === 2;
}; //console.log(buddyString('ab', 'ba'));
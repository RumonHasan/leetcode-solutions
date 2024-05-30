"use strict";

var isPossibleDivide = function isPossibleDivide(nums, k) {
  var map = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      map.set(num, (map.get(num) || 0) + 1);
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

  var end = 0;
  var stack = [];
  nums.sort(function (a, b) {
    return a - b;
  });

  while (end < nums.length) {
    // only goes in if there is a number in map
    if (map.has(nums[end])) {
      var localNum = nums[end];
      var localStack = [];

      while (map.has(localNum)) {
        localStack.push(localNum);
        map.set(localNum, map.get(localNum) - 1);

        if (map.get(localNum) === 0) {
          map["delete"](localNum);
        } // stack injection if there is k count


        if (localStack.length === k) {
          stack.push(localStack);
          break;
        }

        localNum++;
      }
    }

    end++;
  }

  var stackLen = stack.reduce(function (acc, curr) {
    return acc + curr.length;
  }, 0);
  return stackLen === nums.length;
}; //console.log(isPossibleDivide([3, 3, 2, 2, 1, 1], 3));
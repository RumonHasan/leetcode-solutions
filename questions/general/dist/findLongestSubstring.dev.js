"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var findLongestSubstring = function findLongestSubstring(s) {
  var evenVowelCheck = function evenVowelCheck(str) {
    var map = new Map([['a', 0], ['i', 0], ['e', 0], ['o', 0], ['u', 0]]);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _char = _step.value;

        if (map.has(_char)) {
          map.set(_char, map.get(_char) + 1);
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

    var values = _toConsumableArray(map.values()).every(function (val) {
      return val % 2 === 0;
    });

    return values;
  }; // squeezing out the largest substring from left and right


  for (var i = s.length - 1; i >= 0; i--) {
    var start = 0;
    var end = i;

    while (end < s.length) {
      var slice = s.slice(start, end + 1);
      if (evenVowelCheck(slice)) return end - start + 1;
      end++;
      start++;
    }
  }
}; //console.log(findLongestSubstring('eleetminicoworoep'));


var findKClosest = function findKClosest(arr, k, x) {
  var xIndex = arr.findIndex(function (num) {
    return num === x;
  });

  if (xIndex === -1) {
    return arr.slice(0, k);
  } // from right to left


  var sorted = arr.sort(function (a, b) {
    return Math.abs(a) - x - (Math.abs(b) - x);
  });
  return sorted.slice(0, k);
}; // 1D array problem


var deleteAndEarn = function deleteAndEarn(nums) {
  var uglySolution = function uglySolution() {
    var map = new Map();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = nums[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var num = _step2.value;
        map.set(num, (map.get(num) || 0) + 1);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    nums = Array.from(new Set(_toConsumableArray(nums))).sort(function (a, b) {
      return a - b;
    });
    if (nums.length === 1) return nums[0] * map.get(nums[0]);
    var dp = new Array(nums.length).fill(0);
    dp[0] = map.get(nums[0]) * nums[0];
    dp[1] = nums[1] - 1 === nums[0] ? dp[1] = Math.max(dp[0], map.get(nums[1]) * nums[1]) : dp[1] = dp[0] + map.get(nums[1]) * nums[1];

    for (var i = 2; i < nums.length; i++) {
      var currNum = nums[i];
      var prevNum = nums[i - 1];
      var currNumVal = currNum * map.get(currNum);

      if (currNum - 1 === prevNum) {
        dp[i] = Math.max(dp[i - 1], currNumVal + dp[i - 2]);
      } else {
        dp[i] = dp[i - 1] + currNumVal;
      }
    }

    return Math.max.apply(Math, _toConsumableArray(dp));
  };
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
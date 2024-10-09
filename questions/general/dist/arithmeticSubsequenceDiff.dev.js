"use strict";

var longestSubDifference = function longestSubDifference(arr, difference) {
  var map = new Map();
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    var compliment = curr - difference;
    var currLen = 0; // if the compliment is present then increase the existing length of the number

    if (map.has(compliment)) {
      currLen = map.get(compliment) + 1;
    } else {
      currLen = 1;
    } // setting the currlen


    map.set(curr, currLen);
    max = Math.max(max, currLen);
  }

  return max;
}; //console.log(longestSubDifference([1, 5, 7, 8, 5, 3, 4, 2, 1], -2));
// primary formula: num + 2 *Space


var destroySequentialTargets = function destroySequentialTargets(nums, space) {
  nums.sort(function (a, b) {
    return a - b;
  });
  var map = new Map();
  var maxMod = 0; // storing the remainders

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    var mod = currNum % space; // updating the remainder map;

    if (map.has(mod)) {
      map.set(mod, map.get(mod) + 1);
    } else {
      map.set(mod, 1);
    }

    maxMod = Math.max(maxMod, map.get(mod));
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;

      if (map.get(num % space) === maxMod) {
        return num;
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
}; //console.log(destroySequentialTargets([6, 2, 5], 100));
"use strict";

var isNStraightHands = function isNStraightHands(hand, groupSize) {
  var handLen = hand.length;
  if (handLen % groupSize !== 0) return false;
  var map = new Map();

  for (var i = 0; i < hand.length; i++) {
    var currHand = hand[i];
    map.set(currHand, (map.get(currHand) || 0) + 1);
  }

  var sortedKeys = hand.sort(function (a, b) {
    return a - b;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sortedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var vals = _step.value;
      var key = vals;

      if (map.has(key) && map.get(key) > 0) {
        map.set(key, map.get(key) - 1);

        for (var _i = 0; _i < groupSize - 1; _i++) {
          key += 1;
          if (map.get(key) === 0 || !map.has(key)) return false;
          map.set(key, map.get(key) - 1);
        }
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

  return true;
}; //console.log(isNStraightHands([1,1,2,2,3,3], 3));


var counterDeletions = function counterDeletions(nums, val) {
  var counter = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = nums[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var num = _step2.value;

      if (num !== val) {
        counter.push(num);
      }
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

  var counterIndex = 0;

  for (var index in nums) {
    nums[index] = counter[counterIndex];
    counterIndex++;
    if (counterIndex === counter.length) break;
  }

  var len = nums.length - counter.length;

  for (var i = 0; i < len; i++) {
    nums.pop();
  }

  return nums.length;
}; //console.log(counterDeletions([0, 1, 2, 2, 3, 0, 4, 2], 2));
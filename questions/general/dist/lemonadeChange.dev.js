"use strict";

var lemonadeChange = function lemonadeChange(bills) {
  var map = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var currBill = _step.value;

      if (currBill === 5) {
        map.set(currBill, (map.get(currBill) || 0) + 1);
      }

      if (currBill === 10) {
        if (map.get(5) === 0 || !map.has(5)) {
          return false;
        }

        map.set(currBill, (map.get(currBill) || 0) + 1);
        map.set(5, map.get(5) - 1);
      }

      if (currBill === 20) {
        if (map.get(5) >= 1 && map.get(10) >= 1) {
          map.set(5, map.get(5) - 1);
          map.set(10, map.get(10) - 1);
        } else if (map.get(5) >= 3) {
          map.set(5, map.get(5) - 3);
        } else {
          return false;
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
}; //console.log(lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]));


var findUnsorted = function findUnsorted(nums) {
  var n = nums.length;
  var start = -1;
  var end = -2;
  var min = nums[n - 1];
  var max = nums[0];

  for (var i = 1; i < n; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[n - 1 - i]);
    if (nums[i] < max) end = i;
    if (nums[n - 1 - i] > min) start = n - 1 - i;
  }

  return end - start + 1;
}; //console.log(findUnsorted([2, 6, 4, 8, 10, 9, 15]));
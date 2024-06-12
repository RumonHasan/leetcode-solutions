"use strict";

var countDistinct = function countDistinct(nums, k, p) {
  var subCheck = function subCheck(sub) {
    var count = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = sub[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        if (num % p === 0) {
          count++;
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

    return count <= k;
  };

  var subSet = new Set();

  for (var i = 0; i < nums.length; i++) {
    var firstCount = 0;

    for (var j = i; j < nums.length; j++) {
      var subArray = nums.slice(i, j + 1);
      if (nums[j] % p === 0) firstCount++;
      if (firstCount > k) break;

      if (subCheck(subArray)) {
        var subString = subArray.toString();
        subSet.add(subString);
      }
    }
  }

  return subSet.size;
}; //console.log(countDistinct([2, 3, 3, 2, 2], 2, 2));
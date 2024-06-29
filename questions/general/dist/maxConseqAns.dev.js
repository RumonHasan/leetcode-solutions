"use strict";

var maxConsequtiveAnswers = function maxConsequtiveAnswers(answerKey, k) {
  var map = new Map();
  var end = 0;
  var start = 0;
  var maxLen = 0;

  while (end < answerKey.length) {
    map.set(answerKey[end], (map.get(answerKey[end]) || 0) + 1);

    while (end - start + 1 - (map.get('T') > map.get('F') ? map.get('T') : map.get('F')) > k) {
      map.set(answerKey[start], map.get(answerKey[start]) - 1);

      if (map.get(answerKey[start]) === 0) {
        map["delete"](answerKey[start]);
      }

      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }

  return maxLen;
}; //console.log(maxConsequtiveAnswers('TTFTTFTT', 1));


var longestAlternatingSubarray = function longestAlternatingSubarray(nums, threshold) {
  var i = 0;
  var j = 0;
  var maxLen = 0;

  while (i < nums.length) {
    var currNum = nums[i];

    if (currNum % 2 === 0 && currNum <= threshold) {
      // start from here
      j = i;
      var isEven = true;

      while (j < nums.length && nums[j] <= threshold && nums[j] % 2 === (isEven ? 0 : 1)) {
        j++;
        isEven = !isEven;
      }

      maxLen = Math.max(maxLen, j - i);
    }

    i++;
  }

  return maxLen;
}; //console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));


var numberOfWeakCharacters = function numberOfWeakCharacters(properties) {
  var TLE = function TLE() {
    properties.sort(function (a, b) {
      return a[0] - b[0];
    });
    var end = 0;
    var counter = 0;

    while (end < properties.length) {
      var curr = properties[end];
      var sub = end + 1;

      while (sub < properties.length) {
        if (curr[0] < properties[sub][0] && curr[1] < properties[sub][1]) {
          counter++;
          break;
        }

        sub++;
      }

      end++;
    }

    return counter;
  };

  var optimized = function optimized() {
    properties.sort(function (a, b) {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return b[0] - a[0];
      }
    });
    var count = 0,
        max = 0; // only keeping track of the max defense since attack is already sorted

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var arr = _step.value;

        if (arr[1] < max) {
          console.log(arr);
          count++;
        }

        max = Math.max(max, arr[1]);
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

    return count;
  };
};

console.log(numberOfWeakCharacters([[7, 7], [1, 2], [9, 7], [7, 3], [3, 10], [9, 8], [8, 10], [4, 3], [1, 5], [1, 5]]));
"use strict";

var strWithoutThree = function strWithoutThree(a, b) {
  var result = '';

  while (a > 0 && b > 0) {
    if (a === b) {
      result += 'ab';
      a--;
      b--;
    } else if (a > b) {
      result += 'aab';
      a -= 2;
      b -= 1;
    } else if (b > a) {
      result += 'bba';
      b -= 2;
      a -= 1;
    }
  }

  if (a > 0) {
    result += 'a'.repeat(a);
  } else if (b > 0) {
    result += 'b'.repeat(b);
  }

  return result;
}; // str should be without 3 a or 3 b repeats


console.log(strWithoutThree(4, 1));

var findAllDuplicatesInAnArray = function findAllDuplicatesInAnArray(nums) {
  var setWay = function setWay() {
    var set = new Set();
    var collection = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;
        if (set.has(num)) collection.push(num);
        set.add(num);
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

    return collection;
  }; // we know here the nums are rangin from 1 to n hence we can use the nums to calculate the subtracted indices


  var optimizedWay = function optimizedWay() {
    var collection = [];

    for (var i = 0; i < nums.length; i++) {
      var currNum = nums[i];
      var differenceIndex = Math.abs(currNum) - 1;

      if (nums[differenceIndex] < 0) {
        collection.push(Math.abs(currNum));
      }

      if (nums[differenceIndex] > 0) {
        nums[differenceIndex] = -nums[differenceIndex];
      }
    }

    return collection;
  }; //console.log(optimizedWay());

}; //console.log(findAllDuplicatesInAnArray([4, 3, 2, 7, 8, 2, 3, 1]));
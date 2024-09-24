"use strict";

var longestCommonPrefix = function longestCommonPrefix(arr1, arr2) {
  var maxLen = 0;

  var prefCreator = function prefCreator(array) {
    var set = new Set();

    for (var i = 0; i < array.length; i++) {
      var currStr = array[i].toString();
      var str = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = currStr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var currChar = _step.value;
          str += currChar;
          set.add(str);
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
    }

    return set;
  };

  var setOne = prefCreator(arr2);
  arr2.sort(function (a, b) {
    return b.length - a.length;
  }); // iterating from the largest number and checking its subsets

  for (var i = 0; i < arr1.length; i++) {
    var currNum = arr1[i].toString();
    var str = '';
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = currNum[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var currChar = _step2.value;
        str += currChar;

        if (setOne.has(str)) {
          maxLen = Math.max(maxLen, str.length);
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
  }

  return maxLen;
};

console.log(longestCommonPrefix([1, 10, 1001], [100]));
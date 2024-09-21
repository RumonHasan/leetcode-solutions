"use strict";

var numberOfWaysSelectingBuildings = function numberOfWaysSelectingBuildings(s) {
  var makeArray = function makeArray(len) {
    return new Array(len).fill(0);
  }; // populating 0s and 1s


  var populateArray = function populateArray(type) {
    var left = makeArray(s.length);
    var right = makeArray(s.length); // from left

    for (var i = 0; i < s.length; i++) {
      if (s[i] === type) {
        left[i] = i === 0 ? 1 : left[i - 1] + 1;
      } else {
        left[i] = i === 0 ? 0 : left[i - 1];
      }
    } // from right


    for (var _i = s.length - 1; _i >= 0; _i--) {
      if (s[_i] === type) {
        right[_i] = _i === right.length - 1 ? 1 : right[_i + 1] + 1;
      } else {
        right[_i] = _i === right.length - 1 ? 0 : right[_i + 1];
      }
    }

    return {
      left: left,
      right: right
    };
  };

  var _populateArray = populateArray('0'),
      zeroLeft = _populateArray.left,
      zeroRight = _populateArray.right;

  console.log(zeroLeft, zeroRight, '0');

  var _populateArray2 = populateArray('1'),
      oneLeft = _populateArray2.left,
      oneRight = _populateArray2.right;

  var counter = 0; // main iteration to check for 0

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      var leftVal = zeroLeft[i - 1] ? zeroLeft[i - 1] : 0;
      var rightVal = zeroRight[i + 1] ? zeroRight[i + 1] : 0;
      counter += leftVal * rightVal;
    }
  } // main iteration to check for 1


  for (var _i2 = 0; _i2 < s.length; _i2++) {
    if (s[_i2] === '0') {
      var _leftVal = oneLeft[_i2 - 1] ? oneLeft[_i2 - 1] : 0;

      var _rightVal = oneRight[_i2 + 1] ? oneRight[_i2 + 1] : 0;

      counter += _leftVal * _rightVal;
    }
  }

  return counter;
};

var optimizedWay = function optimizedWay() {
  // just subtract the remaining count;
  var zeros = 0;
  var ones = 0;
  var result = 0; // First pass: count zeros and ones

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;

      if (_char === '0') {
        zeros++;
      } else {
        ones++;
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

  var leftZeros = 0;
  var leftOnes = 0; // Second pass: calculate combinations

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _char2 = _step2.value;

      if (_char2 === '0') {
        result += leftOnes * (ones - leftOnes);
        leftZeros++;
      } else {
        result += leftZeros * (zeros - leftZeros);
        leftOnes++;
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

  return result;
};

console.log(numberOfWaysSelectingBuildings('001101'));
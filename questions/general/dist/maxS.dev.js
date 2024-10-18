"use strict";

var maxSwap = function maxSwap(num) {
  var nums = String(num).split('');
  var prefSum = new Array(nums.length).fill(0);

  for (var i = nums.length - 1; i >= 0; i--) {
    var currNum = nums[i];

    if (i === nums.length - 1) {
      prefSum[i] = currNum;
    } else {
      prefSum[i] = prefSum[i + 1] < currNum ? currNum : prefSum[i + 1];
    }
  } // getting the first max from the back;


  var replaced;
  var currPref;

  for (var _i = 0; _i < nums.length; _i++) {
    if (prefSum[_i] > nums[_i]) {
      replaced = nums[_i];
      nums[_i] = prefSum[_i];
      currPref = prefSum[_i];
      break;
    }
  } // replaced the closest similar pref from the end


  for (var _i2 = nums.length - 1; _i2 >= 0; _i2--) {
    if (nums[_i2] == currPref) {
      nums[_i2] = replaced;
      break;
    }
  }

  return parseInt(nums.join(''));
}; // using prefix sum


console.log(maxSwap('9973'));

var balloons = function balloons(text) {
  var word = 'balloon';
  var map = new Map();
  var counter = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char2 = _step.value;
      map.set(_char2, (map.get(_char2) || 0) + 1);
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

  while (map.get('b') > 0) {
    var string = '';
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = word[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _char = _step2.value;

        if (map.get(_char) > 0) {
          string += _char;
        } else {
          break;
        }

        map.set(_char, map.get(_char) - 1);
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

    if (string === word) counter++;
  }

  return counter;
};

console.log(balloons('loonbalxballpoon'));
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minSwaps = function minSwaps(nums) {
  var totalOneCount = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;

      if (num === 1) {
        totalOneCount++;
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

  var minSwapCount = Infinity;
  var newArray = [].concat(_toConsumableArray(nums), _toConsumableArray(nums)); // check for one count in the sliding window

  var localOneCount = 0;

  for (var i = 0; i < totalOneCount; i++) {
    if (newArray[i] === 1) {
      localOneCount++;
    }
  }

  minSwapCount = totalOneCount - localOneCount;
  var end = totalOneCount;

  while (end < newArray.length) {
    var currNum = newArray[end];

    if (currNum === 1) {
      localOneCount++;
    }

    if (newArray[end - totalOneCount] === 1) {
      localOneCount--;
    }

    minSwapCount = Math.min(minSwapCount, totalOneCount - localOneCount);
    end++;
  }

  return minSwapCount;
}; //console.log(minSwaps([1, 1, 0, 0, 1]));
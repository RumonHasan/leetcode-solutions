"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minSwapOne = function minSwapOne(nums) {
  var oneCount = 0;
  var swapCount = Infinity;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      num === 1 && oneCount++;
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

  nums = [].concat(_toConsumableArray(nums), _toConsumableArray(nums));
  var window = oneCount; // checking initial window

  var localOneCount = 0;

  for (var i = 0; i < window; i++) {
    if (nums[i] === 1) {
      localOneCount++;
    }
  }

  swapCount = Math.min(swapCount, oneCount - localOneCount); // checking initial swap count;
  // sliding window

  var end = window;
  var start = 0;

  while (end < nums.length) {
    if (nums[start] === 1) localOneCount--;
    if (nums[end] === 1) localOneCount++;
    swapCount = Math.min(swapCount, oneCount - localOneCount);
    start++;
    end++;
  }

  return swapCount;
};

console.log(minSwapOne([1, 1, 0, 0, 1]));
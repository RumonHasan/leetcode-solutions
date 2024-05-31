"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isPossibleDivide = function isPossibleDivide(nums, k) {
  var map = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      map.set(num, (map.get(num) || 0) + 1);
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

  var end = 0;
  var stack = [];
  nums.sort(function (a, b) {
    return a - b;
  });

  while (end < nums.length) {
    // only goes in if there is a number in map
    if (map.has(nums[end])) {
      var localNum = nums[end];
      var localStack = [];

      while (map.has(localNum)) {
        localStack.push(localNum);
        map.set(localNum, map.get(localNum) - 1);

        if (map.get(localNum) === 0) {
          map["delete"](localNum);
        } // stack injection if there is k count


        if (localStack.length === k) {
          stack.push(localStack);
          break;
        }

        localNum++;
      }
    }

    end++;
  }

  var stackLen = stack.reduce(function (acc, curr) {
    return acc + curr.length;
  }, 0);
  return stackLen === nums.length;
}; // diividing into equl pairs


var divideIntoEqualPairs = function divideIntoEqualPairs(nums) {
  var hash = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = nums[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var num = _step2.value;
      hash[num] ? hash[num]++ : hash[num] = 1;
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

  for (var _i = 0, _Object$entries = Object.entries(hash); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        _ = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value % 2 === 1) {
      return false;
    }
  }

  return true;
}; //console.log(divideIntoEqualPairs([3, 2, 3, 2, 2, 2]));
//console.log(isPossibleDivide([3, 3, 2, 2, 1, 1], 3));
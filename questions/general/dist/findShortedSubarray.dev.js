"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var findShortestSubarray = function findShortestSubarray(nums) {
  console.log(nums);
  var locator = new Map();

  for (var numIndex in nums) {
    if (!locator.has(nums[numIndex])) {
      locator.set(nums[numIndex], [Number(numIndex), Number(numIndex), 1]);
    } else {
      locator.get(nums[numIndex])[1] = Number(numIndex);
      locator.get(nums[numIndex])[2] += 1;
    }
  } // updating based on the max number of occurence in hte map and collecting in the max len


  var localOc = 0;
  var minLen = Infinity;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = locator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          _ = _step$value[0],
          value = _step$value[1];

      var currLen = value[1] - value[0] + 1;
      var currOc = value[2];

      if (currOc >= localOc) {
        if (currOc === localOc) {
          minLen = Math.min(minLen, currLen);
        } else {
          minLen = currLen;
        }

        localOc = currOc;
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

  return minLen;
};

console.log(findShortestSubarray([1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]));
"use strict";

var canChoose = function canChoose(groups, nums) {
  var end = 0;
  var gIndex = 0;

  while (end < nums.length) {
    if (nums[end] === groups[gIndex][0]) {
      var subMainIndex = end;
      var check = true;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = groups[gIndex][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var gNum = _step.value;

          if (nums[subMainIndex] !== gNum) {
            check = false;
            break;
          }

          subMainIndex++;
        } // if match is found then increase to the next array

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

      if (check) {
        end = subMainIndex;
        gIndex++;

        if (gIndex === groups.length) {
          return true;
        }
      } else {
        end++;
      }
    } else {
      end++;
    }
  }

  return false;
}; // look for disjointed subarrays but in the same order as the groups mentioned
// console.log(canChoose([[-5, 0]], [2, 0, -2, 5, -1, 2, 4, 3, 4, -5, -5]));
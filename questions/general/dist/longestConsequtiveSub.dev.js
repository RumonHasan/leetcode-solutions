"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var longestConsequtiveSub = function longestConsequtiveSub(nums) {
  var optimizedSetApproach = function optimizedSetApproach() {
    var set = new Set(_toConsumableArray(nums));
    if (nums.length === 0) return 0;
    var maxCount = 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;
        var right = num + 1;

        if (!set.has(right)) {
          var left = num - 1;
          var count = 1;

          if (set.has(left)) {
            while (set.has(left)) {
              left--;
              count++;
            }

            maxCount = Math.max(maxCount, count);
          } else {
            continue;
          }
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

    return maxCount;
  };
};

console.log(longestConsequtiveSub([100, 4, 200, 1, 3, 2]));
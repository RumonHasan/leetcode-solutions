"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var partitionSubset = function partitionSubset(nums) {
  var setApproach = function setApproach() {
    var sum = nums.reduce(function (a, b) {
      return a + b;
    }, 0);
    if (sum % 2 === 1) return false;
    var target = sum / 2;
    var set = new Set(); // to store the sums and possible combinations

    set.add(0);

    for (var i = nums.length - 1; i >= 0; i--) {
      // rev iteration in order to check from left to right for existing sums
      var currNum = nums[i];
      var setArray = [];

      var existingSet = _toConsumableArray(set);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var setValue = _step.value;
          setArray.push(setValue + currNum);
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

      var newArray = [].concat(setArray, _toConsumableArray(existingSet));
      set = new Set(_toConsumableArray(newArray));
      if (set.has(target)) return true;
    }

    return false;
  };
}; //console.log(partitionSubset([1, 5, 11, 5]));


var minimumLength = function minimumLength(s) {
  var initialApproach = function initialApproach() {
    var array = s.split('');
    if (s.length === 1) return 1;
    if (array[0] !== array[array.length - 1]) return array.length;
    if (array.every(function (letter) {
      return letter === array[0];
    })) return 0; // core logic for checking duplicate chars

    var left = 0;
    var right = array.length - 1;

    while (left < right) {
      if (array[left] === array[right]) {
        var prevLeft = array[left];
        var prevRight = array[right];

        while (left < right && array[left] === prevRight) {
          left++;
        }

        while (right > left && array[right] === prevLeft) {
          right--;
        }

        if (array.length === 3 && array[left] === array[right]) return 1;
        if (array[left] === array[right] && right - left === 0) return 0;
        if (array[left] === array[right] && right - left === 1) return 0;

        if (right - left === 2) {
          if (array[right] === array[left]) return 1;
          if (array[right] !== array[left]) return 3;
        }
      } else {
        break;
      }

      return right - left + 1;
    }
  };

  var optimizedApproach = function optimizedApproach() {
    if (s.length === 1) return 0;
    var left = 0;
    var right = s.length - 1;

    while (left < right && s[left] === s[right]) {
      var _char = s[left];

      while (left <= right && s[left] === _char) {
        left++;
      }

      while (left <= right && s[right] === _char) {
        right--;
      } // notice here the number crosses over so we can get it as 0

    }

    return right - left + 1;
  };

  console.log(optimizedApproach());
};

console.log(minimumLength('cabaabac'));
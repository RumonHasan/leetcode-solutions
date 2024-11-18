"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var numOfPairs = function numOfPairs(nums, target) {
  var counter = 0;

  for (var i = 0; i < nums.length; i++) {
    var checkStr = nums[i];

    for (var _j = 0; _j < nums.length; _j++) {
      if (i !== _j) {
        var sub = nums[_j];

        if (checkStr + sub === target) {
          counter++;
        }
      }
    }
  }

  return counter;
}; // checking how many pairs equal to target; need to find the suffix in order to check
//console.log(numOfPairs(['74', '1', '67', '1', '74'], '174'));


var meanOperationsToMakeKEqual = function meanOperationsToMakeKEqual(nums, k) {
  nums.sort(function (a, b) {
    return a - b;
  }); // once sorted the element will be on the right side

  var medianElement = nums[Math.floor(nums.length / 2)];
  var centralCounter = 0;
  var midIndex = Math.floor(nums.length / 2); // reduce left

  if (medianElement > k) {
    while (midIndex >= 0) {
      var curr = nums[midIndex];
      if (curr <= k) break;
      centralCounter += Math.abs(k - curr);
      midIndex--;
    }
  } else {
    // increase right if median is less than k
    while (midIndex < nums.length) {
      var _curr = nums[midIndex];
      if (_curr >= k) break;
      centralCounter += Math.abs(k - _curr);
      midIndex++;
    }
  }

  return centralCounter++;
}; // if the median is less than or equal to k increase the value in the right half and if the median is greater than k reduce the values in left half
//console.log(meanOperationsToMakeKEqual([45, 50, 89, 30, 4, 5, 91, 58], 31));
// checking for unique set if so getting the final length


var maxProductWords = function maxProductWords(words) {
  var setCollection = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      setCollection.push(new Set(word.split('')));
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

  var maxLen = 0;

  for (var i = 0; i < words.length; i++) {
    var _loop = function _loop() {
      var checkArray = _toConsumableArray(setCollection[i]);

      var checkSet = setCollection[j];
      var check = checkArray.some(function (letter) {
        return checkSet.has(letter);
      });

      if (!check) {
        maxLen = Math.max(maxLen, words[i].length * words[j].length);
      }
    };

    for (j = i + 1; j < words.length; j++) {
      _loop();
    }
  }

  return maxLen;
}; //console.log(maxProductWords(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']));
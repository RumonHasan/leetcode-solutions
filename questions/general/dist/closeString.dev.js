"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var closeStrings = function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;
  var wordOneSet = new Set(word1);
  var wordTwoSet = new Set(word2); // checking whether they have the same letters or not

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = wordOneSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char2 = _step.value;
      if (!wordTwoSet.has(_char2)) return false;
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

  var getOc = function getOc(string) {
    var map = new Map();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = string[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _char = _step2.value;
        map.set(_char, (map.get(_char) || 0) + 1);
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

    return _toConsumableArray(map.values()).sort(function (a, b) {
      return a - b;
    });
  }; // permutations of occurence should be same


  var valOne = getOc(word1);
  var valTwo = getOc(word2); // sorting frequencies to check whether they are same or not

  for (var i = 0; i < valOne.length; i++) {
    if (valOne[i] !== valTwo[i]) return false;
  }

  return true;
}; // remember the characters have to be mutual and exisitng in both


console.log(closeStrings('abbzzca', 'babzzcz'));
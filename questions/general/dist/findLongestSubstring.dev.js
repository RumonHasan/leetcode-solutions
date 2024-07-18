"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var findLongestSubstring = function findLongestSubstring(s) {
  var evenVowelCheck = function evenVowelCheck(str) {
    var map = new Map([['a', 0], ['i', 0], ['e', 0], ['o', 0], ['u', 0]]);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _char = _step.value;

        if (map.has(_char)) {
          map.set(_char, map.get(_char) + 1);
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

    var values = _toConsumableArray(map.values()).every(function (val) {
      return val % 2 === 0;
    });

    return values;
  }; // squeezing out the largest substring from left and right


  for (var i = s.length - 1; i >= 0; i--) {
    var start = 0;
    var end = i;

    while (end < s.length) {
      var slice = s.slice(start, end + 1);
      if (evenVowelCheck(slice)) return end - start + 1;
      end++;
      start++;
    }
  }
}; //console.log(findLongestSubstring('eleetminicoworoep'));
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var repeatedStringMatching = function repeatedStringMatching(a, b) {
  var kmpAlgoRunThrough = function kmpAlgoRunThrough() {
    var maxRepeatedCount = Math.ceil(b.length / a.length) + 1;
    var minReapeatedCount = Math.ceil(b.length / a.length);

    var kmpAlgoCheck = function kmpAlgoCheck(string) {
      var map = new Map();
      var setChars = new Set(_toConsumableArray(string.split('')));
      var val = 1;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = setChars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _char3 = _step.value;
          map.set(_char3, val);
          val++;
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

      var MOD = 1e9 + 7; // Use a large prime number as modulo

      var BASE = 10; // Getting the pattern value

      var patternVal = 0;

      for (var i = 0; i < b.length; i++) {
        var _char = b[i];
        var hashVal = map.get(_char);
        patternVal = (patternVal * BASE + hashVal) % MOD;
      } // Sliding window


      var checkPatVal = 0; // Calculate the value of largest power of BASE

      var power = 1;

      for (var _i = 0; _i < b.length - 1; _i++) {
        power = power * BASE % MOD;
      } // Calculate initial window hash


      for (var _i2 = 0; _i2 < b.length; _i2++) {
        var _char2 = string[_i2];

        var _hashVal = map.get(_char2);

        checkPatVal = (checkPatVal * BASE + _hashVal) % MOD;
      }

      if (checkPatVal === patternVal) return true; // Slide the window

      for (var _i3 = b.length; _i3 < string.length; _i3++) {
        // Remove leftmost digit
        var leftChar = string[_i3 - b.length];
        checkPatVal = (checkPatVal - map.get(leftChar) * power % MOD + MOD) % MOD; // Add new digit

        checkPatVal = (checkPatVal * BASE + map.get(string[_i3])) % MOD;
        if (checkPatVal === patternVal) return true;
      }

      return false;
    };

    var checkMin = kmpAlgoCheck(a.repeat(minReapeatedCount));
    if (checkMin) return minReapeatedCount;
    var checkMax = kmpAlgoCheck(a.repeat(maxRepeatedCount));
    if (checkMax) return maxRepeatedCount;
    return -1;
  };
};

console.log(repeatedStringMatching("bcacbcbbbbbbbacbcaacbccaa", "bbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaabbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaacbcacbcbbbbbbbacbcaacbccaaabcacbcbbbbbbbacbcaacbccaaa"));
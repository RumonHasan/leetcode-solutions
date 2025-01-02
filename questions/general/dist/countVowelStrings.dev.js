"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var countVowelStrings = function countVowelStrings(words, queries) {
  // general brute force tle concept where run time is O(n * q);
  var TLE = function TLE() {
    // returns vowel based on boolean check
    var vowelCheck = function vowelCheck(letter) {
      return ['a', 'i', 'e', 'o', 'u'].some(function (vowel) {
        return letter.toLowerCase() === vowel;
      });
    }; // main function to check for vowel appearance


    var checkVowelAppearance = function checkVowelAppearance(array) {
      var localCounter = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var word = _step.value;
          var first = word[0];
          var last = word[word.length - 1];
          if (vowelCheck(first) && vowelCheck(last)) localCounter++;
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

      return localCounter;
    };

    var collection = []; // max length of collection will be same as queries length

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = queries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var query = _step2.value;
        var currWords = words.slice(query[0], query[1] + 1);
        var counter = checkVowelAppearance(currWords);
        collection.push(counter);
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

    return collection;
  }; // optimized approach O(n + q) run time


  var optimizedApproach = function optimizedApproach() {
    var prefArray = [0]; // letter vowel check function

    var vowelCheck = function vowelCheck(letter) {
      return ['a', 'i', 'e', 'o', 'u'].some(function (vowel) {
        return letter.toLowerCase() === vowel;
      });
    }; // getting the pref array in order to precompute the vowels


    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = words[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var word = _step3.value;
        var first = word[0];
        var last = word[word.length - 1];

        if (vowelCheck(first) && vowelCheck(last)) {
          prefArray.push(prefArray[prefArray.length - 1] + 1);
        } else {
          prefArray.push(prefArray[prefArray.length - 1]);
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var collection = []; // checking for the queries and getting the range

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = queries[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var query = _step4.value;

        var _query = _slicedToArray(query, 2),
            _first = _query[0],
            _last = _query[1];

        collection.push(prefArray[_last + 1] - prefArray[_first]); // importance idea here to remember is that the prefix array has an addition value of 0 hence need to add an extra value to last in order to reset
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return collection;
  };

  console.log(optimizedApproach());
}; // prefix sum optimization


console.log(countVowelStrings(['aba', 'bcb', 'ece', 'aa', 'e'], [[0, 2], [1, 4], [1, 1]]));
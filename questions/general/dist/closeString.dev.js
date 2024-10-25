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
//console.log(closeStrings('abbzzca', 'babzzcz'));
// all the prefix have to be present


var longestWord = function longestWord(words) {
  words.sort(function (a, b) {
    return a.length - b.length;
  });
  var set = new Set(words);
  var collection = [];
  var lng = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = words[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var word = _step3.value;
      var prefString = '';
      var check = true;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = word[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _char3 = _step4.value;
          prefString += _char3;

          if (!set.has(prefString)) {
            check = false;
            break;
          }
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

      if (check) {
        collection.push(word);
        lng = Math.max(lng, word.length);
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

  collection.sort(function (a, b) {
    return b.length - a.length;
  });
  var res = [];

  for (var _i = 0, _collection = collection; _i < _collection.length; _i++) {
    var _word = _collection[_i];

    if (_word.length === lng) {
      res.push(_word);
    } else {
      break;
    }
  }

  res.sort(function (a, b) {
    return a.localeCompare(b);
  });
  return res[0] === undefined ? '' : res[0];
};

console.log(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']));
s;
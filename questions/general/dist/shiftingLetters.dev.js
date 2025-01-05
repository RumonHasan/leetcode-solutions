"use strict";

var shiftingLetters = function shiftingLetters(s, shifts) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var pref = new Array(shifts.length).fill(0); // needs total shifts from its position

  pref[pref.length - 1] = shifts[shifts.length - 1];

  for (var i = shifts.length - 2; i >= 0; i--) {
    pref[i] = pref[i + 1] + shifts[i];
  } // have to change based on the total shifts from the end


  var res = '';

  for (var _i = 0; _i < s.length; _i++) {
    var currChar = s[_i];
    var currPos = pref[_i];
    var alphaPos = alphabet.indexOf(currChar);
    var newPos = (currPos + alphaPos) % 26; // to offset it by 26 if its more

    res += alphabet[newPos];
  }

  return res;
};

console.log(shiftingLetters('abc', [3, 5, 9])); // getting unique length three palindromes while making aure they are all unique strings

var uniqueLengthThreePal = function uniqueLengthThreePal(s) {
  var leftSet = new Set();
  var map = new Map();
  var set = new Set();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      map.set(_char, (map.get(_char) || 0) + 1);
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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _char2 = _step2.value;
      // remove the mid char
      map.set(_char2, map.get(_char2) - 1);

      if (map.get(_char2) === 0) {
        map["delete"](_char2);
      } // checking all the letters to see whether there is any on the right to match


      for (var i = 97; i <= 122; i++) {
        var checkChar = String.fromCharCode(i);

        if (leftSet.has(checkChar) && map.get(checkChar) > 0) {
          // only works if the left side is valid
          set.add("".concat(checkChar).concat(_char2).concat(checkChar));
        }
      }

      if (!leftSet.has(_char2)) {
        leftSet.add(_char2);
      }
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

  return set.size;
};

console.log(uniqueLengthThreePal('aabca'));
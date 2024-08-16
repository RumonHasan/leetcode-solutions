"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var takeCharacters = function takeCharacters(s, k) {
  var map = new Map([['a', 0], ['b', 0], ['c', 0]]);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;

      if (map.has(_char)) {
        map.set(_char, map.get(_char) + 1);
      }
    } // finding after k removal

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
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          _ = _step2$value[1];

      map.set(key, map.get(key) - k);

      if (map.get(key) < 0) {
        // default case for one value below 0 since all of them needs to be reduced
        return -1;
      }
    } // primary sliding window to check max

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

  var maxLen = 0;
  var end = 0;
  var start = 0;
  var countMap = new Map();

  while (end < s.length) {
    var currChar = s[end];
    countMap.set(currChar, (countMap.get(currChar) || 0) + 1); // slide reduction

    while (map.get(s[end]) < countMap.get(s[end])) {
      if (countMap.has(s[start])) {
        countMap.set(s[start], countMap.get(s[start]) - 1);
      }

      start++;
    }

    maxLen = Math.max(end - start + 1, maxLen);
    end++;
  }

  return s.length - maxLen;
}; // using hashmap and counting sliding window in order to make sure the count dont exceed k
//console.log(takeCharacters('aabaaaacaabc', 2));
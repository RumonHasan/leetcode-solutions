"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var shortestUncommonSubstring = function shortestUncommonSubstring(arr) {
  var strMap = new Map();
  var dp = new Array(arr.length).fill(''); // collect all the substrings

  for (var strIndex in arr) {
    var string = arr[strIndex];
    var index = Number(strIndex);

    for (var j = 0; j < string.length; j++) {
      for (var k = j; k < string.length; k++) {
        var substring = string.slice(j, k + 1);

        if (strMap.has(substring)) {
          strMap.get(substring).add(index);
        } else {
          strMap.set(substring, new Set([index]));
        }
      }
    }
  } // isolating the ones with single size and injecting them with the appropriate indices


  var indexMap = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = strMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (value.size === 1) {
        var _value = _slicedToArray(value, 1),
            _index = _value[0];

        if (indexMap.has(_index)) {
          var existingKey = indexMap.get(_index); // sorted based on existing keys and localecomparison based on the lexicological order

          if (existingKey.length > key.length || existingKey.length === key.length && existingKey > key) {
            indexMap.set(_index, key);
          }
        } else {
          indexMap.set(_index, key);
        }
      }
    } // populating result based on the index set value

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
    for (var _iterator2 = indexMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          _key = _step2$value[0],
          _value2 = _step2$value[1];

      dp[Number(_key)] = _value2;
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

  return dp;
};

console.log(shortestUncommonSubstring(['gfnt', 'xn', 'mdz', 'yfmr', 'fi', 'wwncn', 'hkdy']));
/*

substring_to_strings = {
    "c": {0, 3},
    "ca": {0},
    "cab": {0},
    "a": {0, 1, 2},
    "ab": {0},
    "b": {0, 2},
    "ba": {2},
    "bad": {2},
    "ad": {1, 2},
    "d": {1, 2}
}
*/
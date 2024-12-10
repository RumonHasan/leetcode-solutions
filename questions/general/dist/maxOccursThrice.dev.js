"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var maxOccursThrice = function maxOccursThrice(s) {
  var map = new Map();

  for (var i = 0; i < s.length; i++) {
    var sub = s[i];
    map.set(sub, (map.get(sub) || 0) + 1);

    for (var j = i + 1; j < s.length; j++) {
      if (s[j - 1] === s[j]) {
        sub += s[j];
        map.set(sub, (map.get(sub) || 0) + 1);
      } else {
        break;
      }
    }
  }

  var maxLen = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (value >= 3) {
        maxLen = Math.max(maxLen, key.length);
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

  return maxLen === 0 ? -1 : maxLen;
}; // console.log(maxOccursThrice('fafff'));


var getStrongest = function getStrongest(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var medianIndex = Math.floor((arr.length - 1) / 2);
  var median = arr[medianIndex];
  var copy = arr.sort(function (a, b) {
    var differenceA = Math.abs(a - median);
    var differenceB = Math.abs(b - median);

    if (differenceB !== differenceA) {
      return differenceB - differenceA;
    }

    return b - a; // else larger value
  });
  return copy.slice(0, k);
}; //console.log(getStrongest([1, 2, 3, 4, 5], 2));
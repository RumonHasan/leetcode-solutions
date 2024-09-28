"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var reorgString = function reorgString(s) {
  var hash = {};
  var dp = new Array(s.length).fill('');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      hash[_char] = (hash[_char] || 0) + 1;
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

  var maxVal = 0;
  var maxChar = ''; // getting max char and val

  for (var _i = 0, _Object$entries = Object.entries(hash); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value > maxVal) {
      maxVal = value;
      maxChar = key;
    }
  }

  var subIndex = 0;
  var maxCount = 0; // placing most frequent char in the dp

  for (var i = 0; i < dp.length; i += 2) {
    if (hash[maxChar] > 0) {
      dp[i] = maxChar;
      hash[maxChar] -= 1;
      maxCount++;
      if (hash[maxChar] === 0) delete hash[maxChar];
      subIndex = i;
    } else if (maxCount === maxVal) {
      break;
    }
  }

  if (hash[maxChar] > 0) return ''; // first case if all the max char cannot fit

  subIndex += 2; // placing the remaining chars in an alternative pattern

  for (var _i2 = 0, _Object$entries2 = Object.entries(hash); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        _key = _Object$entries2$_i[0],
        _value = _Object$entries2$_i[1];

    while (hash[_key] > 0) {
      subIndex = subIndex > dp.length - 1 ? 1 : subIndex;
      dp[subIndex] = _key;
      hash[_key] -= 1;
      subIndex += 2; // for alternating indices

      if (_value === 0) delete hash[_key];
    }
  }

  return dp.join('');
};

console.log(reorgString('ababbbaaa'));
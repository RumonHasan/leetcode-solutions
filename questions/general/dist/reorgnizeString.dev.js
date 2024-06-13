"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var reorganizeString = function reorganizeString(s) {
  var map = new Map();
  var dp = new Array(s.length).fill(''); //get occurence

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      map.set(_char, (map.get(_char) || 0) + 1);
    } // get most freq char

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

  var max_char = '';
  var max_char_freq = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      if (value > max_char_freq) {
        max_char = key;
        max_char_freq = value;
      }
    } // placing the most freq char alternatively

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

  var max_counter = 0;
  var sub_index = 0;

  for (var i = 0; i < dp.length; i += 2) {
    dp[i] = max_char;
    sub_index = i;
    max_counter++;
    map.set(max_char, map.get(max_char) - 1);
    if (map.get(max_char) === 0) map["delete"](max_char);

    if (max_counter === max_char_freq) {
      break;
    }
  }

  sub_index += 2; // for the next iteration after preset
  // egde case for checking whether they are still incomplete

  if (map.get(max_char) > 0) return ''; // placing remaining chars in the dp

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _step3$value = _slicedToArray(_step3.value, 2),
          _key = _step3$value[0],
          _value = _step3$value[1];

      while (map.get(_key) > 0) {
        sub_index = sub_index >= dp.length ? 1 : sub_index; // if subindex exceeds the final dp length

        dp[sub_index] = _key;
        sub_index += 2;
        map.set(_key, map.get(_key) - 1);

        if (_value === 0) {
          map["delete"](_key);
        }
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

  return dp.join('');
}; //console.log(reorganizeString('ogccckcwmbmxtsbmozli'));
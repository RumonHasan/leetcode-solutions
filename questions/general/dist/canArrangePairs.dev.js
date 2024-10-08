"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var canArrange = function canArrange(arr, k) {
  var map = new Map();

  for (var i = 0; i < arr.length; i++) {
    var remainder = (arr[i] % k + k) % k; // to handle negative numbers

    map.set(remainder, (map.get(remainder) || 0) + 1);
  }

  for (var _i = 0; _i < arr.length; _i++) {
    var _remainder = (arr[_i] % k + k) % k;

    var compliment = (k - _remainder) % k;

    if (map.has(_remainder) && map.get(_remainder) > 0 && map.get(compliment) > 0) {
      if (_remainder === compliment) {
        // even case
        if (map.has(_remainder) && map.get(_remainder) > 1) {
          map.set(_remainder, map.get(_remainder) - 2);
          map.get(_remainder) === 0 && map["delete"](_remainder);
        }
      } else if (map.has(compliment)) {
        map.set(compliment, map.get(compliment) - 1);
        map.set(_remainder, map.get(_remainder) - 1);
        map.get(_remainder) === 0 && map["delete"](_remainder);
        map.get(compliment) === 0 && map["delete"](compliment);
      }

      if (map.size === 0) return false;
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          _ = _step$value[0],
          value = _step$value[1];

      if (value > 0) return false;
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

  return true;
}; //console.log(canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3));
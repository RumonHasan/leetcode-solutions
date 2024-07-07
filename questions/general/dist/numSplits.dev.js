"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var stringSplits = function stringSplits(s) {
  var mapOne = new Map();
  var mapTwo = new Map();
  var counter = 0; // using two maps delete the chars from two of one then compare

  var compareMaps = function compareMaps(mapone, maptwo) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = maptwo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            val = _step$value[1];

        mapone.set(key, mapone.get(key) - val);

        if (mapone.get(key) === 0) {
          mapone["delete"](key);
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

    return mapone.size === maptwo.size;
  };

  for (var i = 0; i < s.length; i++) {
    var currLetter = s[i];
    mapOne.set(currLetter, (mapOne.get(currLetter) || 0) + 1);
  } // iterate through the string one more time and check for the second string


  for (var j = 0; j < s.length; j++) {
    var _currLetter = s[j];
    mapTwo.set(_currLetter, (mapTwo.get(_currLetter) || 0) + 1);
    var mapone = new Map(mapOne);

    if (compareMaps(mapone, mapTwo)) {
      counter++;
    }
  }

  return counter;
}; //console.log(stringSplits('aaaaa'));
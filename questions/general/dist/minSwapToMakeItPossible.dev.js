"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minSwaps = function minSwaps(word1, word2) {
  var getOc = function getOc(s) {
    var map = new Map();
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

    return map;
  };

  var mapOne = getOc(word1);
  var mapTwo = getOc(word2);

  var mapOneKeys = _toConsumableArray(mapOne.keys());

  var mapTwoKeys = _toConsumableArray(mapTwo.keys()); //console.log(mapOneKeys, mapTwoKeys);
  // swapping based on map letters and incrementing and decrementing them


  var deleteKey = function deleteKey(key, map) {
    if (map.get(key) === 0) {
      map["delete"](key);
    } else {
      return;
    }
  };

  for (var i = 0; i < mapOneKeys.length; i++) {
    var mapOneLetter = mapOneKeys[i];

    for (var j = 0; j < mapTwoKeys.length; j++) {
      var mapTwoLetter = mapTwoKeys[j]; // remove letter one and add letter two

      if (mapOne.has(mapOneLetter)) {
        mapOne.set(mapOneLetter, mapOne.get(mapOneLetter) - 1);
        deleteKey(mapOneLetter, mapOne);
      }

      if (mapOne.has(mapTwoLetter)) {
        mapOne.set(mapTwoLetter, mapOne.get(mapTwoLetter) + 1);
      } else {
        mapOne.set(mapTwoLetter, 1);
      } // remove from letter two and add one


      if (mapTwo.has(mapTwoLetter)) {
        mapTwo.set(mapTwoLetter, mapTwo.get(mapTwoLetter) - 1);
        deleteKey(mapTwoLetter, mapTwo);
      }

      if (mapTwo.has(mapOneLetter)) {
        mapTwo.set(mapOneLetter, mapTwo.get(mapOneLetter) + 1);
      } else {
        mapTwo.set(mapOneLetter, 1);
      }

      if (mapOne.size === mapTwo.size) return true; // readding back for the next letter

      if (mapOne.has(mapTwoLetter)) {
        mapOne.set(mapTwoLetter, mapOne.get(mapTwoLetter) - 1);
        deleteKey(mapTwoLetter, mapOne);
      } // add letter one


      if (mapOne.has(mapOneLetter)) {
        mapOne.set(mapOneLetter, mapOne.get(mapOneLetter) + 1);
      } else {
        mapOne.set(mapOneLetter, 1);
      } // remove letter one form two


      if (mapTwo.has(mapOneLetter)) {
        mapTwo.set(mapOneLetter, mapTwo.get(mapOneLetter) - 1);
        deleteKey(mapOneLetter, mapTwo);
      }

      if (mapTwo.has(mapTwoLetter)) {
        mapTwo.set(mapTwoLetter, mapTwo.get(mapTwoLetter) + 1);
      } else {
        mapTwo.set(mapTwoLetter, 1);
      }
    }
  }

  return false;
}; // to get distinct chars
//console.log(minSwaps('abcc', 'aab'));
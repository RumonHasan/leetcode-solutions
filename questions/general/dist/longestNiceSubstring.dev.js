"use strict";

var longestNiceSubstring = function longestNiceSubstring(s) {
  var maxLength = 0;
  var collection = []; // function to check for the substring validity

  var checkSubtring = function checkSubtring(sub) {
    var letterSet = new Set();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = sub[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _char = _step.value;
        letterSet.add(_char);
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
      for (var _iterator2 = sub[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _char2 = _step2.value;

        var upper = _char2.toUpperCase();

        var lower = _char2.toLowerCase();

        if (!(letterSet.has(upper) && letterSet.has(lower))) {
          return false;
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

    return true;
  };

  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      var substring = s.slice(i, j + 1);

      if (substring.length >= 2) {
        if (checkSubtring(substring)) {
          maxLength = Math.max(maxLength, substring.length);

          if (maxLength <= substring.length) {
            collection.push(substring);
          }
        }
      }
    }
  }

  for (var _i = 0, _collection = collection; _i < _collection.length; _i++) {
    var str = _collection[_i];
    maxLength = Math.max(maxLength, str.length);
  }

  for (var _i2 = 0, _collection2 = collection; _i2 < _collection2.length; _i2++) {
    var _str = _collection2[_i2];

    if (_str.length === maxLength) {
      return _str;
    }
  }
}; //console.log(longestNiceSubstring('YazaAay'));
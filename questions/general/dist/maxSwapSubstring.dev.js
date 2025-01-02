"use strict";

var maxSwapSub = function maxSwapSub(text) {
  // If empty string or single char
  if (text.length <= 1) return text.length; // Get char counts

  var map = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      map.set(_char, (map.get(_char) || 0) + 1);
    } // Get groups of consecutive chars

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

  var collection = [];
  var prevChar = text[0];
  var counter = 1;

  for (var i = 1; i <= text.length; i++) {
    // Need to check <= to handle last group
    if (i === text.length || text[i] !== prevChar) {
      collection.push({
        "char": prevChar,
        charCount: counter
      });

      if (i < text.length) {
        prevChar = text[i];
        counter = 1;
      }
    } else {
      counter++;
    }
  }

  var maxLen = 0; // Bridge case

  for (var _i = 0; _i < collection.length - 2; _i++) {
    if (collection[_i + 1].charCount === 1 && collection[_i]["char"] === collection[_i + 2]["char"]) {
      var combinedLength = collection[_i].charCount + collection[_i + 2].charCount;
      maxLen = Math.max(maxLen, combinedLength);
    }
  } // Extension case


  for (var _i2 = 0, _collection = collection; _i2 < _collection.length; _i2++) {
    var group = _collection[_i2];
    var currChar = group["char"];
    var currCount = group.charCount;

    if (map.get(currChar) > currCount) {
      maxLen = Math.max(maxLen, currCount + 1);
    }

    maxLen = Math.max(maxLen, currCount); // Also consider current length
  }

  return maxLen;
}; // Test


console.log(maxSwapSub('aaabaaa')); // Should print 3
"use strict";

var longestWordAfterDeleting = function longestWordAfterDeleting(s, dictionary) {
  var collection = []; // pattern matching

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dictionary[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      var wIndex = 0;

      for (var i = 0; i < s.length; i++) {
        var sLetter = s[i];

        if (sLetter === word[wIndex]) {
          wIndex++;
        }
      }

      if (wIndex === word.length) {
        collection.push(word);
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

  collection.sort(function (a, b) {
    if (a.length > b.length) {
      return b.length - a.length;
    } else if (a.length === b.length) {
      return a.localeCompare(b);
    }
  });
  if (collection.length === 0) return '';
  return collection[0];
}; //console.log(longestWordAfterDeleting('abce', ['abe', 'abc']));
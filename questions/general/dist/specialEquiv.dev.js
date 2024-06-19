"use strict";

var numSpecialEquivGroups = function numSpecialEquivGroups(words) {
  var set = new Set(); // function to transform word

  var transformWord = function transformWord(word) {
    var even = word.filter(function (_, index) {
      return index % 2 === 0 && word[index];
    }).sort();
    var odd = word.filter(function (_, index) {
      return index % 2 === 1 && word[index];
    }).sort();
    return "".concat(even.join('')).concat(odd.join(''));
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      set.add(transformWord(word.split('')));
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

  return set.size;
}; // return largest group;
// console.log(
//   numSpecialEquivGroups(['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx'])
// );
"use strict";

var countPalindrome3 = function countPalindrome3(s) {
  var map = new Map();
  var leftSet = new Set();
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

  var res = new Set();

  for (var i = 0; i < s.length; i++) {
    var mid = s[i];
    map.set(mid, map.get(mid) - 1); // removing right side

    if (map.has(mid) && map.get(mid) === 0) map["delete"](mid); // checking all letters

    for (var j = 97; j <= 122; j++) {
      var palLetter = String.fromCharCode(j);

      if (leftSet.has(palLetter) && map.has(palLetter)) {
        res.add("".concat(palLetter).concat(mid).concat(palLetter));
      }
    }

    if (!leftSet.has(mid)) {
      leftSet.add(mid);
    }
  }

  return res.size;
}; // get unique substring of len 3 palindromes
//console.log(countPalindrome3('bbcbaba'));
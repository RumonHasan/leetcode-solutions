"use strict";

var removeDuplicateLetters = function removeDuplicateLetters(s) {
  var seenMap = new Map();
  var map = new Map();
  var stack = []; // have to keep track of the frequency and seen in order to traverse

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      map.set(_char, (map.get(_char) || 0) + 1);
      seenMap.set(_char, false);
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

  for (var i = 0; i < s.length; i++) {
    var currChar = s[i]; // only can be popped if occurence is more than 0

    map.set(currChar, map.get(currChar) - 1); // decrease either from the total freuency

    if (seenMap.get(currChar)) continue; // only pop when its bigger than 0

    while (stack.length && stack[stack.length - 1] > currChar && map.get(stack[stack.length - 1]) > 0) {
      seenMap.set(stack.pop(), false); // because its not seen from the left side
    } // only add if the element has not been seen before


    stack.push(currChar);
    seenMap.set(currChar, true);
  }

  return stack.join('');
}; // using a combination of monotonic stack.. incresing order... frequency maintenance and seen array


console.log(removeDuplicateLetters('cbacdcbc'));
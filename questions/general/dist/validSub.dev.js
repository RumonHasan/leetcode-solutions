"use strict";

var validSub = function validSub(s) {
  var stack = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      stack.push(_char);

      if (stack.length && stack[stack.length - 1] === 'c') {
        if (stack[stack.length - 2] === 'b' && stack[stack.length - 3] === 'a') {
          for (var i = 0; i < 3; i++) {
            stack.pop();
          }
        }
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

  return stack.length === 0;
}; //console.log(validSub("abccba"));
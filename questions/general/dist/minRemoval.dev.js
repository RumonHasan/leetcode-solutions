"use strict";

var minRemoval = function minRemoval(s) {
  var stack = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;

      if (stack.length) {
        if (_char == 'B' && stack[stack.length - 1] == 'A' || _char == 'D' && stack[stack.length - 1] == 'C') {
          stack.pop();
        } else {
          stack.push(_char);
        }
      } else {
        stack.push(_char);
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

  return stack.join('');
}; //console.log(minRemoval('ABFCACDB'));


var fancyString = function fancyString(s) {
  var stack = [];
  var counter = 0;

  for (var i = 0; i < s.length; i++) {
    var _char2 = s[i];

    if (stack.length) {
      if (stack[stack.length - 1] === _char2) {
        stack.push(_char2);
        counter++;

        if (counter === 3) {
          stack.pop();
          counter -= 1;
        }
      } else {
        counter = 1;
        stack.push(_char2);
      }
    } else {
      stack.push(_char2);
      counter = 1;
    }
  }

  return stack.join('');
}; //console.log(fancyString('aaabaaaa'));


var uniqueLen = function uniqueLen(s) {
  var res = new Set();
  var left = new Set();
  var midHash = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _char3 = _step2.value;
      midHash[_char3] = (midHash[_char3] || 0) + 1;
    } // main iteration

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

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = s[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _char4 = _step3.value;
      var mid = _char4; // remove mid or it will duplicate values to the right

      midHash[_char4] -= 1; // in a way represents the right side

      if (midHash[_char4] === 0) delete midHash[_char4]; // checking all letters

      for (var i = 97; i <= 122; i++) {
        var _char5 = String.fromCharCode(i);

        if (left.has(_char5) && midHash[_char5]) {
          res.add("".concat(_char5).concat(mid).concat(_char5));
        }
      }

      if (!left.has(_char4)) {
        left.add(_char4);
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return res.size;
};

console.log(uniqueLen('aabca'));
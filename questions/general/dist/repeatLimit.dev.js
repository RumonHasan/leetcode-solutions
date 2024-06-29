"use strict";

var removeDuplcates = function removeDuplcates(s, k) {
  var stack = [[s[0], 1]];

  for (var i = 1; i < s.length; i++) {
    var currChar = s[i];

    if (stack.length && stack[stack.length - 1][0] === currChar) {
      stack[stack.length - 1][1] += 1;

      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([currChar, 1]);
    }
  }

  var result = '';

  for (var _i = 0, _stack = stack; _i < _stack.length; _i++) {
    var el = _stack[_i];
    result += el[0].repeat(el[1]);
  }

  return result;
}; //console.log(removeDuplcates('deeedbbcccbdaa', 3));
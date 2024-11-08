"use strict";

var reverseParentheses = function reverseParentheses(s) {
  var stack = [];
  var end = 0;

  while (end < s.length) {
    var currChar = s[end]; // if its closing then check for the while loop

    if (currChar === ')') {
      var localArray = [];

      while (stack.length && stack[stack.length - 1] !== '(') {
        localArray.push(stack[stack.length - 1]);
        console.log(stack[stack.length - 1]);
        stack.pop();
      }

      stack.pop(); // pops the last bracket

      for (var _i = 0, _localArray = localArray; _i < _localArray.length; _i++) {
        var _char = _localArray[_i];
        stack.push(_char);
      }
    } else {
      stack.push(currChar);
    }

    end++;
  }

  return stack.join('');
}; //console.log(reverseParentheses('(u(love)i)'));
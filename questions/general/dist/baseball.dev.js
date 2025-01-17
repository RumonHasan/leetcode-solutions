"use strict";

var calPoints = function calPoints(operations) {
  var stack = [];

  for (var i = 0; i < operations.length; i++) {
    var currOperation = operations[i];
    var check = !isNaN(currOperation);

    if (stack.length === 0) {
      if (check) {
        stack.push(Number(currOperation));
      } else {
        stack.push(currOperation);
      }
    } else {
      if (check) {
        stack.push(Number(currOperation));
      } else {
        if (currOperation === 'C') {
          stack.pop();
        } else if (currOperation === 'D') {
          stack.push(stack[stack.length - 1] * 2);
        } else {
          stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
        }
      }
    }
  }

  return stack.reduce(function (ac, curr) {
    return ac + curr;
  }, 0);
}; // stack approach


console.log(calPoints(['5', '2', 'C', 'D', '+']));
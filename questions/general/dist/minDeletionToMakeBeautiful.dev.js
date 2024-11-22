"use strict";

var meanDeletionToMakeBeautiful = function meanDeletionToMakeBeautiful(nums) {
  var stack = [];
  var end = 0;

  while (end < nums.length) {
    var currNum = nums[end];

    if (end === 0) {
      stack.push(currNum);
    } else {
      var stackIndex = stack.length - 1;

      if (stackIndex % 2 === 0) {
        if (currNum != stack[stackIndex]) {
          stack.push(currNum);
        }
      } else {
        stack.push(currNum);
      }
    }

    end++;
  }

  var stackLen = stack.length % 2 === 0 ? stack.length : stack.length - 1;
  return nums.length - stackLen;
}; // using stack to check


console.log(meanDeletionToMakeBeautiful([1, 1, 2, 2, 3, 3]));
"use strict";

var minOperations = function minOperations(nums, x) {
  var maxWindow = -Infinity;
  var end = 0;
  var start = 0;
  var currSum = 0;
  var target = nums.reduce(function (a, b) {
    return a + b;
  }, 0) - x;

  while (end < nums.length) {
    currSum += nums[end];

    while (start <= end && currSum > target) {
      currSum -= nums[start];
      start++;
    }

    if (currSum === target) {
      maxWindow = Math.max(maxWindow, end - start + 1);
    }

    end++;
  }

  var minWindow = nums.length - maxWindow;
  return minWindow;
};

console.log(minOperations([5, 2, 3, 1, 1], 5));
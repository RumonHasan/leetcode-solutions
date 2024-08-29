"use strict";

var minPairSum = function minPairSum(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  var max = 0;

  for (var i = 0; i < nums.length / 2; i++) {
    var pairSum = nums[i] + nums[nums.length - i - 1];
    max = Math.max(max, pairSum);
  }

  return max;
};

console.log(minPairSum([3, 5, 4, 2, 4, 6]));
"use strict";

var rangeSum = function rangeSum(nums, n, left, right) {
  var MOD = 1000000007; // 10^9 + 7 // adjustment for having over 500,000 elements

  var array = [];

  for (var i = 0; i < nums.length; i++) {
    var currentSum = 0;

    for (var j = i; j < nums.length; j++) {
      currentSum = (currentSum + nums[j]) % MOD;
      array.push(currentSum);
    }
  }

  array.sort(function (a, b) {
    return a - b;
  });
  var sum = 0;

  for (var _i = left; _i <= right; _i++) {
    sum = (sum + array[_i - 1]) % MOD;
  }

  return sum;
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
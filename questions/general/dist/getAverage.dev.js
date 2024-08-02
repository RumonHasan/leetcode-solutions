"use strict";

var getAverage = function getAverage(nums, k) {
  var dp = new Array(nums.length).fill(-1);
  var kLen = k * 2 + 1;
  var total = 0;
  var end = 0;
  var index = 0;

  while (index < kLen) {
    total += nums[index];
    index++;
  }

  var midPoint = index - k - 1;
  var average = Math.floor(total / kLen);
  dp[midPoint] = average; // using sliding window to calculate the remaining slots

  end = kLen;
  var start = 0;

  while (end < nums.length) {
    total -= nums[start];
    total += nums[end];
    average = Math.floor(total / kLen); // updating the average in the dp based on the mid point

    var _midPoint = end - k;

    dp[_midPoint] = average;
    start++;
    end++;
  }

  return dp;
}; // so the total length of the array set is always gonna be an odd number


console.log(getAverage([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
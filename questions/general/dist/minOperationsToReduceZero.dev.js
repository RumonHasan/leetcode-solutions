"use strict";

var minReduceToZero = function minReduceToZero(nums, x) {
  var target = nums.reduce(function (a, b) {
    return a + b;
  }, 0) - x;
  var start = 0;
  var sum = 0;
  var maxLen = -1;

  for (var end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (start < nums.length && sum > target) {
      sum -= nums[start];
      start++;
    }

    if (sum === target) {
      maxLen = Math.max(maxLen, end - start + 1);
    }
  }

  return maxLen === -1 ? maxLen : nums.length - maxLen;
}; //console.log(minReduceToZero([5, 6, 7, 8, 9], 4));
// min swaps to make 0s and 1s consequtive and even length in per substring


var minChange = function minChange(s) {
  // edge cases
  var sArray = s.split('');
  if (sArray.every(function (letter) {
    return letter === '0';
  }) || sArray.every(function (letter) {
    return letter == '1';
  })) return 0;
  var swaps = 0;

  for (var i = 1; i < s.length; i += 2) {
    var curr = s[i];
    var prev = s[i - 1];

    if (curr !== prev) {
      swaps++;
    }
  }

  return swaps;
}; //console.log(minChange('1001'));
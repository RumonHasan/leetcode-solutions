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
// checking minimal subarray length then checking with available target prefix


var minSubarrayLength = function minSubarrayLength(target, nums) {
  if (target > nums.reduce(function (a, b) {
    return a + b;
  }, 0)) return 0;
  var minLength = nums.length;
  var end = 0;
  var start = 0;
  var runningSum = 0;

  while (end < nums.length) {
    var currNum = nums[end];
    runningSum += currNum;

    while (start < nums.length && runningSum > target) {
      if (runningSum >= target) {
        // while reducing checking one more time so it checks the running sum
        minLength = Math.min(minLength, end - start + 1);
      }

      runningSum -= nums[start];
      start++;
    }

    if (runningSum >= target) {
      minLength = Math.min(minLength, end - start + 1);
    }

    end++;
  }

  return minLength;
};

console.log(minSubarrayLength(11, [1, 2, 3, 4, 5])); // using dp but with the helf multidimensional dp approach

var maximumLengthOfRepeatedSubarray = function maximumLengthOfRepeatedSubarray(nums1, nums2) {
  var dp = [];

  for (var i = 0; i < nums1.length + 1; i++) {
    dp.push(new Array(nums2.length + 1).fill(0));
  }

  var maxLength = 0;

  for (var _i = nums1.length - 1; _i >= 0; _i--) {
    var valOne = nums1[_i];

    for (var j = nums2.length - 1; j >= 0; j--) {
      var valTwo = nums2[j];

      if (valOne === valTwo) {
        dp[_i][j] += dp[_i + 1][j + 1] + 1;
        maxLength = Math.max(maxLength, dp[_i][j]);
      }
    }
  }

  return maxLength;
}; //console.log(maximumLengthOfRepeatedSubarray([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
"use strict";

var longestSubNoRepeat = function longestSubNoRepeat(s) {
  var map = new Map(); // to keep count of the chars

  var maxLen = 0;
  var end = 0;
  var start = 0;

  while (end < s.length) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);

    while (map.get(s[end]) > 1) {
      if (map.has(s[start])) {
        map.set(s[start], map.get(s[start]) - 1);

        if (map.get(s[start]) === 0) {
          map["delete"](s[start]);
        }
      }

      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }

  return maxLen;
}; // console.log(longestSubNoRepeat('pwwkew'));
// getting the max sum from two non overlapping subarrays


var maxTwoSumNonOverlap = function maxTwoSumNonOverlap(nums, firstLen, secondLen) {
  console.log(nums);

  var secondAttempt = function secondAttempt() {
    var remainSum = function remainSum(array, len, mainMax) {
      var total = 0;
      var max = 0;

      for (var i = 0; i < len; i++) {
        total += array[i];
      }

      max = total;
      var end = len;
      var start = 0;

      while (end < array.length) {
        total += array[end];
        total -= array[start];
        max = Math.max(total, max);
        start++;
        end++;
        console.log(max);
      }

      var localFinal = 0;
      localFinal = mainMax + max;
      return localFinal;
    };

    var max = 0;
    var total = 0;

    for (var i = 0; i < firstLen; i++) {
      total += nums[i];
    }

    max = total;
    var end = firstLen;

    var _final = remainSum(nums.slice(end, nums.length), secondLen, max);

    var start = 0;

    while (end < nums.length) {
      total -= nums[start];
      total += nums[end];
      max = Math.max(max, total);

      if (nums.length - end >= secondLen) {
        var subSlice = nums.slice(end, nums.length);
        _final = Math.max(_final, remainSum(subSlice, secondLen, max));
        console.log(subSlice);
      }

      end++;
      start++;
    }

    return _final;
  };
}; //console.log(maxTwoSumNonOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));


var partitionIntoThreeEqualParts = function partitionIntoThreeEqualParts(arr) {
  var total = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  var singlePartition = total / 3;
  var partitionCount = 0;
  var partitionTotal = 0;

  for (var i = 0; i < arr.length; i++) {
    var currEl = arr[i];
    partitionTotal += currEl;

    if (partitionTotal === singlePartition) {
      partitionCount++;
      partitionTotal = 0;
    }
  }

  console.log(partitionCount);
  return partitionCount === 3 || partitionCount > 3;
}; //console.log(partitionIntoThreeEqualParts([0, 0, 0, 0]));
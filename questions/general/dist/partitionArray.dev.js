"use strict";

var partitionArray = function partitionArray(nums, k) {
  nums.sort(function (a, b) {
    return a - b;
  });
  var count = 1;
  var end = 1;
  var start = 0;
  var flag = true;

  while (end < nums.length) {
    if (nums[end] - nums[start] > k) {
      flag = false;
      start = end;
    }

    if (!flag) {
      count++;
    }

    flag = true;
    end++;
  }

  return count;
}; //[1,2,3,5,6, 7]-> ans -> 2
//console.log(partitionArray([3, 6, 1, 2, 5, 7], 2));
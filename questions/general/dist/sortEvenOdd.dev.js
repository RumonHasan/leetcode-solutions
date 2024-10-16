"use strict";

var sortEvenOdd = function sortEvenOdd(nums) {
  var dp = new Array(nums.length).fill(0);
  var odd = [];
  var even = [];

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];

    if (i % 2 === 0) {
      even.push(currNum);
    } else {
      odd.push(currNum);
    }
  }

  odd.sort(function (a, b) {
    return b - a;
  });
  even.sort(function (a, b) {
    return a - b;
  });
  var oddIndex = 0;
  var evenIndex = 0;
  var check = false;
  var index = 0;

  while (index < dp.length) {
    if (!check && evenIndex < even.length) {
      dp[index] = even[evenIndex];
      check = true;
      evenIndex++;
    } else {
      if (oddIndex < odd.length) {
        dp[index] = odd[oddIndex];
        check = false;
        oddIndex++;
      }
    }

    index++;
  }

  return dp;
}; // odd indices is descending
// even indices is ascending


console.log(sortEvenOdd([4, 1, 2, 3]));
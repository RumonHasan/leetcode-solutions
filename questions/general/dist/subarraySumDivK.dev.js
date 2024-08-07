"use strict";

var subArraySum = function subArraySum(nums, k) {
  var runningSum = 0;
  var map = new Map([[0, 1]]);
  var resultCount = 0;

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    runningSum += currNum;
    var modulus = Math.abs(runningSum % k);

    if (map.has(modulus)) {
      resultCount += map.get(modulus);
      map.set(modulus, map.get(modulus) + 1);
    } else {
      map.set(modulus, 1);
    }

    console.log(map);
  }

  return resultCount;
}; //console.log(subArraySum([-1, 2, 9], 2));
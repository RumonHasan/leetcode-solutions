"use strict";

var maxCircularSum = function maxCircularSum(nums) {
  var globalMax = nums[0];
  var globalMin = nums[0];
  var localMin = nums[0];
  var localMax = nums[0];
  var mainTotal = nums.reduce(function (a, b) {
    return a + b;
  }, 0);
  var index = 1;

  while (index < nums.length) {
    localMin = Math.min(nums[index], localMin + nums[index]);
    localMax = Math.max(nums[index], localMax + nums[index]);

    if (localMax > globalMax) {
      globalMax = localMax;
    }

    if (localMin < globalMin) {
      globalMin = localMin;
    }

    index++;
  } // if all are negative then then the global max can be taken directly for consideration


  if (globalMax < 0) {
    return globalMax;
  }

  return Math.max(mainTotal - globalMin, globalMax);
}; //console.log(maxCircularSum([-3, -2, -3]));
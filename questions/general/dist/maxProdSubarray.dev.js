"use strict";

var maxProdSubarray = function maxProdSubarray(nums) {
  var max = 1;
  var min = 1;
  var finalMax = nums[0];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = 1;
      min = 1;
    }

    var temp = max * nums[i];
    max = Math.max(max * nums[i], min * nums[i], nums[i]);
    min = Math.min(min * nums[i], temp, nums[i]);
    finalMax = Math.max(min, max, finalMax);
  }

  return finalMax;
}; //console.log(maxProdSubarray([2, 3, -2, 4]));
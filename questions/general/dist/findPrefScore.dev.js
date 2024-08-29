"use strict";

var findPrefixScore = function findPrefixScore(nums) {
  var makeArray = function makeArray(len) {
    return new Array(len).fill(0);
  };

  var prefDp = makeArray(nums.length);
  var result = makeArray(nums.length);
  var maxNum = 0;

  for (var i = 0; i < nums.length; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    prefDp[i] = nums[i] + maxNum;
    result[i] = i === 0 ? result[i] = prefDp[i] : result[i - 1] + prefDp[i];
  }

  return result;
}; //console.log(findPrefixScore([2, 3, 7, 5, 10]));
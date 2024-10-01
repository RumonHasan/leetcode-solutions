"use strict";

var continuousSubarraySum = function continuousSubarraySum(nums, k) {
  var prefMap = new Map();
  prefMap.set(0, -1); // incase the single element is divisble by k
  // main iteration to check whether the remainder is present or not in the map

  var prefSum = 0;

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    var currIndex = i;
    prefSum += currNum;
    var modVal = prefSum % k; // adding remainder as key and index as val to map

    if (prefMap.has(modVal)) {
      // if it exists then check
      var size = Math.abs(prefMap.get(modVal) - currIndex);

      if (size >= 2) {
        return true;
      }
    } else {
      prefMap.set(modVal, currIndex); // setting it if mod does not exist
    }
  }

  return false;
};

console.log(continuousSubarraySum([23, 2, 6, 4, 7], 6));
"use strict";

var contiguousSubarray = function contiguousSubarray(nums) {
  var map = new Map();
  var zeroCounter = 0;
  var oneCounter = 0;
  var maxLen = 0;

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];

    if (currNum === 0) {
      zeroCounter++;
    } else {
      oneCounter++;
    }

    var currDiff = oneCounter - zeroCounter;

    if (map.has(currDiff)) {
      maxLen = Math.max(i - map.get(currDiff), maxLen);
    } else {
      map.set(currDiff, i);
    } // special case


    if (zeroCounter === oneCounter) {
      maxLen = Math.max(maxLen, zeroCounter + oneCounter);
    }
  }

  return maxLen;
}; //console.log(contiguousSubarray([1, 1, 0, 0]));
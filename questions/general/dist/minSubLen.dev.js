"use strict";

var minSubLen = function minSubLen(target, nums) {
  var end = 0;
  var start = 0;
  var total = 0;
  var maxLen = Infinity;

  while (end < nums.length) {
    var currNum = nums[end];
    total += currNum;

    while (total > target) {
      if (total >= target) {
        // checking if its bigger or equal then keep reducing and adding
        maxLen = Math.min(end - start + 1, maxLen);
      }

      total -= nums[start];
      start++;
    } // general condiiton


    if (total >= target) {
      maxLen = Math.min(end - start + 1, maxLen);
    }

    end++;
  }

  return maxLen;
}; //console.log(minSubLen(11, [1, 2, 3, 4, 5]));
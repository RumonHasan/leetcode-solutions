"use strict";

var subTwo = function subTwo(nums) {
  var runSum = nums[0] + nums[1];
  var set = new Set();
  set.add(runSum);
  var end = 2;
  var start = 0;

  while (end < nums.length) {
    runSum -= nums[start];
    runSum += nums[end];
    if (set.has(runSum)) return true;
    set.add(runSum);
    start++;
    end++;
  }

  return false;
};

console.log(subTwo([1, 2, 3, 4, 5]));
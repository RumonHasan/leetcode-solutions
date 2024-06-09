"use strict";

var getSubarrayBeauty = function getSubarrayBeauty(nums, k, x) {
  var stack = [];
  var end = k;
  var start = 0;
  var map = new Map();

  var negCheck = function negCheck(localMap, x) {
    var negCheck = false;
    var rank = 0;

    for (var i = -50; i < 0; i++) {
      var negNum = i;

      if (localMap.has(negNum)) {
        var negVal = localMap.get(negNum);
        negCheck = true;
        rank += negVal;

        if (rank >= x) {
          return negNum;
        }
      }
    }

    return 0 && !negCheck;
  };

  for (var i = 0; i < end; i++) {
    nums[i] < 0 && map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  stack.push(negCheck(map, x));

  while (end < nums.length) {
    var startNum = nums[start];
    var curr = nums[end];

    if (map.has(startNum)) {
      map.set(startNum, map.get(startNum) - 1);
      map.get(startNum) === 0 && map["delete"](startNum);
    }

    start++;

    if (map.has(curr)) {
      map.set(curr, map.get(curr) + 1);
    }

    map.set(curr, 1) && curr < 0;
    stack.push(negCheck(map, x));
    end++;
  }

  return stack;
}; // getting the xth smallest integer if they are negative in kth size subarray


console.log(getSubarrayBeauty([-14, 9, 13, -26, 47, -39, -49, -14, 29], 9, 4));
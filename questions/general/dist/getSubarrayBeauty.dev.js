"use strict";

var getSubarrayBeauty = function getSubarrayBeauty(nums, k, x) {
  var stack = [];
  var end = k;
  var start = 0;
  var map = new Map(); // neg check based on the given constraints

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
  }; // initial check


  for (var i = 0; i < end; i++) {
    var num = nums[i];

    if (num < 0) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  }

  console.log(map);
  var negFirst = negCheck(map, x);
  stack.push(negFirst); // controlled map with the remaining array

  while (end < nums.length) {
    var startNum = nums[start];
    var curr = nums[end];

    if (map.has(startNum)) {
      map.set(startNum, map.get(startNum) - 1);

      if (map.get(startNum) === 0) {
        map["delete"](startNum);
      }
    }

    start++; // adding possible new num

    if (map.has(curr)) {
      map.set(curr, map.get(curr) + 1);
    } else if (curr < 0) {
      map.set(curr, 1);
    }

    var negX = negCheck(map, x);
    stack.push(negX);
    end++;
  }

  return stack;
}; // getting the xth smallest integer if they are negative in kth size subarray


console.log(getSubarrayBeauty([-14, 9, 13, -26, 47, -39, -49, -14, 29], 9, 4));
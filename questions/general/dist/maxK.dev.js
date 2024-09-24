"use strict";

var maximumSub = function maximumSub(nums, k) {
  var map = new Map();
  var total = 0;

  for (var i = 0; i < k; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    total += nums[i];
  }

  var max = map.size === k ? total : 0;
  var end = k;
  var start = 0;

  while (end < nums.length) {
    if (map.has(nums[start])) {
      map.set(nums[start], map.get(nums[start]) - 1);

      if (map.get(nums[start]) === 0) {
        map["delete"](nums[start]);
      }
    }

    total -= nums[start];
    total += nums[end];
    map.set(nums[end], (map.get(nums[end]) || 0) + 1); // adding max

    if (map.size === k) {
      max = Math.max(max, total);
    }

    start++;
    end++;
  }

  return max;
}; //console.log(maximumSub([1, 5, 4, 2, 9, 9, 9], 3));
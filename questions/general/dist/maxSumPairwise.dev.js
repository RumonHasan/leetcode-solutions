"use strict";

var maxSumPairwise = function maxSumPairwise(nums, m, k) {
  var total = 0;
  var map = new Map();

  for (var i = 0; i < k; i++) {
    var num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
    total += num;
  }

  var max = map.size >= m ? total : 0;
  var start = 0;
  var end = k;

  while (end < nums.length) {
    var first = nums[start];
    map.set(first, map.get(first) - 1);

    if (map.get(first) === 0) {
      map["delete"](first);
    }

    map.set(nums[end], (map.get(nums[end]) || 0) + 1);
    total -= first;
    total += nums[end];

    if (map.size >= m) {
      max = Math.max(max, total);
    }

    start++;
    end++;
  }

  return max;
}; // with atleast m distinct elements with size k
//console.log(maxSumPairwise([2, 6, 7, 3, 1, 7], 3, 4));
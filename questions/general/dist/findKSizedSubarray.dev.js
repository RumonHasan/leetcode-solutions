"use strict";

var findKSizedSubarray = function findKSizedSubarray(nums, k) {
  var result = [];
  var counter = 1;

  for (var i = 1; i < k; i++) {
    var curr = nums[i];
    var prev = nums[i - 1]; // add counter if

    if (prev + 1 === curr) {
      counter++;
    }
  }

  result.push(counter === k ? nums[k - 1] : -1); // if counter is k then add the last element;

  var end = k;
  var start = 0;

  while (end < nums.length) {
    if (nums[start] + 1 === nums[start + 1]) {
      counter--;
    } // checking for the right element when added


    if (nums[end] === nums[end - 1] + 1) {
      counter++;
    }

    if (counter === k) {
      result.push(nums[end]);
    } else {
      result.push(-1);
    }

    start++;
    end++;
  }

  return result;
}; // have to find k sized consequtive power of subarrays
//console.log(findKSizedSubarray([1, 2, 3, 4, 3, 2, 5], 3));
// checking for max unique subarray sum


var maxSubarraySum = function maxSubarraySum(nums, k) {
  var map = new Map();
  var currTotal = 0;
  var max = 0;

  for (var i = 0; i < k; i++) {
    var num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
    currTotal += num;
  }

  if (map.size === k) {
    max = currTotal;
  }

  for (var _i = k; _i < nums.length; _i++) {
    var curr = nums[_i];
    var start = nums[_i - k];

    if (map.has(start)) {
      map.set(start, map.get(start) - 1);

      if (map.get(start) === 0) {
        map["delete"](start);
      }
    }

    map.set(curr, (map.get(curr) || 0) + 1);
    currTotal -= start;
    currTotal += curr;

    if (map.size === k) {
      max = Math.max(max, currTotal);
    }
  }

  return max;
};

console.log(maxSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
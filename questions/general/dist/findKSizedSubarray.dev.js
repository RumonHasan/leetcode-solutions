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

  result.push(counter === k ? nums[k - 1] : -1); // initial counter for k size check;

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


console.log(findKSizedSubarray([1, 2, 3, 4, 3, 2, 5], 3));
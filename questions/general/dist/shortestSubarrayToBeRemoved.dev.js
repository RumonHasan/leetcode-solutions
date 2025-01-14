"use strict";

var shortestSubarrayToBeRemoved = function shortestSubarrayToBeRemoved(arr) {
  // prefix
  var right = arr.length - 1;

  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  var prefRight = right; // suffix removal

  var left = 1;

  while (left < arr.length && arr[left - 1] < arr[left]) {
    left++;
  }

  var prefLeft = left;
  console.log(prefLeft, prefRight); // getting the middle portion
};

console.log(shortestSubarrayToBeRemoved([1, 2, 3, 10, 4, 2, 3, 5]));
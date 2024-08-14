"use strict";

var threePointerSlidingWindow = function threePointerSlidingWindow(nums, k) {
  var oddCheck = function oddCheck(num) {
    return num % 2 === 1;
  };

  var left = 0;
  var mid = 0;
  var end = 0;
  var count = 0;
  var oddCounter = 0;

  while (end < nums.length) {
    var currNum = nums[end];

    if (oddCheck(currNum)) {
      oddCounter++;
    } // when oddCount exceeds k


    while (oddCounter > k) {
      if (oddCheck(nums[left])) {
        oddCounter--;
      }

      left++; // updating mid to keep track

      mid = left;
    } // updating the mid and calculating the length


    if (oddCounter === k) {
      while (mid < nums.length) {
        if (oddCheck(nums[mid])) {
          break;
        }

        mid++;
      }

      count += mid - left + 1;
    }

    end++;
  }

  return count;
};

console.log(threePointerSlidingWindow([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
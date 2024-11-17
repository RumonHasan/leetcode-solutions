"use strict";

var numOfPairs = function numOfPairs(nums, target) {
  var counter = 0;

  for (var i = 0; i < nums.length; i++) {
    var checkStr = nums[i];

    for (var j = 0; j < nums.length; j++) {
      if (i !== j) {
        var sub = nums[j];

        if (checkStr + sub === target) {
          counter++;
        }
      }
    }
  }

  return counter;
}; // checking how many pairs equal to target; need to find the suffix in order to check
//console.log(numOfPairs(['74', '1', '67', '1', '74'], '174'));


var meanOperationsToMakeKEqual = function meanOperationsToMakeKEqual(nums, k) {
  nums.sort(function (a, b) {
    return a - b;
  }); // once sorted the element will be on the right side

  var medianElement = nums[Math.floor(nums.length / 2)];
  var centralCounter = 0;
  var midIndex = Math.floor(nums.length / 2); // reduce left

  if (medianElement > k) {
    while (midIndex >= 0) {
      var curr = nums[midIndex];
      if (curr <= k) break;
      centralCounter += Math.abs(k - curr);
      midIndex--;
    }
  } else {
    // increase right if median is less than k
    while (midIndex < nums.length) {
      var _curr = nums[midIndex];
      if (_curr >= k) break;
      centralCounter += Math.abs(k - _curr);
      midIndex++;
    }
  }

  return centralCounter++;
}; // if the median is less than or equal to k increase the value in the right half and if the median is greater than k reduce the values in left half
//console.log(meanOperationsToMakeKEqual([45, 50, 89, 30, 4, 5, 91, 58], 31));
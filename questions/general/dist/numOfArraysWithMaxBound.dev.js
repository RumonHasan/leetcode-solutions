"use strict";

var numberOfArraysWithMaxBound = function numberOfArraysWithMaxBound(nums, left, right) {
  var subcount = 0;

  var subChecker = function subChecker(bound) {
    var count = 0;
    var end = 0;
    var start = 0;

    while (end < nums.length) {
      var currNum = nums[end];

      if (currNum > bound) {
        start = end + 1;
      } else if (currNum <= bound) {
        count += end - start + 1;
      }

      end++;
    }

    return count;
  };

  var rightBound = subChecker(right);
  var leftBound = subChecker(left - 1); // checking till the left bound for deductions

  return subcount = rightBound - leftBound;
}; // goal is to find the max bound of elements within the right and left upper limit
//note keep in mind that the subarray calculation will be divided between two points separated by the right limit


console.log(numberOfArraysWithMaxBound([2, 9, 2, 5, 6], 2, 8));
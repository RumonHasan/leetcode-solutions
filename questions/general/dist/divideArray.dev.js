"use strict";

var divideArray = function divideArray(nums, k) {
  var numOfParitions = nums.length / 3;
  nums.sort(function (a, b) {
    return a - b;
  });
  var end = 2;
  var stack = [];
  var check = true;

  while (end < nums.length) {
    var currNum = nums[end];
    var prevNum = nums[end - 1];
    var sPrevNum = nums[end - 2];

    if (Math.abs(currNum - prevNum) <= k && Math.abs(prevNum - sPrevNum) <= k && Math.abs(sPrevNum - currNum) <= k) {
      stack.push([currNum, prevNum, sPrevNum]);
    } else {
      check = false;
      break;
    }

    end += 3;
  }

  if (!check) return [];
  return stack.length === numOfParitions ? stack : [];
}; //console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
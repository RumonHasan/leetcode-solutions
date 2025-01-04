"use strict";

var numberOfWaysToSplit = function numberOfWaysToSplit(nums) {
  var n = nums.length; // Build left prefix sum

  var leftPref = [BigInt(nums[0])];

  for (var i = 1; i < n; i++) {
    leftPref.push(leftPref[leftPref.length - 1] + BigInt(nums[i]));
  } // Build right prefix sum


  var rightPref = [BigInt(nums[n - 1])];

  for (var _i = n - 2; _i >= 0; _i--) {
    rightPref.push(rightPref[rightPref.length - 1] + BigInt(nums[_i]));
  } // main algo to check for valid splits


  rightPref.reverse(); // reduces run time significantly when reversed once instead of adding by  unshift

  var splitCounter = 0;

  for (var _i2 = 0; _i2 < n - 1; _i2++) {
    var prefLeft = leftPref[_i2];
    var prefRight = rightPref[_i2 + 1];

    if (prefLeft >= prefRight) {
      splitCounter++;
    }
  }

  return splitCounter;
}; // approach: using the idea of general prefix left and right sums
// another easy way is to calculate total and subtract from the end of things


console.log(numberOfWaysToSplit([10, 4, -8, 7]));
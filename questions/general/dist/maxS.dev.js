"use strict";

var maxSwap = function maxSwap(num) {
  var nums = String(num).split('');
  var prefSum = new Array(nums.length).fill(0);

  for (var i = nums.length - 1; i >= 0; i--) {
    var currNum = nums[i];

    if (i === nums.length - 1) {
      prefSum[i] = currNum;
    } else {
      prefSum[i] = prefSum[i + 1] < currNum ? currNum : prefSum[i + 1];
    }
  } // getting the first max from the back;


  var replaced;
  var currPref;

  for (var _i = 0; _i < nums.length; _i++) {
    if (prefSum[_i] > nums[_i]) {
      replaced = nums[_i];
      nums[_i] = prefSum[_i];
      currPref = prefSum[_i];
      break;
    }
  } // replaced the closest similar pref from the end


  for (var _i2 = nums.length - 1; _i2 >= 0; _i2--) {
    if (nums[_i2] == currPref) {
      nums[_i2] = replaced;
      break;
    }
  }

  return parseInt(nums.join(''));
}; // using prefix sum


console.log(maxSwap('9973'));
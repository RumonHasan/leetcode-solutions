"use strict";

var maxScoreIndices = function maxScoreIndices(nums) {
  var makeArray = function makeArray(len) {
    return new Array(len).fill(0);
  };

  var left = makeArray(nums.length);
  var right = makeArray(nums.length); // filling up right

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      left[i] = (left[i - 1] ? left[i - 1] : nums[i]) + 1;
    } else {
      left[i] = left[i - 1] ? left[i - 1] : 0;
    }
  } // filling up left


  for (var _i = nums.length - 1; _i >= 0; _i--) {
    right[_i] = (_i < nums.length - 1 ? right[_i + 1] : 0) + nums[_i];
  }

  var result = [];
  var maxScore = 0;

  for (var _i2 = 0; _i2 <= nums.length; _i2++) {
    var score = left[_i2] + right[_i2];

    if (score > maxScore) {
      maxScore = score;
      result = [_i2];
    } else if (score === maxScore) {
      result.push(_i2);
    }
  }

  return result;
};

console.log(maxScoreIndices([1, 1]));
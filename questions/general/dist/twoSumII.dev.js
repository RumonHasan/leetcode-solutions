"use strict";

var twoSumII = function twoSumII(numbers, target) {
  var left = 0;
  var right = numbers.length - 1;
  var total = 0;

  while (left < right) {
    total = numbers[left] + numbers[right];

    if (total > target) {
      right--;
      total = numbers[left] + numbers[right];
    }

    if (total < target) {
      left++;
      total = numbers[left] + numbers[right];
    }

    if (total === target) {
      return [left + 1, right + 1];
    }
  }
}; //console.log(twoSumII([2, 7, 11, 15], 13));
//
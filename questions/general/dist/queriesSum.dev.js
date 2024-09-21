"use strict";

var sumEvenAfterQueries = function sumEvenAfterQueries(nums, queries) {
  var sum = nums.filter(function (num) {
    return num % 2 === 0;
  }).reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  var result = new Array(nums.length).fill(0); // main iteration to check

  for (var i = 0; i < queries.length; i++) {
    var index = queries[i][1];
    var value = queries[i][0];
    var localSum = value + nums[index];

    if (localSum % 2 === 0) {
      if (nums[index] % 2 !== 0) {
        sum += localSum;
      } else {
        sum += value;
      }
    } else if (localSum % 2 !== 0) {
      if (nums[index] % 2 === 0) {
        sum -= nums[index];
      }
    } // updating the result and updating the number array


    result[i] = sum;
    nums[index] = localSum;
  }

  return result;
};

console.log(sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]));
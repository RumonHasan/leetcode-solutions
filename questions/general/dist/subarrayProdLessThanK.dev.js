"use strict";

var subArrayProdLessThanK = function subArrayProdLessThanK(nums, k) {
  var finalSubCount = 0;
  var end = 0;
  var start = 0;
  var currProd = 1;

  while (end < nums.length) {
    currProd *= nums[end]; // reducing curr prod by the start control in order bring it back to k

    while (currProd >= k) {
      currProd = currProd / nums[start];
      start++;
    }

    var range = end - start + 1;
    finalSubCount += range; // adding the range length in order to check for the count

    end++;
  }

  return finalSubCount;
}; //console.log(subArrayProdLessThanK([10, 5, 2, 6], 100));
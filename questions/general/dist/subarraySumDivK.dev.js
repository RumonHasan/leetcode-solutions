"use strict";

var subArraySum = function subArraySum(nums, k) {
  var runningSum = 0;
  var map = new Map([[0, 1]]);
  var resultCount = 0;

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    runningSum += currNum;
    var modulus = Math.abs(runningSum % k);

    if (map.has(modulus)) {
      resultCount += map.get(modulus);
      map.set(modulus, map.get(modulus) + 1);
    } else {
      map.set(modulus, 1);
    }

    console.log(map);
  }

  return resultCount;
}; //console.log(subArraySum([-1, 2, 9], 2));


var subArraySum560 = function subArraySum560(nums, k) {
  var count = 0;
  var map = new Map([[0, 1]]);
  var index = 0;
  var prefSum = 0;

  while (index < nums.length) {
    var currNum = nums[index];
    prefSum += currNum; // increasing the count if there is a difference in prefix sum

    if (map.has(prefSum - k)) {
      count += map.get(prefSum - k);
    } // updating the prefix sum


    if (map.has(prefSum)) {
      map.set(prefSum, map.get(prefSum) + 1);
    } else {
      map.set(prefSum, 1);
    }

    index++;
  }

  return count;
}; // console.log(subArraySum560([1, 1, 1, 1], 3));


var binarySubarraySum = function binarySubarraySum(nums, goal) {
  var map = new Map([[0, 1]]);
  var counter = 0;
  var total = 0;

  for (var i = 0; i < nums.length; i++) {
    total += nums[i]; // sum - total check // checking the collection of previous prefix sum

    if (map.has(total - goal)) {
      counter += map.get(total - goal);
    }

    map.set(total, (map.get(total) || 0) + 1);
  }

  return counter;
};

console.log(binarySubarraySum([1, 0, 1, 0, 1], 2));
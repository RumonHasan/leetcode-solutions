"use strict";

var numberOfGoodWaysToSplit = function numberOfGoodWaysToSplit(nums) {
  if (nums.every(function (num) {
    return num === 0;
  })) return 0;
  var oneCounter = 0;
  var firstOneIndex = nums.indexOf(1);
  var lastOneIndex = nums.lastIndexOf(1);

  for (var numIndex in nums) {
    if (nums[numIndex] === 1) {
      oneCounter++;
    }
  }

  if (oneCounter === 1) return 1;
  oneCounter = 0; // getting distance between two 1s

  var newNums = nums.slice(firstOneIndex, lastOneIndex + 1);
  var zeroCounter = 0;
  var total = 1;

  for (var i = 1; i < newNums.length; i++) {
    var currNum = newNums[i];

    if (currNum === 0) {
      zeroCounter++;
    }

    if (currNum === 1) {
      total = total * BigInt(zeroCounter + 1);
      zeroCounter = 0;
    }
  }

  return total;
}; // trick is to check all the spaces between the ones


console.log(numberOfGoodWaysToSplit([0, 1, 0, 0, 1, 0, 0, 0, 1]));
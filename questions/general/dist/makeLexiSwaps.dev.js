"use strict";

var makeLexicographicalSwaps = function makeLexicographicalSwaps(nums, limit) {
  var groups = [];
  var localGroup = [];
  var sortedNums = nums.toSorted(function (a, b) {
    return a - b;
  });
  var groupIndex = 0;
  var map = new Map();
  var result = new Array(nums.length).fill(0);

  for (var i = 0; i < sortedNums.length; i++) {
    var currNum = sortedNums[i];

    if (localGroup.length === 0) {
      localGroup.push(currNum);
      map.set(currNum, groupIndex);
    } else if (Math.abs(localGroup[localGroup.length - 1] - currNum) <= limit) {
      localGroup.push(currNum);
      map.set(currNum, groupIndex);
    } else {
      groups.push(localGroup);
      localGroup = [currNum];
      groupIndex++;
      map.set(currNum, groupIndex);
    }

    if (i === sortedNums.length - 1) {
      groups.push(localGroup);
      localGroup = [];
    }
  }

  var commonLen = sortedNums.length;

  for (var _i = 0; _i < commonLen; _i++) {
    var _currNum = nums[_i];
    var currExtractedValue = groups[map.get(_currNum)].shift();
    result[_i] = currExtractedValue;
  }

  return result;
};

console.log(makeLexicographicalSwaps([1, 7, 6, 18, 2, 1], 3));
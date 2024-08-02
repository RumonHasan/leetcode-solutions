"use strict";

var maxOverlap = function maxOverlap(nums, firstLen, secondLen) {
  var endFirst = firstLen;
  var startFirst = 0;
  var firstTotal = 0;
  var finalMax = 0;

  for (var i = 0; i < firstLen; i++) {
    firstTotal += nums[i];
  }

  var firstMax = firstTotal;

  for (var _i = endFirst; _i < nums.length - firstLen; _i++) {
    firstTotal -= nums[startFirst];
    firstTotal += nums[_i];
    firstMax = Math.max(firstMax, firstTotal);
    startFirst++; // second check for sliding window length

    var secondStart = _i;
    var secondMax = 0;
    var secondTotal = 0;

    for (var j = _i; j < secondStart + secondLen; j++) {
      secondTotal += nums[j];
    }

    console.log(secondTotal, 'second');
    secondMax = secondTotal;
    var secondEnd = _i + secondLen;

    while (secondEnd < nums.length) {
      secondTotal -= nums[secondStart];
      secondTotal += nums[secondEnd];
      secondMax = Math.max(secondMax, secondTotal);
      secondStart++;
      secondEnd++;
    }

    finalMax = Math.max(finalMax, secondMax + firstMax);
  }

  return finalMax;
}; // one approach can be to start with one then slide the other


console.log(maxOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));
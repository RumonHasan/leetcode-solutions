"use strict";

var maxConsequtiveAnswers = function maxConsequtiveAnswers(answerKey, k) {
  var map = new Map();
  var end = 0;
  var start = 0;
  var maxLen = 0;

  while (end < answerKey.length) {
    map.set(answerKey[end], (map.get(answerKey[end]) || 0) + 1);

    while (end - start + 1 - (map.get('T') > map.get('F') ? map.get('T') : map.get('F')) > k) {
      map.set(answerKey[start], map.get(answerKey[start]) - 1);

      if (map.get(answerKey[start]) === 0) {
        map["delete"](answerKey[start]);
      }

      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }

  return maxLen;
}; //console.log(maxConsequtiveAnswers('TTFTTFTT', 1));


var longestAlternatingSubarray = function longestAlternatingSubarray(nums, threshold) {
  var i = 0;
  var j = 0;
  var maxLen = 0;

  while (i < nums.length) {
    var currNum = nums[i];

    if (currNum % 2 === 0 && currNum <= threshold) {
      // start from here
      j = i;
      var isEven = true;

      while (j < nums.length && nums[j] <= threshold && nums[j] % 2 === (isEven ? 0 : 1)) {
        j++;
        isEven = !isEven;
      }

      maxLen = Math.max(maxLen, j - i);
    }

    i++;
  }

  return maxLen;
}; //console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));
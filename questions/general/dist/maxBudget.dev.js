"use strict";

var equalSubstring = function equalSubstring(s, t, maxCost) {
  var slidingWindowBasicApproach = function slidingWindowBasicApproach() {
    var total = 0;
    var start = 0;
    var maxLen = 0;

    for (var i in s) {
      var sVal = s.charCodeAt(i);
      var tVal = t.charCodeAt(i);
      var difference = i < t.length ? Math.abs(tVal - sVal) : sVal;
      total += difference; // when the total exceeds budget

      while (total > maxCost) {
        total -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
        start++;
      }

      maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
  };
}; // using a nlogn solution


var specialArray = function specialArray(nums) {
  var bruteForceApproach = function bruteForceApproach() {
    nums.sort(function (a, b) {
      return a - b;
    });
  };

  var optimizedWay = function optimizedWay() {
    nums.sort(function (a, b) {
      return a - b;
    });
    var index = 0;
    var set = new Set();

    while (index < nums.length) {
      var currNum = nums[index];
      var remainingSlice = nums.length - index;

      if (currNum === remainingSlice && !set.has(currNum)) {
        return currNum;
      }

      set.add(currNum); // if its bigger then check back

      var prevNum = currNum - 1;

      while (prevNum >= remainingSlice && prevNum >= (nums[index - 1] ? nums[index - 1] : 0)) {
        if (prevNum === remainingSlice && !set.has(prevNum)) {
          return prevNum;
        }

        set.add(prevNum);
        prevNum -= 1;
      }

      index++;
    }

    return -1;
  };
}; //console.log(specialArray([2, 3, 0, 2]));
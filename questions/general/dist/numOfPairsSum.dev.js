"use strict";

var numOfPairs = function numOfPairs(nums, target) {
  var counter = 0;

  for (var i = 0; i < nums.length; i++) {
    var checkStr = nums[i];

    for (var j = 0; j < nums.length; j++) {
      if (i !== j) {
        var sub = nums[j];

        if (checkStr + sub === target) {
          counter++;
        }
      }
    }
  }

  return counter;
}; // checking how many pairs equal to target; need to find the suffix in order to check
//console.log(numOfPairs(['74', '1', '67', '1', '74'], '174'));
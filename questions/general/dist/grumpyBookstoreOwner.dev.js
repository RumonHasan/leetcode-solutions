"use strict";

var grumpyBookStoreOwner = function grumpyBookStoreOwner(customers, grumpy, minutes) {
  var totalSatisfaction = 0;

  for (var i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      totalSatisfaction += customers[i];
    }
  } // sliding window using minutes


  var currSatisfaction = 0;
  var currMaxSatisfaction = 0;

  for (var _i = 0; _i < minutes; _i++) {
    if (grumpy[_i] === 1) {
      currSatisfaction += customers[_i];
    }
  }

  currMaxSatisfaction = currSatisfaction;
  var end = minutes;
  var start = 0;

  while (end < customers.length) {
    if (grumpy[start] === 1) {
      currSatisfaction -= customers[start];
    }

    if (grumpy[end] === 1) {
      currSatisfaction += customers[end];
    }

    currMaxSatisfaction = Math.max(currMaxSatisfaction, currSatisfaction);
    start++;
    end++;
  }

  return totalSatisfaction + currMaxSatisfaction;
}; // sliding window approach
// console.log(
//   grumpyBookStoreOwner([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
// );

/*
    [1, 0, 1, 2, 1, 1, 7, 5], 
    [0, 1, 0, 1, 0, 1, 0, 1]
*/
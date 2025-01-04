"use strict";

var maxTotalSum = function maxTotalSum(maximumHeight) {
  maximumHeight.sort(function (a, b) {
    return b - a;
  });
  var result = [];
  var limitChecker = maximumHeight[0];
  result.push(limitChecker);

  for (var i = 1; i < maximumHeight.length; i++) {
    var maxHeight = maximumHeight[i]; // add number to result

    limitChecker = Math.min(maxHeight, limitChecker - 1);
    result.push(limitChecker);

    if (limitChecker < 1) {
      return -1;
    }
  }

  return result.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};
/**[
    4,
    3,
    3,
    2
] 
        
*/


console.log(maxTotalSum([15, 10, 10, 10, 5]));
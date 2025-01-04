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
// console.log(maxTotalSum([15, 10, 10, 10, 5]));


var divideStringsIntoK = function divideStringsIntoK(s, k, fill) {
  var remainder = s.length % k;
  var fillCount = k - remainder;
  var result = [];
  var group = '';
  var count = 0;

  for (var i = 0; i < s.length; i++) {
    var _char = s[i];

    if (count === k) {
      result.push(group);
      group = '';
      count = 0;
    }

    group += _char;
    count++;

    if (i === s.length - 1) {
      result.push(group);
    }
  }

  if (fillCount > 0 && remainder !== 0) {
    result[result.length - 1] += fill.repeat(fillCount);
  }

  return result;
};

console.log(divideStringsIntoK('abcdefghi', 3, 'x'));
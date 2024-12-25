"use strict";

var findLUSLength = function findLUSLength(a, b) {
  var dp = new Array(a.length + 1).fill().map(function () {
    return new Array(b.length + 1).fill(0);
  });

  for (var i = a.length - 1; i >= 0; i--) {
    for (var j = b.length - 1; j >= 0; j--) {
      if (a[i] === b[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }

  var val = dp[0][0];

  if (val < a.length || val < b.length) {
    return Math.max(a.length, b.length);
  } else {
    return -1;
  }
}; //console.log(findLUSLength('a', 'aaa'));
"use strict";

var findLUSLength = function findLUSLength(strs) {
  // checks normal string against the target
  var checkUncommonSub = function checkUncommonSub(str, target) {
    var dp = [];

    for (var i = 0; i < str.length + 1; i++) {
      dp.push(new Array(target.length + 1).fill(0));
    }

    for (var _i = dp.length - 2; _i >= 0; _i--) {
      for (var j = dp[_i].length - 2; j >= 0; j--) {
        if (str[_i] === target[j]) {
          dp[_i][j] = dp[_i + 1][j + 1] + 1;
        } else {
          dp[_i][j] = dp[_i][j + 1];
        }
      }
    }

    return dp[0].some(function (val) {
      return val === str.length;
    }); // checking whether the first part of dp is found or not same as str target length
  };

  var LEN = strs.length;
  var maxLen = 0;

  for (var i = 0; i < LEN; i++) {
    var str = strs[i];
    if (i > 0 && strs[i - 1] === strs[i]) continue;
    if (i < LEN - 1 && strs[i + 1] === strs[i]) continue;
    var isSubCheck = false;

    for (var j = 0; j < LEN; j++) {
      var targetString = strs[j];

      if (i !== j && checkUncommonSub(str, targetString)) {
        isSubCheck = true; // stops iteration is the string has one set of validity

        break;
      }
    }

    if (!isSubCheck) {
      maxLen = Math.max(str.length, maxLen);
    }
  }

  return maxLen === 0 ? -1 : maxLen;
};

console.log(findLUSLength(['aaa', 'aaa', 'aa']));
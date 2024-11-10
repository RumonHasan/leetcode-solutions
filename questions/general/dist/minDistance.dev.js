"use strict";

var minDistance = function minDistance(word1, word2) {
  var dp = [];

  for (var i = 0; i < word1.length + 1; i++) {
    dp.push(new Array(word2.length + 1).fill(0));
  }

  var longestCommonLen = 0; // getting the longest common sub using double multi dimensional approach

  for (var _i = dp.length - 2; _i >= 0; _i--) {
    for (var j = dp[_i].length - 2; j >= 0; j--) {
      if (word1[_i] == word2[j]) {
        dp[_i][j] = dp[_i + 1][j + 1] + 1;
        longestCommonLen = Math.max(longestCommonLen, dp[_i][j]);
      } else {
        dp[_i][j] = Math.max(dp[_i + 1][j], dp[_i][j + 1]); // here alternating is important cuz if they are not matching we are skipping either one of the chars
      }
    }
  }

  return word1.length - longestCommonLen + word2.length - longestCommonLen;
}; //console.log(minDistance('park', 'spake'));


var editDistance = function editDistance(word1, word2) {
  var dp = [];

  for (var i = 0; i < word1.length + 1; i++) {
    dp.push(new Array(word2.length + 1).fill(0));
  }

  var subLength = 0;

  for (var _i2 = dp.length - 2; _i2 >= 0; _i2--) {
    for (var j = dp[_i2].length - 2; j >= 0; j--) {
      dp[_i2][j] = word1[_i2] == word2[j] ? dp[_i2 + 1][j + 1] : Math.min(dp[_i2 + 1][j], dp[_i2][j + 1], dp[_i2 + 1][j + 1]);
      subLength = Math.max(subLength, dp[_i2][j]);
    }
  }

  console.log(dp, subLength);
  return word1.length - subLength;
};

console.log(editDistance('intention', 'execution'));
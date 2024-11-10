const minDistance = (word1, word2) => {
  let dp = [];
  for (let i = 0; i < word1.length + 1; i++) {
    dp.push(new Array(word2.length + 1).fill(0));
  }
  let longestCommonLen = 0;
  // getting the longest common sub using double multi dimensional approach
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = dp[i].length - 2; j >= 0; j--) {
      if (word1[i] == word2[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
        longestCommonLen = Math.max(longestCommonLen, dp[i][j]);
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
        // here alternating is important cuz if they are not matching we are skipping either one of the chars
      }
    }
  }
  return word1.length - longestCommonLen + word2.length - longestCommonLen;
};

//console.log(minDistance('park', 'spake'));

const editDistance = (word1, word2) => {
  let dp = [];
  for (let i = 0; i < word1.length + 1; i++) {
    dp.push(new Array(word2.length + 1).fill(0));
  }
  let subLength = 0;
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = dp[i].length - 2; j >= 0; j--) {
      dp[i][j] =
        word1[i] == word2[j]
          ? dp[i + 1][j + 1]
          : Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
      subLength = Math.max(subLength, dp[i][j]);
    }
  }
  console.log(dp, subLength);
  return word1.length - subLength;
};

console.log(editDistance('intention', 'execution'));

"use strict";

var maxSubsequenceCount = function maxSubsequenceCount(text, pattern) {
  var n = text.length; // Prefix sum for pattern[1]

  var suffixSum = new Array(n + 1).fill(0);

  for (var i = n - 1; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + (text[i] === pattern[1] ? 1 : 0);
  }

  var count0 = 0;
  var totalCount = 0; // Calculate current number of subsequences and count of pattern[0]

  for (var _i = 0; _i < n; _i++) {
    if (text[_i] === pattern[0]) {
      totalCount += suffixSum[_i + 1];
      count0++;
    }
  }

  console.log(suffixSum); // Case 1: Add pattern[0] at the beginning

  var countWithFirstChar = totalCount + suffixSum[0]; // Case 2: Add pattern[1] at the end

  var countWithSecondChar = totalCount + count0;
  return Math.max(countWithFirstChar, countWithSecondChar);
};

console.log(maxSubsequenceCount('abdcdbc', 'ac'));
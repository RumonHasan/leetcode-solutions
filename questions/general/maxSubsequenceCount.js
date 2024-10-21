const maxSubsequenceCount = (text, pattern) => {
  const n = text.length;

  // Prefix sum for pattern[1]
  let suffixSum = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + (text[i] === pattern[1] ? 1 : 0);
  }

  let count0 = 0;
  let totalCount = 0;

  // Calculate current number of subsequences and count of pattern[0]
  for (let i = 0; i < n; i++) {
    if (text[i] === pattern[0]) {
      totalCount += suffixSum[i + 1];
      count0++;
    }
  }
  console.log(suffixSum);

  // Case 1: Add pattern[0] at the beginning
  let countWithFirstChar = totalCount + suffixSum[0];

  // Case 2: Add pattern[1] at the end
  let countWithSecondChar = totalCount + count0;

  return Math.max(countWithFirstChar, countWithSecondChar);
};
console.log(maxSubsequenceCount('abdcdbc', 'ac'));

const shortestCommonSuperSequence = (str1, str2) => {
  // get the lcs using 2D dimensional dp approach
  let lcsString = '';
  let dp = new Array(str1.length + 1)
    .fill()
    .map((_) => new Array(str2.length + 1).fill(0));
  console.log(dp);
  // using dp table to calculate the largest len of the subsequence first
  for (let i = str1.length - 1; i >= 0; i--) {
    for (let j = str2.length - 1; j >= 0; j--) {
      const str1Char = str1[i];
      const str2Char = str2[j];

      if (str1Char === str2Char) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  // forming the lcs using backtracking method

  let strOneIndex = 0;
  let strTwoIndex = 0;
  // using the dp table in relation to extract the lcs string from the strings
  while (strOneIndex < str1.length && strTwoIndex < str2.length) {
    if (str1[strOneIndex] === str2[strTwoIndex]) {
      lcsString += str1[strOneIndex];
      strOneIndex++;
      strTwoIndex++;
    } else {
      // moving in the direction of larger value in relation to the string indices
      if (
        dp[strOneIndex + 1][strTwoIndex] >= dp[strOneIndex][strTwoIndex + 1]
      ) {
        // iteration has to correspond to the established dp table setup
        strOneIndex++;
      } else {
        strTwoIndex++;
      }
    }
  }

  // main algorithm to form initial superSeqeunce
  let initialSuperSequence = '';
  // checking for lcs length completion and placing the remaining chars according to arrangement of the supersequence keeping in track of minimum val
  let lcsIndex = 0; // for lcs completion
  strOneIndex = 0;
  strTwoIndex = 0;
  while (strOneIndex < str1.length) {
    // using str1 as the main str to analyze to avoid complexity in iteration
    // the lcsIndex will only increase if both the strIndices are equal
    if (str1[strOneIndex] !== lcsString[lcsIndex]) {
      initialSuperSequence += str1[strOneIndex];
      strOneIndex++;
      // until it hits a lcs string we increment strOneIndex then if it hits when add strTwo checks and see what is happening
    } else if (str1[strOneIndex] === lcsString[lcsIndex]) {
      if (str2[strTwoIndex] === lcsString[lcsIndex]) {
        initialSuperSequence += lcsString[lcsIndex];
        strOneIndex++;
        strTwoIndex++;
        lcsIndex++;
      } else if (str2[strTwoIndex] !== lcsString[lcsIndex]) {
        initialSuperSequence += str2[strTwoIndex];
        strTwoIndex++;
      }
    }
  }
  // adding the remaining additional letters from str2 if any
  if (str2.length > strTwoIndex) {
    // checking if the length is bigger than sliceindex is used to calculate the remaining chars
    const remainingSliceLength = str2.length - strTwoIndex;
    const remainingSlice = str2.slice(-remainingSliceLength); // just gets the last to chars from the indices
    initialSuperSequence += remainingSlice;
  }

  return initialSuperSequence; // final super sequence out of one of the combinations
};

console.log(shortestCommonSuperSequence('aggtabst', 'gxtxaybop'));

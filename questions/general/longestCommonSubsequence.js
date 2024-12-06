const LCS = (text1, text2) => {
  let matrix = [];
  for (let i = 0; i < text1.length + 1; i++) {
    matrix.push(new Array(text2.length + 1).fill(0));
  }
  // using 2d matrix to find the longest common chars
  let longestLen = 0;
  // traversing from the bottom up
  for (let i = matrix.length - 2; i >= 0; i--) {
    for (let j = matrix[i].length - 2; j >= 0; j--) {
      const textTwoChar = text2[j];
      const textOneChar = text1[i];
      if (textOneChar == textTwoChar) {
        matrix[i][j] = matrix[i + 1][j + 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i + 1][j], matrix[i][j + 1]); // this is important to skip a character for both
      }
      longestLen = Math.max(matrix[i][j], longestLen);
    }
  }

  return longestLen;
};

// using two dimensional matrices
console.log(LCS('abcde', 'ace'));

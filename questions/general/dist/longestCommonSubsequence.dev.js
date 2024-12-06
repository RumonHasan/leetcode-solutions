"use strict";

var LCS = function LCS(text1, text2) {
  var matrix = [];

  for (var i = 0; i < text1.length + 1; i++) {
    matrix.push(new Array(text2.length + 1).fill(0));
  } // using 2d matrix to find the longest common chars


  var longestLen = 0; // traversing from the bottom up

  for (var _i = matrix.length - 2; _i >= 0; _i--) {
    for (var j = matrix[_i].length - 2; j >= 0; j--) {
      var textTwoChar = text2[j];
      var textOneChar = text1[_i];

      if (textOneChar == textTwoChar) {
        matrix[_i][j] = matrix[_i + 1][j + 1] + 1;
      } else {
        matrix[_i][j] = Math.max(matrix[_i + 1][j], matrix[_i][j + 1]); // this is important to skip a character for both
      }

      longestLen = Math.max(matrix[_i][j], longestLen);
    }
  }

  return longestLen;
}; // using two dimensional matrices


console.log(LCS('abcde', 'ace'));
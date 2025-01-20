"use strict";

var getWinner = function getWinner(arr, k) {
  var consequtive_wins = 0;

  while (consequtive_wins < k) {
    if (arr[0] > arr[1]) {
      arr.push(arr[1]);
      arr.splice(1, 1);
      consequtive_wins++;
    } else {
      consequtive_wins = 1;
      var winner = arr[1]; // storing winner then splicing it as it has to be moved

      arr.splice(1, 1);
      arr.push(arr[0]);
      arr[0] = winner;
    }

    if (consequtive_wins === k) {
      break;
    }
  }

  return arr[0];
}; // logic is to find the first number that wins k consequtive rounds


console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2)); // getting the longest common sub

var longestCommonSub = function longestCommonSub(text1, text2) {
  var mat = Array(text1.length + 1).fill().map(function () {
    return Array(text2.length + 1).fill(0);
  }); // reverse traversal of 2d matrix to calculate the final sum

  for (var i = mat.length - 2; i >= 0; i--) {
    for (var j = mat[i].length - 2; j >= 0; j--) {
      var textTwoChar = text2[j];
      var textOneChar = text1[i];

      if (textOneChar === textTwoChar) {
        mat[i][j] = mat[i + 1][j + 1] + 1; // checks the next diagonal as its a clear match
      } else {
        mat[i][j] = Math.max(mat[i + 1][j], mat[i][j + 1]); // checks the largest betwween either skippinga  char from text1 or text2
      }
    }
  }

  console.log(mat);
  return mat[0][0];
}; // using multidimensional array approach


console.log(longestCommonSub('abcba', 'abcbcba'));
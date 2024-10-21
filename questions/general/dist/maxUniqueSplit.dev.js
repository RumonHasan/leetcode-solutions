"use strict";

var maxUniqueSplit = function maxUniqueSplit(s) {
  var subSet = new Set();
  var sIndex = 0; // main dp algorithm

  var dp = function dp(index, set) {
    if (index === s.length) {
      // edge case
      return 0;
    }

    var result = 0;

    for (var j = index; j < s.length; j++) {
      var substring = s.slice(index, j + 1);

      if (!set.has(substring)) {
        set.add(substring);
        result = Math.max(result, 1 + dp(j + 1, set)); // here js is added because we want the second call to be starting from the ending character

        set["delete"](substring);
      }
    }

    return result;
  };

  return dp(sIndex, subSet);
}; // using backtracking and set to check whether the previous substring has been accounted for or not
//console.log(maxUniqueSplit('ababccc'));
// word search using backtracking


var wordSearch = function wordSearch(board, word) {
  var ROWS = board.length;
  var COLS = board[0].length;
  var pathSet = new Set(); // dfs to check every possible path

  var dfs = function dfs(row, col, index) {
    if (index === word.length) return true; // running to the end
    // possible edge cases for when the condition will return false

    if (row < 0 || col < 0 || row >= ROWS || col >= COLS || pathSet.has("".concat(row, "-").concat(col)) || board[row][col] !== word[index]) {
      return false;
    } // main recursive call


    pathSet.add("".concat(row, "-").concat(col)); // adding current path for keeping track of the path

    var result = dfs(row - 1, col, index + 1) || dfs(row + 1, col, index + 1) || dfs(row, col + 1, index + 1) || dfs(row, col - 1, index + 1);
    pathSet["delete"]("".concat(row, "-").concat(col)); // deleting existing for backtracking

    return result;
  }; // iterating from every letter


  for (var i = 0; i < ROWS; i++) {
    for (var j = 0; j < COLS; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

console.log(wordSearch([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'));
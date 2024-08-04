"use strict";

// using dfs to complete word search
var wordSearch = function wordSearch(board, word) {
  var ROW = board.length;
  var COL = board[0].length;
  var pathSet = new Set(); // main dfs function

  var wordSearchDfs = function wordSearchDfs(row, col, index) {
    if (index === word.length) return true; // false condition

    if (row < 0 || col < 0 || row >= ROW || col >= COL || board[row][col] !== word[index] || pathSet.has("".concat(row, "-").concat(col))) {
      return false;
    } // adding the current path


    pathSet.add("".concat(row, "-").concat(col)); // main dfs iteration

    var res = wordSearchDfs(row - 1, col, index + 1) || wordSearchDfs(row + 1, col, index + 1) || wordSearchDfs(row, col + 1, index + 1) || wordSearchDfs(row, col - 1, index + 1); // removing the current path from the set

    pathSet["delete"]("".concat(row, "-").concat(col));
    return res;
  }; // main iteration for passing the row and column and index of the current position of word


  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (wordSearchDfs(i, j, 0)) return true;
    }
  }

  return false;
}; // using dfs to check from every index and drill down till the word is found if not return false


console.log(wordSearch([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'));
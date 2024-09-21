"use strict";

var countBattleships = function countBattleships(board) {
  var ROWS = board.length;
  var COLS = board[0].length;
  var counter = 0; // search dfs function

  var set = new Set();

  var searchDfs = function searchDfs(row, col) {
    // edge cases for checking the boundaries
    if (row >= ROWS || col >= COLS || row < 0 || col < 0 || set.has("".concat(row, "-").concat(col)) || board[row][col] === '.' // to prevent general boundary check
    ) {
        return;
      }

    set.add("".concat(row, "-").concat(col)); // adds existing paths

    searchDfs(row + 1, col);
    searchDfs(row - 1, col);
    searchDfs(row, col + 1);
    searchDfs(row, col - 1);
  }; // main iteration


  for (var i = 0; i < ROWS; i++) {
    for (var j = 0; j < COLS; j++) {
      // only enters the dfs if it does not have existing path
      if (board[i][j] === 'X' && !set.has("".concat(i, "-").concat(j))) {
        counter++;
        searchDfs(i, j);
      }
    }
  }

  return counter;
}; // battleships can only be counted from vertical or horizontal rows or columns to be counted


console.log(countBattleships([['X', '.', '.', 'X'], ['.', '.', '.', 'X'], ['.', '.', '.', 'X']]));
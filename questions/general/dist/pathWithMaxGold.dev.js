"use strict";

var pathWithMaxGold = function pathWithMaxGold(grid) {
  var ROWS = grid.length;
  var COLS = grid[0].length;
  var maxGold = 0; // dfs path search to check every path and backtrack

  var pathSearch = function pathSearch(row, col) {
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS || grid[row][col] === 0) return 0; // if there is no path then return 0
    // store the current path

    var currGoldAmount = grid[row][col];
    grid[row][col] = 0; // recursive checks

    var left = pathSearch(row, col - 1);
    var right = pathSearch(row, col + 1);
    var top = pathSearch(row - 1, col);
    var bottom = pathSearch(row + 1, col);
    grid[row][col] = currGoldAmount; // setting back the original amount for backtracking from other calls

    return currGoldAmount + Math.max(right, top, left, bottom);
  };

  for (var i = 0; i < ROWS; i++) {
    for (var j = 0; j < COLS; j++) {
      if (grid[i][j] !== 0) {
        maxGold = Math.max(maxGold, pathSearch(i, j));
      }
    }
  }

  return maxGold;
}; // calculating the path with maximum amount of gold.. using dfs to check down every


console.log(pathWithMaxGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]));
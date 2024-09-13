"use strict";

var numberOfClosedIslands = function numberOfClosedIslands(grid) {
  var ROW = grid.length;
  var COL = grid[0].length;
  var closedIslandCount = 0; // main dfs function to check through all the possible islands

  var islandSearch = function islandSearch(row, col) {
    if (row < 0 || col < 0 || row >= ROW || col >= COL || grid[row][col] === 1) {
      return;
    }

    grid[row][col] = 1;
    islandSearch(row + 1, col);
    islandSearch(row - 1, col);
    islandSearch(row, col + 1);
    islandSearch(row, col - 1);
  }; // Mark boundary-connected islands


  for (var i = 0; i < ROW; i++) {
    if (grid[i][0] === 0) islandSearch(i, 0);
    if (grid[i][COL - 1] === 0) islandSearch(i, COL - 1);
  }

  for (var j = 0; j < COL; j++) {
    if (grid[0][j] === 0) islandSearch(0, j);
    if (grid[ROW - 1][j] === 0) islandSearch(ROW - 1, j);
  }

  for (var _i = 1; _i < ROW - 1; _i++) {
    for (var _j = 1; _j < COL - 1; _j++) {
      if (grid[_i][_j] === 0) {
        islandSearch(_i, _j);
        closedIslandCount++;
      }
    }
  }

  return closedIslandCount;
}; // number of closed islands surrounded by 1s.. remmber here the land is 0


console.log(numberOfClosedIslands([[0, 0, 1, 1, 0, 1, 0, 0, 1, 0], [1, 1, 0, 1, 1, 0, 1, 1, 1, 0], [1, 0, 1, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 1, 0, 1, 0, 1], [1, 1, 1, 0, 1, 1, 0, 1, 1, 0]]));
"use strict";

var countServers = function countServers(grid) {
  var ROW = grid.length;
  var COL = grid[0].length;
  var serverCount = 0;

  var serverDfs = function serverDfs(row, col) {
    if (row >= ROW || col >= COL || row < 0 || col < 0 || grid[row][col] === 0) {
      return 0;
    }

    grid[row][col] = 0;
    return 1 + (serverDfs(row, col + 1) + serverDfs(row, col - 1) + serverDfs(row + 1, col) + serverDfs(row - 1, col));
  };

  for (var i = 0; i < ROW; i++) {
    for (var j = 0; j < COL; j++) {
      if (grid[i][j] === 1) {
        var currServerChain = serverDfs(i, j);
        serverCount += currServerChain > 1 ? currServerChain : 0;
      }
    }
  }

  return serverCount;
}; // just look for connecting server parts and add the total count if its more than one


console.log(countServers([[1, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0]]));
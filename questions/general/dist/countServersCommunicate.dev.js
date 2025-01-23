"use strict";

var countServerCommunication = function countServerCommunication(grid) {
  // will contain the row and col checks for server count
  var rowPrefSum = new Array(grid.length).fill(0);
  var colPrefSum = new Array(grid[0].length).fill(0);
  var serverCount = 0; // populating the row and col prefix sums

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      var currRack = grid[i][j];

      if (currRack === 1) {
        // note: this count for the total servers to be accumulated based on the current row indices hence its incremented
        rowPrefSum[i]++;
        colPrefSum[j]++;
      }
    }
  } // getting the server count by taking reference from both row and col count


  for (var _i = 0; _i < grid.length; _i++) {
    for (var _j = 0; _j < grid[_i].length; _j++) {
      var _currRack = grid[_i][_j];

      if (_currRack === 1) {
        // if one of them is above 1 that means the col is also connected and there are two instances of connected servers
        if (rowPrefSum[_i] > 1 || colPrefSum[_j] > 1) {
          serverCount++;
        }
      }
    }
  }

  return serverCount;
};

console.log(countServerCommunication([[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]));
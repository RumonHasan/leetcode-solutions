"use strict";

var rotatingBox = function rotatingBox(boxGrid) {
  var block = '*';
  var stone = '#';
  var ROWS = boxGrid.length;
  var COLS = boxGrid[0].length; // first changing the box grid and dropping the stones

  for (var row = 0; row < ROWS; row++) {
    var i = COLS - 1; // changes to the latest empty space if there is a stone

    for (var col = COLS - 1; col >= 0; col--) {
      var currEl = boxGrid[row][col];

      if (currEl === stone) {
        var tempPosEl = boxGrid[row][i];
        boxGrid[row][i] = stone;
        boxGrid[row][col] = tempPosEl;
        i -= 1; // only decrement because it needs to be updated to the new position
      }

      if (currEl === block) {
        i = col - 1; // keep it one before the block.. since the block is the end
      }
    }
  } // reorganizing the boxMatrix to flip rightward to 90 degrees cols witll become rows


  var newGrid = [];

  for (var _col = 0; _col < COLS; _col++) {
    var newRow = [];

    for (var _row = 0; _row < ROWS; _row++) {
      newRow.push(boxGrid[_row][_col]);
    }

    newGrid.push(newRow.reverse());
  }

  return newGrid;
};

console.log(rotatingBox([['#', '#', '*', '.', '*', '.'], ['#', '#', '#', '*', '.', '.'], ['#', '#', '#', '.', '#', '.']]));
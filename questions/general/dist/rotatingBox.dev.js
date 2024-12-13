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
}; // console.log(
//   rotatingBox([
//     ['#', '#', '*', '.', '*', '.'],
//     ['#', '#', '#', '*', '.', '.'],
//     ['#', '#', '#', '.', '#', '.'],
//   ])
// );


var setMatrix = function setMatrix(matrix) {
  var setCol = new Set();
  var setRows = new Set();

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        setCol.add(j);
        setRows.add(i);
      }
    }
  } // change rows


  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = setRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var row = _step.value;

      for (var _i = 0; _i < matrix[0].length; _i++) {
        matrix[row][_i] = 0;
      }
    } // change cols

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = setCol[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var col = _step2.value;

      for (var _i2 = 0; _i2 < matrix.length; _i2++) {
        matrix[_i2][col] = 0;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return matrix;
};

console.log(setMatrix([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
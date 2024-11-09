"use strict";

var numOfRookCaptures = function numOfRookCaptures(board) {
  var counter = 0;

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        var row = i;
        var col = j; // checking row

        for (var rowIndex = col + 1; rowIndex < board[0].length; rowIndex++) {
          var val = board[row][rowIndex];
          console.log(val, 'val');

          if (val !== '.' && val == 'p') {
            counter++;
            break;
          }

          if (val !== '.') {
            break;
          }
        }

        for (var _rowIndex = col - 1; _rowIndex >= 0; _rowIndex--) {
          var _val = board[row][_rowIndex];

          if (_val !== '.' && _val == 'p') {
            counter++;
            break;
          }

          if (_val !== '.') {
            break;
          }
        } // for col check


        for (var _rowIndex2 = row + 1; _rowIndex2 < board.length; _rowIndex2++) {
          var _val2 = board[_rowIndex2][col];

          if (_val2 !== '.' && _val2 == 'p') {
            counter++;
            break;
          }

          if (_val2 !== '.') {
            break;
          }
        }

        for (var _rowIndex3 = row - 1; _rowIndex3 >= 0; _rowIndex3--) {
          var _val3 = board[_rowIndex3][col];

          if (_val3 !== '.' && _val3 == 'p') {
            counter++;
            break;
          }

          if (_val3 !== '.') {
            break;
          }
        }
      }
    }
  }

  return counter;
};

console.log(numOfRookCaptures([['.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', 'p', '.', '.', '.', '.'], ['.', '.', '.', 'p', '.', '.', '.', '.'], ['p', 'p', '.', 'R', '.', 'p', 'B', '.'], ['.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', 'B', '.', '.', '.', '.'], ['.', '.', '.', 'p', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '.']]));
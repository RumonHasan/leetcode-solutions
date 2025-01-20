"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var firstCompleteIndex = function firstCompleteIndex(arr, mat) {
  // default indices counter arrays for both rows and cols
  var rowsIndexArray = new Array(mat.length).fill(0);
  var colsIndexArray = new Array(mat[0].length).fill(0);
  var ROW_LEN = mat[0].length; // number of cells needed to complete a row

  var COL_LEN = mat.length;
  var map = new Map(); // create table that contains indices of every number

  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[i].length; j++) {
      var row = i;
      var col = j;
      var currNum = mat[row][col];
      map.set(currNum, [row, col]);
    }
  } // checking counter for each indices


  for (var _i = 0; _i < arr.length; _i++) {
    var _currNum = arr[_i];

    if (map.has(_currNum)) {
      var _map$get = map.get(_currNum),
          _map$get2 = _slicedToArray(_map$get, 2),
          _row = _map$get2[0],
          _col = _map$get2[1];

      rowsIndexArray[_row]++;
      colsIndexArray[_col]++;
      var rowVal = rowsIndexArray[_row];
      var colVal = colsIndexArray[_col];

      if (rowVal === ROW_LEN || colVal === COL_LEN) {
        return _i;
      }
    }
  }
}; // step -1 getting the table that contains all the cords of each number
// step 2- getting the row index array and col index array to store the counters


console.log(firstCompleteIndex([1, 4, 5, 2, 6, 3], [[4, 3, 5], [1, 2, 6]]));
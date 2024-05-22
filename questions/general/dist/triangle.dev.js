"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var triangle = function triangle(_triangle) {
  // tabulation approach
  var newTri = [];

  for (var i in _triangle) {
    var currRow = _triangle[i];
    newTri.push(new Array(currRow.length).fill(0));
  }

  newTri[0][0] = _triangle[0][0]; // main logic using top down approach

  for (var _i = 1; _i < newTri.length; _i++) {
    var _currRow = newTri[_i];
    var rowIndex = _i;

    for (var j = 0; j < _currRow.length; j++) {
      var colIndex = j;

      if (rowIndex === 1) {
        newTri[_i][j] = _triangle[0][0] + _triangle[_i][j];
      } else if (rowIndex > 1) {
        if (colIndex === 0) {
          newTri[_i][j] = newTri[_i - 1][0] + _triangle[_i][j];
        } else if (colIndex === _currRow.length - 1) {
          newTri[_i][j] = newTri[_i - 1][newTri[_i - 1].length - 1] + _triangle[_i][j];
        } else {
          // middle indices by checking max or min
          var midVal = Math.min(_triangle[_i][j] + newTri[_i - 1][j - 1], _triangle[_i][j] + newTri[_i - 1][j]);
          newTri[_i][j] = midVal;
        }
      }
    }
  }

  return Math.min.apply(Math, _toConsumableArray(newTri[newTri.length - 1]));
}; // using the top to bottom approach and keeping in mind the middle indices


console.log(triangle([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
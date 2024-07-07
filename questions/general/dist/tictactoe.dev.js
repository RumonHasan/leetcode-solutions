"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var tictactoe = function tictactoe(moves) {
  // since board is fixed its easier just checking all the indices directly
  var board = new Array(3).fill().map(function (_) {
    return new Array(3).fill('');
  }); // Populate board

  var player = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = moves[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          row = _step$value[0],
          col = _step$value[1];

      board[row][col] = player ? 'B' : 'A';
      player = !player;
    } // Check for win

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

  for (var i = 0; i < 3; i++) {
    // Check rows and columns
    if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) return board[i][0];
    if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) return board[0][i];
  } // Check diagonals


  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) return board[0][0];
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) return board[0][2]; // Check for draw or pending

  return moves.length === 9 ? 'Draw' : 'Pending';
}; // console.log(
//   tictactoe([
//     [0, 0],
//     [1, 1],
//     [0, 1],
//     [0, 2],
//     [1, 0],
//     [2, 0],
//   ])
// );
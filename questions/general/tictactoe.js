const tictactoe = (moves) => {
  // since board is fixed its easier just checking all the indices directly
  let board = new Array(3).fill().map((_) => new Array(3).fill(''));
  // Populate board
  let player = false;
  for (let [row, col] of moves) {
    board[row][col] = player ? 'B' : 'A';
    player = !player;
  }
  // Check for win
  for (let i = 0; i < 3; i++) {
    // Check rows and columns
    if (
      board[i][0] &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    )
      return board[i][0];
    if (
      board[0][i] &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    )
      return board[0][i];
  }
  // Check diagonals
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2])
    return board[0][0];
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0])
    return board[0][2];

  // Check for draw or pending
  return moves.length === 9 ? 'Draw' : 'Pending';
};

// console.log(
//   tictactoe([
//     [0, 0],
//     [1, 1],
//     [0, 1],
//     [0, 2],
//     [1, 0],
//     [2, 0],
//   ])
// );

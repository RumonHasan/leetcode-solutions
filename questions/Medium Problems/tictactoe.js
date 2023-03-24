const ticTacToe = (moves) => {
  console.log(moves);
  // create the board and placing the marks
  let playerChange = false;
  let board = new Array(3).fill('').map((row, index) => new Array(3).fill(''));
  for (let index = 0; index < moves.length; index++) {
    let rowIndex = moves[index][0];
    let colIndex = moves[index][1];
    if (!playerChange) {
      board[rowIndex][colIndex] = 'X';
    } else if (playerChange) {
      board[rowIndex][colIndex] = 'O';
    }
    playerChange = !playerChange;
  }
  //check winner;
  let winner = '';
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 'X' || board[row][col] === 'O') {
        let colCheck = board.map((row) => row[col]);
        let rowCheck = board[row];
        let diagonalCheck = null;
        if (
          (row === 0 && col === 0) ||
          (row === 0 && col === 2) ||
          (row === 2 && col === 0) ||
          (row === 2 && col === 2)
        ) {
          if ((row === 2 && col === 2) || (row === 0 && col === 0)) {
            diagonalCheck = [board[0][0], board[1][1], board[2][2]];
          } else {
            diagonalCheck = [board[0][2], board[1][1], board[2][0]];
          }
        }
        // checking winner
        let currentTurn = board[row][col];
        let colState = colCheck.every((val) => val === currentTurn);
        let rowState = rowCheck.every((val) => val === currentTurn);
        let diagonalState =
          diagonalCheck !== null &&
          diagonalCheck.every((val) => val === currentTurn);
        if (colState || rowState || diagonalState) {
          winner = currentTurn;
          break;
        }
      }
    }
  }

  // check for draw
  if (winner === '' && board.every((row) => row.every((val) => val !== ''))) {
    return 'Draw';
  }
  if (winner === '') {
    return 'Pending';
  } else if (winner !== '') {
    if (winner === 'X') {
      return 'A';
    } else {
      return 'B';
    }
  }
};

// console.log(
//   ticTacToe([
//     [0, 0],
//     [2, 0],
//     [1, 1],
//     [2, 1],
//     [2, 2],
//   ])
// );

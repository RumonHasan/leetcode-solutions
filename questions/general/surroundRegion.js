const surroundRegion = (board) => {
  const ROWS = board.length;
  const COLS = board[0].length;
  const zero = 'O';
  const x = 'X';

  // running dfs for the boarder connected nodes
  const dfs = (row, col, board) => {
    if (
      row >= ROWS ||
      col >= COLS ||
      row < 0 ||
      col < 0 ||
      board[row][col] == x ||
      board[row][col] == 'R'
    ) {
      return;
    }
    if (board[row][col] == zero) {
      board[row][col] = 'R'; // changing the board in place
    }

    // running dfs in all four directions
    dfs(row + 1, col, board);
    dfs(row, col + 1, board);
    dfs(row, col - 1, board);
    dfs(row - 1, col, board);
  };
  // running dfs left and right
  for (let i = 0; i < ROWS; i++) {
    dfs(i, 0, board);
    dfs(i, COLS - 1, board);
  }
  // running dfs for top and bottom
  for (let i = 0; i < COLS; i++) {
    dfs(0, i, board);
    dfs(ROWS - 1, i, board);
  }
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const currVal = board[i][j];
      if (currVal == 'R') {
        board[i][j] = zero;
      } else if (currVal === zero) {
        board[i][j] = x;
      }
    }
  }
};

// run dfs accross the border regions then change them to a diff char then change the center ones to X
console.log(
  surroundRegion([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
);

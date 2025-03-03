const surroundingRegions = (board) => {
  const ROWS = board.length;
  const COLS = board[0].length;

  //dfs algorithm to check the boundaries and surrounding regions
  const dfs = (row, col, board) => {};

  // getting the surrounding regions
};

// the regions should not be connected to any border
// working on surrounding regions first then getting rid of any connected 0s start from either of the borders
console.log(
  surroundingRegions([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
);

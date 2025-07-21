const minsweeper = (board, click) => {
  const ROWS = board.length;
  const COLS = board[0].length;
  //const pathCache = new Map(); // will store the existing paths that are already visited
  // 8 directional array to explore in all 8 directions
  const ways = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];

  // from current cell they will check for adjacent mines in all 8 directions
  const adjacentMinecounts = (currRow, currCol) => {
    let mineCount = 0;
    for (const [rowDir, colDir] of ways) {
      let adjacentRow = rowDir + currRow;
      let adjacentCol = colDir + currCol;
      // boundary check for adjacent mines
      if (
        adjacentRow >= 0 &&
        adjacentCol >= 0 &&
        adjacentCol < COLS &&
        adjacentRow < ROWS
      ) {
        const currAdjacentPos = board[adjacentRow][adjacentCol];
        if (currAdjacentPos === 'M') {
          mineCount++;
        }
      }
    }
    return mineCount;
  };

  // main dfs traversal to explore from the starting path
  const dfs = (row, col) => {
    // base case -> boundary check
    if (row >= ROWS || col >= COLS || row < 0 || col < 0) return;
    if (board[row][col] !== 'E') return;

    let mineCount = adjacentMinecounts(row, col);
    if (mineCount > 0) {
      // will change the recursive value when a mine is discovered
      const currMineCountstr = mineCount.toString();
      board[row][col] = currMineCountstr;
      return;
    } else if (mineCount === 0) {
      board[row][col] = 'B';
      // 8 way traversal
      for (const [rowdir, coldir] of ways) {
        const currRow = rowdir + row;
        const currCol = coldir + col;
        dfs(currRow, currCol);
      }
    }
    // condition for immediate mine
    if (board[row][col] === 'M') {
      board[row][col] = 'X';
      return board;
    } else {
      // start immediate dfs traversal
      dfs(row, col);
    }
  };
  // starting base condition
  if (board[click[0]][click[1]] === 'M') {
    board[click[0]][click[1]] = 'X';
    return board;
  }
  // main dfs call
  dfs(click[0], click[1]);
  return board;
};

/* if a mine is revealed then mark it as X and return immediately ? or traverse the entire game and look for other mines?

*/

console.log(
  minsweeper(
    [
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'M', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E'],
    ],
    [3, 0]
  )
);

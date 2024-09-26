const pathWithMaxGold = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  let maxGold = 0;
  // dfs path search to check every path and backtrack
  const pathSearch = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= ROWS ||
      col >= COLS ||
      grid[row][col] === 0
    )
      return 0; // if there is no path then return 0
    // store the current path
    const currGoldAmount = grid[row][col];
    grid[row][col] = 0;

    // recursive checks
    const left = pathSearch(row, col - 1);
    const right = pathSearch(row, col + 1);
    const top = pathSearch(row - 1, col);
    const bottom = pathSearch(row + 1, col);

    grid[row][col] = currGoldAmount; // setting back the original amount for backtracking from other calls
    return currGoldAmount + Math.max(right, top, left, bottom);
  };

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] !== 0) {
        maxGold = Math.max(maxGold, pathSearch(i, j));
      }
    }
  }

  return maxGold;
};

// calculating the path with maximum amount of gold.. using dfs to check down every
console.log(
  pathWithMaxGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);

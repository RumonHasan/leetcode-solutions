const minimumPathSum = (grid) => {
  const cache = new Map();
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const dfs = (row, col) => {
    const cacheKey = `${row}-${col}`;
    if (row >= ROWS || col >= COLS) return Infinity;

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // if it reaches the end then collect the value
    if (row === ROWS - 1 && col === COLS - 1) {
      return grid[row][col];
    }
    let minCount = Infinity;
    // taking down down
    minCount = Math.min(minCount, dfs(row + 1, col));
    minCount = Math.min(minCount, dfs(row, col + 1));

    let totalCount = grid[row][col] + minCount;
    cache.set(cacheKey, totalCount);
    return totalCount;
  };

  return dfs(0, 0);
};

/**
 * going to use a general dfs solution in order to find the minimum path and calculate the mininum count
 */
console.log(
  minimumPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

const minimumFallPathSum = (matrix) => {
  const cache = new Map();
  const COLS = matrix[0].length;
  const ROWS = matrix.length;

  const dfs = (row, col) => {
    const cacheKey = `${row}-${col}`;
    // main base case
    if (col >= COLS || row < 0 || col < 0 || row >= ROWS) {
      return Infinity;
    }
    // since we inherently are going down its important to set a base case for the last element and return the final element
    if (row === ROWS - 1) {
      return matrix[row][col];
    }

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // three way dfs calls
    let dfsResult =
      matrix[row][col] +
      Math.min(dfs(row + 1, col + 1), dfs(row + 1, col - 1), dfs(row + 1, col));
    cache.set(cacheKey, dfsResult);
    return dfsResult;
  };

  let minSum = Infinity;

  for (let col = 0; col < matrix[0].length; col++) {
    const currCol = col;
    minSum = Math.min(minSum, dfs(0, currCol));
  }

  return minSum;
};

// using dfs to find the minimum path find sum starting from row 0
console.log(
  minimumFallPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);

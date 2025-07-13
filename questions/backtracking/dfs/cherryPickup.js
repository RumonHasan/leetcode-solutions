const cherryPickup = (grid) => {
  const cache = new Map();
  const n = grid.length; // common n length

  // main dfs function that will start with two combination starts
  const dfs = (row1, col1, row2, col2) => {
    const cacheKey = `${row1}-${col1}-${row2}-${col2}`;

    // base case border check and grid value check for -1 then the recursive check stops
    if (
      row1 >= n ||
      col1 >= n ||
      row2 >= n ||
      col2 >= n ||
      grid[row1][col1] === -1 ||
      grid[row2][col2] === -1
    )
      return -1;

    // return from cache
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // reaching end then return the final destination avlue
    if (row1 === n - 1 && col1 === n - 1 && row2 === n - 1 && col2 === n - 1) {
      return grid[row1][col1];
    }

    let cherryCount = 0;
    // counting the cherries for current cells unless if current cell not equal
    if (row1 === row2 && col1 === col2) {
      cherryCount += grid[row1][col1];
    } else {
      cherryCount += grid[row1][col1] + grid[row2][col2];
    }

    let maxFutureCount = -1;
    // down , right
    maxFutureCount = Math.max(
      maxFutureCount,
      dfs(row1 + 1, col1, row2, col2 + 1)
    );
    // right, right
    maxFutureCount = Math.max(
      maxFutureCount,
      dfs(row1, col1 + 1, row2, col2 + 1)
    );
    // down, down
    maxFutureCount = Math.max(
      maxFutureCount,
      dfs(row1 + 1, col1, row2 + 1, col2)
    );
    // right, down
    maxFutureCount = Math.max(
      maxFutureCount,
      dfs(row1, col1 + 1, row2 + 1, col2)
    );

    // from here no path exists
    if (maxFutureCount === -1) {
      cache.set(cacheKey, -1);
      return -1;
    }

    let totalCount = cherryCount + maxFutureCount;
    cache.set(cacheKey, totalCount);
    return totalCount;
  };

  const maxCount = dfs(0, 0, 0, 0);
  return maxCount === -1 ? 0 : maxCount;
};

/**
 * Dfs memoization approach to find all the maximum collection possible if considering instead of round trip we simultaneously
 * have two persons going down the grid from top left to bottom right as the final destination collecting all the cherries at once
 * ... dfs path finding approach will be applied here
 * note: the matrix grid is uniform having same number of rows and columns n*n matrix
 * boundary checks are important as they should always go right or downward direction
 * note: when adding the count make sure not to forget to single count if the cell positions are same.
 */
console.log(
  cherryPickup([
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ])
);

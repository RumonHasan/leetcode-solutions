const cherryPickII = (grid) => {
  const cache = new Map();
  const cols = grid[0].length;
  const rows = grid.length;
  const movements = [-1, 0, 1];

  // main dfs logic
  const dfs = (row, col1, col2) => {
    const cacheKey = `${row}-${col1}-${col2}`;

    // base case when row hits the end point
    if (row === rows - 1) {
      const endCherryCount = grid[row][col1];
      if (col1 !== col2) {
        const endCherryDiffColCount = grid[row][col2];
        return endCherryDiffColCount + endCherryCount; // return both since they are different positions in the same row
      }
      return endCherryCount;
    }

    // cached return max count
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // general addition of cherries depending on the column positioning
    let cherryCount = 0;
    if (col1 !== col2) {
      cherryCount += grid[row][col1];
      cherryCount += grid[row][col2];
    } else {
      cherryCount += grid[row][col1];
    }
    let maxFutureCount = 0;
    // nested iteration for getting the combination of paths where only columns will be moved since row is always incremented
    for (let move1 = 0; move1 < movements.length; move1++) {
      for (let move2 = 0; move2 < movements.length; move2++) {
        let newCol1 = movements[move1] + col1;
        let newCol2 = movements[move2] + col2;

        //boundary check only for column since rows will keep on incrementing downwards
        if (newCol1 >= 0 && newCol2 >= 0 && newCol1 < cols && newCol2 < cols) {
          maxFutureCount = Math.max(
            maxFutureCount,
            dfs(row + 1, newCol1, newCol2)
          );
        }
      }
    }
    // caching existing cherry count max
    let totalCherries = cherryCount + maxFutureCount;
    cache.set(cacheKey, totalCherries);
    return totalCherries;
  };

  return dfs(0, 0, cols - 1); // the starting point is from the starting row but the cell from top left and top right
};

/**
 * Dfs functionality to make the pick the maximum number of cherries that can achieved by both the bots
 * while moving down simultaneously from top to bottom.. note the row will remain the same
 * remmber to add the cherry count only once since for the same cell you do not need to add it twice
 */
console.log(
  cherryPickII([
    [3, 1, 1],
    [2, 5, 1],
    [1, 5, 5],
    [2, 1, 1],
  ])
);

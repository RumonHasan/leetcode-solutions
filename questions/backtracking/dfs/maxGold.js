const maxGold = (grid) => {
  const ROW = grid.length;
  const COL = grid[0].length;
  let maxGold = 0;

  // dfs backtracking to check every available path and finding the max amount that can be achieved
  const backtrack = (row, col, grid, localMax = 0) => {
    if (
      row >= ROW ||
      col >= COL ||
      row < 0 ||
      col < 0 ||
      grid[row][col] === 0
    ) {
      return localMax;
    }

    let temp = grid[row][col];
    localMax += grid[row][col];
    grid[row][col] = 0; // changing the element to 0
    //for directional dfs path
    // returning the maximum path from one recursive sequence
    let result = Math.max(
      backtrack(row + 1, col, grid, localMax),
      backtrack(row - 1, col, grid, localMax),
      backtrack(row, col + 1, grid, localMax),
      backtrack(row, col - 1, grid, localMax)
    );
    grid[row][col] = temp; // turning the grid valud back to the original for other path check
    return result;
  };

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      const currCell = grid[i][j];

      if (currCell > 0) {
        maxGold = Math.max(backtrack(i, j, grid), maxGold);
      }
    }
  }

  return maxGold;
};

console.log(
  maxGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20],
  ])
);

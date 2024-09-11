const maxAreaIslands = (grid) => {
  let maxArea = 0;
  const ROW = grid.length;
  const COL = grid[0].length;
  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= ROW || col >= COL || grid[row][col] === 0)
      return 0;

    grid[row][col] = 0;

    // the return value is turned into a number
    return (
      1 +
      dfs(row - 1, col) +
      dfs(row, col - 1) +
      dfs(row + 1, col) +
      dfs(row, col + 1)
    );
  };

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }
  return maxArea;
};

console.log(
  maxAreaIslands([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);

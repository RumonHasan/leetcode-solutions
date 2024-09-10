const numOfIslands = (grid) => {
  const ROW = grid.length;
  const COL = grid[0].length;
  let islandCount = 0;
  // main dfs function
  const dfs = (row, col, grid) => {
    if (row < 0 || col < 0 || row >= ROW || col >= COL || grid[row][col] == '0')
      return;
    // adding the visited path to 0 so it does not go back
    grid[row][col] = '0';
    // dfs in 4ways
    dfs(row + 1, col, grid);
    dfs(row - 1, col, grid);
    dfs(row, col + 1, grid);
    dfs(row, col - 1, grid);
    return true;
  };
  // checking for each index
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] == '1') {
        islandCount++; // one represents a single island
        dfs(i, j, grid);
      }
    }
  }
  return islandCount;
};

// anything connected is part of one island
console.log(
  numOfIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
// 0, 2
// 1, 2

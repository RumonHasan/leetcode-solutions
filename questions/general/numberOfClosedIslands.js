const numberOfClosedIslands = (grid) => {
  const ROW = grid.length;
  const COL = grid[0].length;
  let closedIslandCount = 0;

  // main dfs function to check through all the possible islands
  const islandSearch = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= ROW ||
      col >= COL ||
      grid[row][col] === 1
    ) {
      return;
    }
    grid[row][col] = 1;
    islandSearch(row + 1, col);
    islandSearch(row - 1, col);
    islandSearch(row, col + 1);
    islandSearch(row, col - 1);
  };

  // Mark boundary-connected islands
  for (let i = 0; i < ROW; i++) {
    if (grid[i][0] === 0) islandSearch(i, 0);
    if (grid[i][COL - 1] === 0) islandSearch(i, COL - 1);
  }
  for (let j = 0; j < COL; j++) {
    if (grid[0][j] === 0) islandSearch(0, j);
    if (grid[ROW - 1][j] === 0) islandSearch(ROW - 1, j);
  }

  for (let i = 1; i < ROW - 1; i++) {
    for (let j = 1; j < COL - 1; j++) {
      if (grid[i][j] === 0) {
        islandSearch(i, j);
        closedIslandCount++;
      }
    }
  }
  return closedIslandCount;
};

// number of closed islands surrounded by 1s.. remmber here the land is 0
console.log(
  numberOfClosedIslands([
    [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  ])
);

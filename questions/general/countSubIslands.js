const subIslands = (grid1, grid2) => {
  const ROW = grid2.length;
  const COL = grid2[0].length;
  let subCount = 0;
  const dfs = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= ROW ||
      col >= COL ||
      grid2[row][col] == 0
    ) {
      return true;
    }
    grid2[row][col] = 0;
    let res = grid1[row][col] === 1;

    res = dfs(row + 1, col) && res;
    res = dfs(row - 1, col) && res;
    res = dfs(row, col + 1) && res;
    res = dfs(row, col - 1) && res;
    return res;
  };
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid2[i][j] == 1) {
        if (dfs(i, j)) {
          subCount++;
        }
      }
    }
  }
  return subCount;
};

// sub islands are islands that have positions similar to that of the grid1 or some intertwining cell positions
console.log(
  subIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
);

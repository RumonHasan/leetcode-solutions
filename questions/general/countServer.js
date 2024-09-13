const countServers = (grid) => {
  const ROW = grid.length;
  const COL = grid[0].length;
  let serverCount = 0;

  const serverDfs = (row, col) => {
    if (
      row >= ROW ||
      col >= COL ||
      row < 0 ||
      col < 0 ||
      grid[row][col] === 0
    ) {
      return 0;
    }
    grid[row][col] = 0;
    return (
      1 +
      (serverDfs(row, col + 1) +
        serverDfs(row, col - 1) +
        serverDfs(row + 1, col) +
        serverDfs(row - 1, col))
    );
  };

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === 1) {
        const currServerChain = serverDfs(i, j);
        serverCount += currServerChain > 1 ? currServerChain : 0;
      }
    }
  }

  return serverCount;
};

// just look for connecting server parts and add the total count if its more than one
console.log(
  countServers([
    [1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
  ])
);

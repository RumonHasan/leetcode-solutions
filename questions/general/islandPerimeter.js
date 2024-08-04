const islandPerimeterCount = (grid) => {
  let perimeterCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const currBlock = grid[i][j];
      if (currBlock === 1) {
        let neighBorCount = 0;
        // checking all sides
        const checkLeft = grid[i][j - 1] ?? 0;
        const checkRight = grid[i][j + 1] ?? 0;
        const checkBottom = i === grid.length - 1 ? 0 : grid[i + 1][j] ?? 0;
        const checkTop = i === 0 ? 0 : grid[i - 1][j] ?? 0;

        if (checkLeft === 1) neighBorCount++;
        if (checkRight === 1) neighBorCount++;
        if (checkBottom === 1) neighBorCount++;
        if (checkTop === 1) neighBorCount++;
        perimeterCount += 4 - neighBorCount;
      }
    }
  }
  return perimeterCount;
};

// console.log(
//   islandPerimeterCount([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0],
//   ])
// );

const countServers = (grid) => {
  console.log('grid', grid);
  let serverCount = 0;
  // getting server count per row and column
  let serverRowCount = new Array(grid.length).fill(0);
  let serverColumnCount = new Array(grid[0].length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (grid[i][j] === 1) {
        serverRowCount[i]++;
        serverColumnCount[j]++;
      }
    }
  }
  console.log(serverColumnCount, serverRowCount);

  return serverCount;
};
// to be continued

// console.log(
//   countServers([
//     [1, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//   ])
// );

//leetcode 1267 counting connected servers in each row and column

const countServers = (grid) => {
  // getting the number of servers
  let serverRows = new Array(grid.length).fill(0);
  let serverCols = new Array(grid[0].length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (grid[i][j] === 1) {
        serverRows[i]++;
        serverCols[j]++;
      }
    }
  }
  let serverCount = 0;
  // checking for connections
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (serverRows[i] > 1 || serverCols[j] > 1) {
          serverCount++;
        }
      }
    }
  }
  return serverCount;
};
// to be continued

// console.log(
//   countServers([
//     [1, 1, 1, 0],
//     [0, 0, 1, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//   ])
// );

//leetcode 1267 counting connected servers in each row and column

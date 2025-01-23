const countServerCommunication = (grid) => {
  // will contain the row and col checks for server count
  let rowPrefSum = new Array(grid.length).fill(0);
  let colPrefSum = new Array(grid[0].length).fill(0);
  let serverCount = 0;

  // populating the row and col prefix sums
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const currRack = grid[i][j];
      if (currRack === 1) {
        // note: this count for the total servers to be accumulated based on the current row indices hence its incremented
        rowPrefSum[i]++;
        colPrefSum[j]++;
      }
    }
  }
  // getting the server count by taking reference from both row and col count
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const currRack = grid[i][j];
      if (currRack === 1) {
        // if one of them is above 1 that means the col is also connected and there are two instances of connected servers
        if (rowPrefSum[i] > 1 || colPrefSum[j] > 1) {
          serverCount++;
        }
      }
    }
  }
  return serverCount;
};

console.log(
  countServerCommunication([
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ])
);

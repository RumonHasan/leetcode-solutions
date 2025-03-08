const groupFarmLands = (land) => {
  let result = [];
  let bottomRightRow = 0;
  let bottomRightCol = 0;
  const ROW = land.length;
  const COL = land[0].length;
  // main dfs solution
  const dfs = (row, col, land) => {
    // edge case
    if (
      row >= ROW ||
      col >= COL ||
      row < 0 ||
      col < 0 ||
      land[row][col] === 0
    ) {
      return;
    }

    land[row][col] = 0;
    // updating the bottom rigth and bottom left here so that it will always the bottom right and left
    bottomRightRow = Math.max(bottomRightRow, row);
    bottomRightCol = Math.max(bottomRightCol, col);

    // running dfs to right and bottom
    dfs(row + 1, col, land);
    dfs(row, col + 1, land);
  };

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      const currLand = land[i][j];
      if (currLand === 1) {
        bottomRightRow = i;
        bottomRightCol = j;

        const sublist = new Array(4).fill(0);

        sublist[0] = bottomRightRow;
        sublist[1] = bottomRightCol;
        // getting the values of the real bottom right and left
        dfs(i, j, land); // after ds is run it updates the bottom indices
        sublist[2] = bottomRightRow;
        sublist[3] = bottomRightCol;
        result.push(sublist);
      }
    }
  }

  return result;
};

// getting the top left and bottom corner indices
console.log(
  groupFarmLands([
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
  ])
);

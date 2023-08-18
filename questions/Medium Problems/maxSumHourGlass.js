const maxSumHourGlass = (grid) => {
  let maxSum = -Infinity;
  for (let index = 0; index < grid.length - 2; index++) {
    let row = grid[index];
    let subTotal = 0;
    for (let subIndex = 0; subIndex < row.length - 2; subIndex++) {
      let element = grid[index][subIndex];
      // hour glass sections
      let topLeft = element;
      let topMiddle = grid[index][subIndex + 1];
      let topRight = grid[index][subIndex + 2];
      let center = grid[index + 1][subIndex + 1];
      let bottomLeft = grid[index + 2][subIndex];
      let bottomCenter = grid[index + 2][subIndex + 1];
      let bottomRight = grid[index + 2][subIndex + 2];
      subTotal =
        topLeft +
        topMiddle +
        topRight +
        center +
        bottomLeft +
        bottomCenter +
        bottomRight;
      maxSum = Math.max(maxSum, subTotal);
    }
  }
  return maxSum;
};

// its a general three by three matrix meaning that we cannot exceed the total row length and have to keep space for three
// console.log(
//   maxSumHourGlass([
//     [6, 2, 1, 3],
//     [4, 2, 1, 5],
//     [9, 2, 8, 7],
//     [4, 1, 2, 9],
//   ])
// );

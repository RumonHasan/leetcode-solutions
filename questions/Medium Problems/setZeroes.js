const setZeroes = (matrix) => {
  // get the col and row val of the number
  const rowLocation = new Set();
  const colLocation = new Set();
  // getting the locations
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (matrix[rowIndex][colIndex] === 0) {
        rowLocation.add(rowIndex);
        colLocation.add(colIndex);
      }
    }
  }
  // converting the cols to 0
  for (let row of rowLocation) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }
  // converting the rows to 0
  for (let col of colLocation) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
  return matrix;
};

// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );

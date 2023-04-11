const setMatrixZeroes = (matrix) => {
  let rowSet = new Set();
  let colSet = new Set();
  // get rows and cols
  for (let index = 0; index < matrix.length; index++) {
    let rowLen = matrix[index].length;
    for (let secondIndex = 0; secondIndex < rowLen; secondIndex++) {
      if (matrix[index][secondIndex] === 0) {
        rowSet.add(index);
        colSet.add(secondIndex);
      }
    }
  }
  // changing the cols
  for (let rowVal of rowSet) {
    for (let index = 0; index < matrix[0].length; index++) {
      matrix[rowVal][index] = 0;
    }
  }
  // changing the rows
  for (let colVal of colSet) {
    for (let index = 0; index < matrix.length; index++) {
      matrix[index][colVal] = 0;
    }
  }
  return matrix;
};

// console.log(
//   setMatrixZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [0, 3, 1, 5],
//   ])
// );

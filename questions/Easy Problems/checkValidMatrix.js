const checkValid = (matrix) => {
  // set approach
  let n = matrix.length;
  let checkSet = new Set();
  for (let index = 1; index <= n; index++) {
    checkSet.add(index);
  }
  // row check
  for (let index = 0; index < matrix.length; index++) {
    let rowSet = new Set();
    for (let secondIndex = 0; secondIndex < matrix[0].length; secondIndex++) {
      rowSet.add(matrix[index][secondIndex]);
    }
    if (rowSet.size !== checkSet.size) {
      return false;
    }
  }
  // col check
  for (let index = 0; index < matrix[0].length; index++) {
    let colSet = new Set();
    for (let secondIndex = 0; secondIndex < matrix.length; secondIndex++) {
      colSet.add(matrix[secondIndex][index]);
    }
    if (colSet.size !== checkSet.size) {
      return false;
    }
  }
  return true;
};

// console.log(
//   checkValid([
//     [1, 2, 3],
//     [3, 1, 2],
//     [2, 3, 1],
//   ])
// );

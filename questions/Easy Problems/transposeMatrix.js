const transpose = (matrix) => {
  // in order to get around the undefined property issue
  let flippedMatrix = Array.from({ length: matrix[0].length }, () =>
    Array(matrix.length).fill('')
  );
  // populate
  for (let index in matrix) {
    let matrixRow = matrix[index];
    for (let secondIndex = 0; secondIndex < matrixRow.length; secondIndex++) {
      flippedMatrix[secondIndex][index] = matrix[index][secondIndex];
    }
  }
  return flippedMatrix;
};

// matrix should be flipped over its diagonal while maintaining the same order
// console.log(
//   transpose([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

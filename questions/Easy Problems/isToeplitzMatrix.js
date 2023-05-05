const isToeplitzMatrix = (matrix) => {
  for (let index = 0; index < matrix.length; index++) {
    let rowLen = matrix[index].length;
    for (let secondIndex = 0; secondIndex < rowLen; secondIndex++) {
      if (secondIndex === 0) {
        continue;
      }
      if (index === 0) continue;
      const topLeftElement = matrix[index - 1][secondIndex - 1];
      const currentElement = matrix[index][secondIndex];
      if (topLeftElement !== currentElement) {
        return false;
      }
    }
  }
  return true;
};

// simply check the top left members for equality in order to check for toeplitzmatrix check
// while keeping the top left and to borders in check
// console.log(
//   isToeplitzMatrix([
//     [1, 2, 3, 4],
//     [5, 1, 2, 3],
//     [9, 5, 1, 2],
//   ])
// );

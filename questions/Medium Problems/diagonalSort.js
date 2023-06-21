const diagonalSortMatrix = (matrix) => {
  let matrixMap = new Map();
  // populating diagonals with index - secondIndex id
  for (let index = 0; index < matrix.length; index++) {
    for (let secondIndex = 0; secondIndex < matrix[0].length; secondIndex++) {
      const matrixElement = matrix[index][secondIndex];
      if (matrixMap.has(index - secondIndex)) {
        matrixMap.get(index - secondIndex).push(matrixElement);
      } else {
        matrixMap.set(index - secondIndex, [matrixElement]);
      }
    }
  }
  // sorting the map and udpating the arrays
  for (let [key, array] of matrixMap) {
    const sortedKeyArray = array.sort((a, b) => a - b);
    matrixMap.set(key, sortedKeyArray);
  }
  // updating the matrix
  for (let index = 0; index < matrix.length; index++) {
    for (let secondIndex = 0; secondIndex < matrix[0].length; secondIndex++) {
      const matrixId = index - secondIndex;
      if (matrixMap.has(matrixId)) {
        const localArrayElement = matrixMap.get(matrixId)[0];
        matrix[index][secondIndex] = localArrayElement;
        // shifting to remove the first element after appending to the array
        matrixMap.get(matrixId).shift();
      }
    }
  }
  return matrix;
};

// console.log(
//   diagonalSortMatrix([
//     [3, 3, 1, 1],
//     [2, 2, 1, 2],
//     [1, 1, 1, 2],
//   ])
// );

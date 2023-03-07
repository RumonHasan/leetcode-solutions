const findPeakGrid = (mat) => {
  let peakIndex = [];
  const checkElementPosition = (element, top, left, right, bottom) => {
    return (
      element > top && element > bottom && element > right && element > left
    );
  };

  for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
    for (let colIndex = 0; colIndex < mat[rowIndex].length; colIndex++) {
      const top = rowIndex === 0 ? -1 : mat[rowIndex - 1][colIndex];
      const left = colIndex === 0 ? -1 : mat[rowIndex][colIndex - 1];
      const right =
        colIndex === mat[rowIndex].length - 1
          ? -1
          : mat[rowIndex][colIndex + 1];
      const bottom =
        rowIndex === mat.length - 1 ? -1 : mat[rowIndex + 1][colIndex];

      if (
        checkElementPosition(mat[rowIndex][colIndex], top, left, right, bottom)
      ) {
        peakIndex.push([rowIndex, colIndex]);
      }
    }
  }
  return peakIndex[0];
};

// console.log(
//   findPeakGrid([
//     [41, 8, 2, 48, 18],
//     [16, 15, 9, 7, 44],
//     [48, 35, 6, 38, 28],
//     [3, 2, 14, 15, 33],
//     [39, 36, 13, 46, 42],
//   ])
// );

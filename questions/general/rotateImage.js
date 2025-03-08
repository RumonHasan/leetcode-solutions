const rotateImage = (matrix) => {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  // transposing layer
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (i < j) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  // reversing the rows
  for (let i = 0; i < ROWS; i++) {
    const currRow = matrix[i].reverse();
    matrix[i] = currRow;
  }

  return matrix;
};

// rotating images using transposing layers and then switching the matrix rows in order to create the final matrix formation...
console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

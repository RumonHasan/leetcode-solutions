const firstCompleteIndex = (arr, mat) => {
  // default indices counter arrays for both rows and cols
  let rowsIndexArray = new Array(mat.length).fill(0);
  let colsIndexArray = new Array(mat[0].length).fill(0);
  const ROW_LEN = mat[0].length; // number of cells needed to complete a row
  const COL_LEN = mat.length;
  let map = new Map();

  // create table that contains indices of every number
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const row = i;
      const col = j;
      const currNum = mat[row][col];
      map.set(currNum, [row, col]);
    }
  }

  // checking counter for each indices
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (map.has(currNum)) {
      const [row, col] = map.get(currNum);
      rowsIndexArray[row]++;
      colsIndexArray[col]++;
      const rowVal = rowsIndexArray[row];
      const colVal = colsIndexArray[col];
      if (rowVal === ROW_LEN || colVal === COL_LEN) {
        return i;
      }
    }
  }
};

// step -1 getting the table that contains all the cords of each number
// step 2- getting the row index array and col index array to store the counters
console.log(
  firstCompleteIndex(
    [1, 4, 5, 2, 6, 3],
    [
      [4, 3, 5],
      [1, 2, 6],
    ]
  )
);

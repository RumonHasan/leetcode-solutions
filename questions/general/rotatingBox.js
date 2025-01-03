const rotatingBox = (boxGrid) => {
  const block = '*';
  const stone = '#';
  const ROWS = boxGrid.length;
  const COLS = boxGrid[0].length;
  // first changing the box grid and dropping the stones
  for (let row = 0; row < ROWS; row++) {
    let i = COLS - 1; // changes to the latest empty space if there is a stone
    for (let col = COLS - 1; col >= 0; col--) {
      const currEl = boxGrid[row][col];
      if (currEl === stone) {
        const tempPosEl = boxGrid[row][i];
        boxGrid[row][i] = stone;
        boxGrid[row][col] = tempPosEl;
        i -= 1; // only decrement because it needs to be updated to the new position
      }
      if (currEl === block) {
        i = col - 1; // keep it one before the block.. since the block is the end
      }
    }
  }
  // reorganizing the boxMatrix to flip rightward to 90 degrees cols witll become rows
  let newGrid = [];
  for (let col = 0; col < COLS; col++) {
    let newRow = [];
    for (let row = 0; row < ROWS; row++) {
      newRow.push(boxGrid[row][col]);
    }
    newGrid.push(newRow.reverse());
  }
  return newGrid;
};

// console.log(
//   rotatingBox([
//     ['#', '#', '*', '.', '*', '.'],
//     ['#', '#', '#', '*', '.', '.'],
//     ['#', '#', '#', '.', '#', '.'],
//   ])
// );

const setMatrix = (matrix) => {
  let setCol = new Set();
  let setRows = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        setCol.add(j);
        setRows.add(i);
      }
    }
  }
  // change rows
  for (let row of setRows) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }
  // change cols
  for (let col of setCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
  return matrix;
};

console.log(
  setMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

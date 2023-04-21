const numRookCaptures = (board) => {
  const checkSides = (array) => {
    let index = 0;
    let count = 0;
    while (index < array.length) {
      if (array[index] === '.') {
        index++;
      }
      if (array[index] === 'B') {
        break;
      }
      if (array[index] === 'p') {
        count++;
        break;
      }
    }
    return count;
  };

  const calculateCaptures = (array) => {
    let rookIndex = array.findIndex((item) => item === 'R');
    let leftSide = array.slice(0, rookIndex).reverse();
    let rightSide = array.slice(rookIndex + 1, array.length);
    let leftSideCaptures = checkSides(leftSide);
    let rightSideCaptures = checkSides(rightSide);
    return leftSideCaptures + rightSideCaptures;
  };

  let rowIndex = 0;
  let colIndex = 0;
  // get location
  for (let index = 0; index < board.length; index++) {
    let row = board[index];
    for (let secondIndex = 0; secondIndex < row.length; secondIndex++) {
      if (board[index][secondIndex] === 'R') {
        rowIndex = index;
        colIndex = secondIndex;
      }
    }
  }
  let rowArray = [];
  let colArray = [];
  // get the row
  for (let index = 0; index < board[0].length; index++) {
    rowArray.push(board[rowIndex][index]);
  }
  for (let index = 0; index < board.length; index++) {
    colArray.push(board[index][colIndex]);
  }
  let rowCaptures = calculateCaptures(rowArray);
  let colCaptures = calculateCaptures(colArray);

  return rowCaptures + colCaptures;
};

// console.log(
//   numRookCaptures([
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', 'p', '.', '.', '.', '.'],
//     ['.', '.', '.', 'p', '.', '.', '.', '.'],
//     ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', 'B', '.', '.', '.', '.'],
//     ['.', '.', '.', 'p', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//   ])

const numOfRookCaptures = (board) => {
  let counter = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        const row = i;
        const col = j;
        // checking row
        for (let rowIndex = col + 1; rowIndex < board[0].length; rowIndex++) {
          const val = board[row][rowIndex];
          console.log(val, 'val');
          if (val !== '.' && val == 'p') {
            counter++;
            break;
          }
          if (val !== '.') {
            break;
          }
        }
        for (let rowIndex = col - 1; rowIndex >= 0; rowIndex--) {
          const val = board[row][rowIndex];
          if (val !== '.' && val == 'p') {
            counter++;
            break;
          }
          if (val !== '.') {
            break;
          }
        }

        // for col check
        for (let rowIndex = row + 1; rowIndex < board.length; rowIndex++) {
          const val = board[rowIndex][col];
          if (val !== '.' && val == 'p') {
            counter++;
            break;
          }
          if (val !== '.') {
            break;
          }
        }

        for (let rowIndex = row - 1; rowIndex >= 0; rowIndex--) {
          const val = board[rowIndex][col];
          if (val !== '.' && val == 'p') {
            counter++;
            break;
          }
          if (val !== '.') {
            break;
          }
        }
      }
    }
  }
  return counter;
};

console.log(
  numOfRookCaptures([
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
  ])
);

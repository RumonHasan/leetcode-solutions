// using dfs to complete word search
const wordSearch = (board, word) => {
  const ROW = board.length;
  const COL = board[0].length;
  let pathSet = new Set();
  // main dfs function
  const wordSearchDfs = (row, col, index) => {
    if (index === word.length) return true;
    // false condition
    if (
      row < 0 ||
      col < 0 ||
      row >= ROW ||
      col >= COL ||
      board[row][col] !== word[index] ||
      pathSet.has(`${row}-${col}`)
    ) {
      return false;
    }
    // adding the current path
    pathSet.add(`${row}-${col}`);
    // main dfs iteration
    let res =
      wordSearchDfs(row - 1, col, index + 1) ||
      wordSearchDfs(row + 1, col, index + 1) ||
      wordSearchDfs(row, col + 1, index + 1) ||
      wordSearchDfs(row, col - 1, index + 1);

    // removing the current path from the set
    pathSet.delete(`${row}-${col}`);
    return res;
  };

  // main iteration for passing the row and column and index of the current position of word
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (wordSearchDfs(i, j, 0)) return true;
    }
  }
  return false;
};

// using dfs to check from every index and drill down till the word is found if not return false
console.log(
  wordSearch(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);

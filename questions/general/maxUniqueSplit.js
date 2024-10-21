const maxUniqueSplit = (s) => {
  let subSet = new Set();
  let sIndex = 0;
  // main dp algorithm
  const dp = (index, set) => {
    if (index === s.length) {
      // edge case
      return 0;
    }
    let result = 0;
    for (let j = index; j < s.length; j++) {
      const substring = s.slice(index, j + 1);
      if (!set.has(substring)) {
        set.add(substring);
        result = Math.max(result, 1 + dp(j + 1, set)); // here js is added because we want the second call to be starting from the ending character
        set.delete(substring);
      }
    }
    return result;
  };

  return dp(sIndex, subSet);
};

// using backtracking and set to check whether the previous substring has been accounted for or not
//console.log(maxUniqueSplit('ababccc'));

// word search using backtracking
const wordSearch = (board, word) => {
  const ROWS = board.length;
  const COLS = board[0].length;
  let pathSet = new Set();

  // dfs to check every possible path
  const dfs = (row, col, index) => {
    if (index === word.length) return true; // running to the end
    // possible edge cases for when the condition will return false
    if (
      row < 0 ||
      col < 0 ||
      row >= ROWS ||
      col >= COLS ||
      pathSet.has(`${row}-${col}`) ||
      board[row][col] !== word[index]
    ) {
      return false;
    }
    // main recursive call
    pathSet.add(`${row}-${col}`); // adding current path for keeping track of the path
    let result =
      dfs(row - 1, col, index + 1) ||
      dfs(row + 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    pathSet.delete(`${row}-${col}`); // deleting existing for backtracking

    return result;
  };
  // iterating from every letter
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

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

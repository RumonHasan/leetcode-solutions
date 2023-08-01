const wordSearch = (board, word) => {
  let rows = board.length;
  let cols = board[0].length;
  let path = new Set();

  const dfsBacktrack = (row, col, i) => {
    if (i === word.length) return true;
  };
};

// using backtracking to brute force and find solution
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

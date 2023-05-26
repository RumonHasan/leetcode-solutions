const backtrackWordSearch = (board, word) => {
  console.log(board);
};

// brute force backtracking appraoch to solve the problem... checking every possible sub problems
console.log(
  backtrackWordSearch(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);

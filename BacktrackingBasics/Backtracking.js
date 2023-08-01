const backtrackingBasics = (board, string) => {
  let rows = board.length;
  let cols = board[0].length;
  let end = 0;
  // main dfs algorithm
  const dfs = (result, row, col, index) => {
    if (index === string.length - 1) return (result += string[index]);
    if (
      row < 0 ||
      col < 0 ||
      row > board.length - 1 ||
      col > board[0].length - 1 ||
      board[row][col] !== string[index]
    ) {
      return;
    }
    result += board[row][col];
    let nextResult =
      dfs(result, row + 1, col, index + 1) ||
      dfs(result, row, col + 1, index + 1) ||
      dfs(result, row - 1, col, index + 1) ||
      dfs(result, row, col - 1, index + 1);

    return nextResult;
  };
  let finalResult = '';
  while (end < rows) {
    for (let index = 0; index < cols; index++) {
      let dfsString = dfs('', end, index, 0);
      console.log(dfsString);
    }
    end++;
  }
  return finalResult;
};

// // basic approach is to check for every letter found check the letters in all directions
// console.log(
//   backtrackingBasics(
//     [
//       ['A', 'B', 'C', 'E'],
//       ['S', 'F', 'C', 'S'],
//       ['A', 'D', 'E', 'B'],
//     ],
//     'DEE'
//   )
// );

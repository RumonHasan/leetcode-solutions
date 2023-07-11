const counterXMatrix = (grid) => {
  for (let index = 0; index < grid.length; index++) {
    let row = grid[index];
    for (let secondIndex = 0; secondIndex < row.length; secondIndex++) {
      if (index === secondIndex && grid[index][secondIndex] === 0) {
        return false;
      }
      // counter diagonal
      if (
        index + secondIndex === grid.length - 1 &&
        grid[index][secondIndex] === 0
      ) {
        return false;
      }
      // rest of the elements
      if (
        !(index === secondIndex) &&
        !(index + secondIndex === grid.length - 1) &&
        grid[index][secondIndex] !== 0
      ) {
        return false;
      }
    }
  }
  return true;
};

// console.log(
//   counterXMatrix([
//     [2, 0, 0, 1],
//     [0, 3, 1, 0],
//     [0, 5, 2, 0],
//     [4, 0, 0, 2],
//   ])
// );

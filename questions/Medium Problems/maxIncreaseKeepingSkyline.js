const maxIncreaseKeepingSkyline = (grid) => {
  //   console.log(grid);
  const intuitiveStraightApproach = () => {
    let maxRowVal = 0;
    let maxColVal = 0;
    // get max row and col val
    const maxVal = (type, index) => {
      if (type === 'row') {
        return Math.max(...grid[index]);
      } else {
        let localMax = 0;
        for (let subIndex = 0; subIndex < grid.length; subIndex++) {
          if (localMax < grid[subIndex][index]) {
            localMax = grid[subIndex][index];
          }
        }
        return localMax;
      }
    };
    let totalSum = 0;
    for (let index = 0; index < grid.length; index++) {
      let gridRow = grid[index];
      maxRowVal = maxVal('row', index);
      for (let subIndex = 0; subIndex < gridRow.length; subIndex++) {
        maxColVal = maxVal('col', subIndex);
        let minVal = Math.min(maxColVal, maxRowVal);
        totalSum += minVal - grid[index][subIndex];
      }
    }
    return totalSum;
  };
};

// console.log(
//   maxIncreaseKeepingSkyline([
//     [3, 0, 8, 4],
//     [2, 4, 5, 7],
//     [9, 2, 6, 3],
//     [0, 3, 1, 0],
//   ])
// );

const numberOfPoints = (nums) => {
  const intuitiveUncleanApproach = () => {
    let set = new Set();
    nums
      .sort((a, b) => a[0] - b[0])
      .map((array) => {
        const start = array[0];
        const end = array[1];
        for (let index = start; index <= end; index++) {
          set.add(index);
        }
      });
    return set.size;
  };
};

// console.log(
//   numberOfPoints([
//     [3, 6],
//     [1, 5],
//     [4, 7],
//   ])
// );

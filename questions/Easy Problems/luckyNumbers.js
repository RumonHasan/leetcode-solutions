const luckyNumbers = (matrix) => {
  let checkCollection = [];
  let map = new Map();

  // check rows
  for (let index = 0; index < matrix.length; index++) {
    let rowMin = Infinity;
    for (let rowIndex = 0; rowIndex < matrix[0].length; rowIndex++) {
      let rowVal = matrix[index][rowIndex];
      rowMin = Math.min(rowVal, rowMin);
    }
    map.has(rowMin) ? map.set(rowMin, map.get(rowMin) + 1) : map.set(rowMin, 1);
  }

  // check columns
  for (let index = 0; index < matrix[0].length; index++) {
    let colMax = -Infinity;
    for (let colIndex = 0; colIndex < matrix.length; colIndex++) {
      let colVal = matrix[colIndex][index];
      colMax = Math.max(colVal, colMax);
    }
    map.has(colMax) ? map.set(colMax, map.get(colMax) + 1) : map.set(colMax, 1);
  }

  for (let [key, value] of map) {
    if (value > 1) {
      checkCollection.push(Number(key));
    }
  }
  return checkCollection;
};

// console.log(
//   luckyNumbers([
//     [3, 7, 8],
//     [9, 11, 13],
//     [15, 16, 17],
//   ])
// );

const luckyMatNums = (matrix) => {
  const optimizedApproach = () => {
    //rows
    let rowSet = new Set();
    for (let index = 0; index < matrix.length; index++) {
      let rowMin = Infinity;
      for (let subIndex = 0; subIndex < matrix[index].length; subIndex++) {
        rowMin = Math.min(matrix[index][subIndex], rowMin);
      }
      rowSet.add(rowMin);
    }
    // cols
    let colSet = new Set();
    for (let index = 0; index < matrix[0].length; index++) {
      let colMax = -Infinity;
      for (let subIndex = 0; subIndex < matrix.length; subIndex++) {
        colMax = Math.max(colMax, matrix[subIndex][index]);
      }
      colSet.add(colMax);
    }
    // check sets
    let rowArray = [...rowSet];
    let colArray = [...colSet];
    for (let index in rowArray) {
      if (colArray.includes(rowArray[index])) {
        return [rowArray[index]] === undefined ? [] : [rowArray[index]];
      }
    }
    return [];
  };
};

// console.log(
//   luckyMatNums([
//     [3, 6],
//     [7, 1],
//     [5, 2],
//     [4, 8],
//   ])
// );

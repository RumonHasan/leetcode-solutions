const numSpecial = (mat) => {
  let uniqueCount = 0;
  const scanColumnsRows = (val, type) => {
    let total = 0;
    for (
      let index = 0;
      index < (type === 'col' ? mat.length : mat[0].length);
      index++
    ) {
      let positionVal = type === 'col' ? mat[index][val] : mat[val][index];
      total += positionVal;
    }
    if (total === 1) {
      return true;
    } else {
      return false;
    }
  };
  // record the positions
  for (let index = 0; index < mat.length; index++) {
    for (let secondIndex = 0; secondIndex < mat[index].length; secondIndex++) {
      if (mat[index][secondIndex] === 1) {
        let checkCol = scanColumnsRows(secondIndex, 'col');
        let checkRow = scanColumnsRows(index, 'row');
        if (checkCol && checkRow) {
          uniqueCount++;
        }
      }
    }
  }
  return uniqueCount;
};

//get the number of rows and cols that have unique positions where there is only 1 for each row and column
// console.log(
//   numSpecial([
//     [0, 0, 0, 1],
//     [1, 0, 0, 0],
//     [0, 1, 1, 0],
//     [0, 0, 0, 0],
//   ])
// );

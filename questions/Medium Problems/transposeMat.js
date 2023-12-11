const transposeMat = (matrix) => {
  console.log(matrix);
  // straight forward approach using flat method
  const flatApproach = () => {
    let dp = [];
    let flatMap = matrix.flat();
    // flat traversal
    let checkLen = 0;
    for (let index = 0; index < flatMap.length; index++) {
      if (checkLen === matrix[0].length) {
        break;
      }
      let rowLen = matrix[0].length;
      let subArray = [];
      for (
        let subIndex = index;
        subIndex < flatMap.length;
        subIndex += rowLen
      ) {
        subArray.push(flatMap[subIndex]);
      }
      checkLen++;
      dp.push(subArray);
    }
    return dp;
  };
};

// console.log(
//   transposeMat([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );

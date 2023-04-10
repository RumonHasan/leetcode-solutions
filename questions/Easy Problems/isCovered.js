const isCovered = (ranges, left, right) => {
  let rangeNumbers = [];
  for (let index = left; index <= right; index++) {
    rangeNumbers = [...rangeNumbers, index];
  }
  for (let index = 0; index < rangeNumbers.length; index++) {
    let number = rangeNumbers[index];
    let check = false;
    for (let secondIndex = 0; secondIndex < ranges.length; secondIndex++) {
      let leftLimit = ranges[secondIndex][0];
      let rightLimit = ranges[secondIndex][1];
      if (number >= leftLimit && number <= rightLimit) {
        check = true;
        break;
      }
    }
    if (check === false) {
      return false;
    }
  }
  return true;
};
// gotta make sure all the numbers between left and right are covered by atleast one range
// console.log(
//   isCovered(
//     [
//       [1, 2],
//       [3, 4],
//       [5, 6],
//     ],
//     2,
//     5
//   )
// );

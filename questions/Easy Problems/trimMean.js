const trimMean = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);
  let fivePercentLen = Math.floor(arr.length * 0.05);
  let firstCut = sortedArray.slice(fivePercentLen, arr.length);
  // second cut
  let secondCut = firstCut
    .reverse()
    .slice(fivePercentLen, arr.length)
    .reverse();
  let average = secondCut.reduce((acc, curr) => acc + curr) / secondCut.length;
  return average;
};

// console.log(
//   trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
// );

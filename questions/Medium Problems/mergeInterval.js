const merge = (intervals) => {
  let resultArray = [];
  let index = 0;
  let mainIndex = 1;
  console.log(intervals);
  intervals.sort((a, b) => a[0] - b[0]);
  while (mainIndex < intervals.length) {
    let first = intervals[index][1];
    let second = intervals[mainIndex][0];
    if (first >= second) {
      resultArray.push([
        Math.min(intervals[index][0], intervals[mainIndex][0]),
        Math.max(intervals[mainIndex][1], intervals[index][1]),
      ]);
      index += 2;
      mainIndex += 2;
      console.log(mainIndex);
    } else {
      if (mainIndex === intervals.length - 1) {
        resultArray.push(intervals[mainIndex]);
      }
      resultArray.push(intervals[index]);
      index++;
      mainIndex++;
    }
  }
  return resultArray.sort((a, b) => a[1] - b[1]);
};

console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
    [4, 9],
  ])
);

const insert = (intervals, newInterval) => {
  let first;
  let second;
  let resultArray = [];
  for (let i = 0; i < intervals.length; i++) {
    let secondElement = intervals[i][1];
    if (secondElement < newInterval[0]) {
      resultArray.push(intervals[i]);
      continue;
    } else if (newInterval[1] < intervals[i][0]) {
      resultArray.push(intervals[i]);
      continue;
    } else {
      first = Math.min(intervals[i][0], newInterval[0]);
      newInterval[0] = first;
      second = Math.max(intervals[i][1], newInterval[1]);
    }
  }
  resultArray.push([
    first === undefined ? newInterval[0] : first,
    second === undefined ? newInterval[1] : second,
  ]);
  return resultArray.sort((a, b) => a[0] - b[0]);
};
//console.log(insert([[1, 5]], [6, 8]));

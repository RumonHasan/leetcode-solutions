const divide = (intervals) => {
  const array = (len) => new Array(len).fill(0);
  let min = -Infinity;
  let counter = 0;
  let start = array(intervals.length);
  let end = array(intervals.length);
  for (let intervalIndex in intervals) {
    const interval = intervals[intervalIndex];
    start[intervalIndex] = interval[0];
    end[intervalIndex] = interval[1];
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let startPointer = 0;
  let endPointer = 0;
  // finding the max interval
  while (startPointer < start.length && endPointer < end.length) {
    const currStart = start[startPointer];
    const currEnd = end[endPointer];
    if (currStart <= currEnd) {
      counter++;
      startPointer++;
    } else {
      // if start is bigger meaning there is an entrance of new interval so moving the end pointer
      counter--;
      endPointer++;
    }
    min = Math.max(min, counter);
  }
  return min;
};

console.log(
  divide([
    [5, 10],
    [6, 8],
    [1, 5],
    [2, 3],
    [1, 10],
  ])
);

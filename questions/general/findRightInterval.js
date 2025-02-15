const findRightInterval = (intervals) => {
  let result = new Array(intervals.length).fill(-1);
  // brute forces and checks all the interval combination to get the right interval
  const getRightInterval = (currEndTime, intervals) => {
    let currentStartTime = Infinity;
    let foundIndex = -1;
    for (let index = 0; index < intervals.length; index++) {
      const localStartTime = intervals[index][0];
      // remember the current interval index can also be a strong candidate for getting the closest next starting range
      if (currEndTime <= localStartTime && currentStartTime > localStartTime) {
        // make sure to reduce currrentStartTime
        currentStartTime = localStartTime;
        foundIndex = index;
      }
    }
    return foundIndex;
  };
  // main iteration
  for (let i = 0; i < intervals.length; i++) {
    const currInterval = intervals[i];
    const foundIntervalIndex = getRightInterval(currInterval[1], intervals);
    result[i] = foundIntervalIndex; // storing the final found index in the result array.
  }
  return result;
};

// brute force approach checking each interval one by one and finding the smallest related start and end times.
console.log(
  findRightInterval([
    [1, 1],
    [3, 4],
  ])
);

const nonOverlappingIntervals = (intervals) => {
  const intuitiveApproach = () => {
    let minCount = 0;
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let prevInterval = sortedIntervals[0];
    let end = 1;
    while (end < sortedIntervals.length) {
      const currentInterval = sortedIntervals[end];
      const currStart = currentInterval[0];
      const currEnd = currentInterval[1];
      // checking for intersection
      if (currStart < prevInterval[1]) {
        if (currEnd >= prevInterval[1]) {
          minCount++;
        } else if (currEnd < prevInterval[1]) {
          minCount++;
          prevInterval = currentInterval;
        }
      } else if (prevInterval[1] <= currStart) {
        prevInterval = currentInterval;
      }
      end++;
    }
    return minCount;
  };
};

// console.log(
//   nonOverlappingIntervals([
//     [0, 2],
//     [1, 3],
//     [2, 4],
//     [3, 5],
//     [4, 6],
//   ])
// );

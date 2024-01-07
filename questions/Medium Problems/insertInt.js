const insert = (intervals, newInterval) => {
  const intuitiveApproach = () => {
    if (intervals.length === 0) {
      return newInterval;
    }
    let finalIntervals = [];
    let first = 0;
    let second = 0;
    for (let i = 0; i < intervals.length; i++) {
      const currInterval = intervals[i];
      if (currInterval[1] < newInterval[0]) {
        finalIntervals.push(currInterval);
        continue;
      } else if (currInterval[0] > newInterval[1]) {
        finalIntervals.push(currInterval);
        continue;
      } else {
        first = Math.min(currInterval[0], newInterval[0]);
        newInterval[0] = first; // keeping the first interval up to date
        second = Math.max(currInterval[1], newInterval[1]);
      }
    } // egde case
    if (first === 0 && second === 0) {
      return [...intervals, newInterval].sort((a, b) => a[0] - b[0]);
    } else {
      finalIntervals.push([first, second]);
    }

    return finalIntervals.sort((a, b) => a[0] - b[0]);
  };
};

// console.log(
//   insert(
//     [
//       [2, 5],
//       [6, 7],
//       [8, 9],
//     ],
//     [0, 1]
//   )
// );

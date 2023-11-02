const removeCoveredIntervals = (intervals) => {
  const optimizedSorted = () => {
    // sorting is the main trick
    intervals.sort((a, b) => (a[0] === b[0] ? b[0] - a[1] : a[0] - b[0]));
    let stack = [intervals[0]];
    for (let index = 1; index < intervals.length; index++) {
      let checkInterval = intervals[index];
      let stackInterval = stack[stack.length - 1];
      if (
        stackInterval[0] <= checkInterval[0] &&
        stackInterval[1] >= checkInterval[1]
      ) {
        continue;
      } else {
        stack.push(checkInterval);
      }
    }
    return stack.length;
  };
};

// console.log(
//   removeCoveredIntervals([
//     [34335, 39239],
//     [15875, 91969],
//     [29673, 66453],
//     [53548, 69161],
//     [40618, 93111],
//   ])
// );

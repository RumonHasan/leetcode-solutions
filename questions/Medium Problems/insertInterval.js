const insertInterval = (intervals, newInterval) => {
  console.log(intervals, newInterval);
};

console.log(
  insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);

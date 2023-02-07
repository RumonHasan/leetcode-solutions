const hardestWorker = (logs, n) => {
  let array = [];
  for (let index = 0; index < logs.length; index++) {
    if (index === 0) {
      array.push([logs[index][0], logs[index][1] - 0]);
    }
    if (index > 0) {
      array.push([logs[index][0], logs[index][1] - logs[index - 1][1]]);
    }
  }
  let maxLeaveTime = 0;
  for (let index in array) {
    maxLeaveTime = Math.max(array[index][1], maxLeaveTime);
  }
  let idArray = [];
  for (let index in array) {
    if (array[index][1] === maxLeaveTime) {
      idArray.push(array[index][0]);
    }
  }
  return Math.min(...idArray);
};

// console.log(
//   hardestWorker(
//     [
//       [0, 3],
//       [2, 5],
//       [0, 9],
//       [1, 15],
//     ],
//     10
//   )
// );

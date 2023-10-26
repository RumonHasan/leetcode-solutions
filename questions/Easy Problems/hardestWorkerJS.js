const hardestWorker = (n, logs) => {
  const generalIntuitiveApproach = () => {
    let collection = [[logs[0][0], logs[0][1]]];
    for (let index = 1; index < logs.length; index++) {
      const difference = Math.abs(logs[index - 1][1] - logs[index][1]);
      collection.push([logs[index][0], difference]);
    }
    let maxTime = collection[0][1];
    let id = collection[0][0];
    for (let index = 1; index < collection.length; index++) {
      if (collection[index][1] > maxTime) {
        maxTime = collection[index][1];
        id = collection[index][0];
      }
      if (collection[index][1] === maxTime) {
        if (id > collection[index][0]) {
          id = collection[index][0];
        }
      }
    }
    return id;
  };
};

// console.log(
//   hardestWorker(301, [
//     [111, 1],
//     [137, 3],
//     [83, 6],
//     [50, 7],
//     [82, 10],
//     [287, 11],
//     [137, 13],
//     [204, 14],
//     [294, 19],
//   ])
// );

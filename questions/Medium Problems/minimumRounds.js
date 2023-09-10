const minimumRounds = (tasks) => {
  const intuitiveApproach = () => {
    let map = new Map();
    let sortedTasks = tasks.sort((a, b) => a - b);
    let totalRounds = 0;
    let index = 0;
    while (index < sortedTasks.length) {
      map.has(sortedTasks[index])
        ? map.set(sortedTasks[index], map.get(sortedTasks[index]) + 1)
        : map.set(sortedTasks[index], 1);
      index++;
    }

    for (let [_, value] of map) {
      if (value === 1) {
        return -1;
      }
      const mod = value % 3;
      if (mod === 0) {
        totalRounds += value / 3;
      } else {
        totalRounds += Math.floor(value / 3 + 1);
      }
    }
    return totalRounds;
  };
};

// gotta return the minimum rounds to return all the tasks if not -1;
// console.log(
//   minimumRounds([
//     66, 66, 63, 61, 63, 63, 64, 66, 66, 65, 66, 65, 61, 67, 68, 66, 62, 67, 61,
//     64, 66, 60, 69, 66, 65, 68, 63, 60, 67, 62, 68, 60, 66, 64, 60, 60, 60, 62,
//     66, 64, 63, 65, 60, 69, 63, 68, 68, 69, 68, 61,
//   ])
// );

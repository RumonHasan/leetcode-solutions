const findUserActiveMinutes = (logs, k) => {
  let dpUniqueActiveMinutes = new Array(k).fill(0);
  let map = new Map();
  for (let index = 0; index < logs.length; index++) {
    const time = logs[index][1];
    const id = logs[index][0];
    if (map.has(id)) {
      map.get(id).push(time);
    } else {
      map.set(id, [time]);
    }
  }
  for (let [key, value] of map) {
    map.set(key, [...new Set([...value])]);
  }
  let secondMap = new Map();
  for (const [key, value] of map) {
    if (secondMap.has(value.length)) {
      secondMap.set(value.length, secondMap.get(value.length) + 1);
    } else {
      secondMap.set(value.length, 1);
    }
  }
  for (let [key, value] of secondMap) {
    dpUniqueActiveMinutes[Number(key) - 1] = value;
  }
  return dpUniqueActiveMinutes;
};

// console.log(
//   findUserActiveMinutes(
//     [
//       [305589003, 4136],
//       [305589004, 4139],
//       [305589004, 4141],
//       [305589004, 4137],
//       [305589001, 4139],
//       [305589001, 4139],
//     ],
//     6
//   )
// );

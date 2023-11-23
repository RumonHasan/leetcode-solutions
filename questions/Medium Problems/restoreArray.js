const restoreArray = (adjacentPairs) => {
  console.log(adjacentPairs);
  let pairMap = new Map();
  for (let index = 0; index < adjacentPairs.length; index++) {
    const pair = adjacentPairs[index];
    if (pairMap.has(pair[0])) {
      pairMap.set(pair[0], pairMap.get(pair[0]) + 1);
    } else {
      pairMap.set(pair[0], 1);
    }
    if (pairMap.has(pair[1])) {
      pairMap.set(pair[1], pairMap.get(pair[1]) + 1);
    } else {
      pairMap.set(pair[1], 1);
    }
  }
  console.log(pairMap);
};

console.log(
  restoreArray([
    [4, -2],
    [1, 4],
    [-3, 1],
  ])
);

const maximalNetwork = (n, roads) => {
  const uglyApproach = () => {
    let maxNumConnections = 0;
    let cityIndex = 0;
    let pathMap = new Map();
    while (cityIndex < n) {
      for (let index = 0; index < roads.length; index++) {
        if (roads[index][0] === cityIndex || roads[index][1] === cityIndex) {
          if (pathMap.has(cityIndex)) {
            pathMap.get(cityIndex).push(roads[index]);
          } else {
            pathMap.set(cityIndex, [roads[index]]);
          }
        }
      }
      cityIndex++;
    }
    // readjusting map
    console.log(pathMap);
    for (let [currentKey, currentValue] of pathMap) {
      const nextKey = currentKey + 1;
      const nextValue = pathMap.get(nextKey);
      let localArray = new Set();
      if (nextValue && nextKey) {
        for (let index = 0; index < currentValue.length; index++) {
          localArray.add(currentValue[index].sort());
        }
        for (
          let secondIndex = 0;
          secondIndex < nextValue.length;
          secondIndex++
        ) {
          localArray.add(nextValue[secondIndex].sort());
        }
        console.log(localArray);
        maxNumConnections = Math.max(maxNumConnections, localArray.size);
      }
    }

    return maxNumConnections;
  };

  console.log(uglyApproach());

  const optimizedApproach = () => {};

  console.log(optimizedApproach());
};

// first get all the connected paths
console.log(
  maximalNetwork(8, [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [5, 6],
    [5, 7],
  ])
);

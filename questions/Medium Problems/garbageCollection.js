const garbageCollection = (garbage, travel) => {
  //   console.log(garbage);
  const horribleSolution = () => {
    let totalTime = 0;
    let map = new Map();
    let indexMap = new Map();
    let index = 0;
    for (let g of garbage) {
      for (let gBageIndex in g) {
        if (!indexMap.has(g[gBageIndex])) {
          indexMap.set(g[gBageIndex], [index]);
        } else {
          indexMap.get(g[gBageIndex]).push(index);
        }
        map.set(g[gBageIndex], (map.get(g[gBageIndex]) || 0) + 1);
      }
      index++;
    }
    // getting last and first index
    for (let [key, value] of indexMap) {
      const range = [value[0], value[value.length - 1]];
      for (let index = range[0]; index < range[1]; index++) {
        totalTime += travel[index];
      }
    }
    // now taking the values of the letter count
    for (let [key, value] of map) {
      totalTime += value;
    }
    // till reaching the first garbage variable
    let firstMap = new Map();
    for (let i = 0; i < garbage.length; i++) {
      let gRow = garbage[i];
      for (let gIndex in gRow) {
        if (!firstMap.has(gRow[gIndex])) {
          firstMap.set(gRow[gIndex], i);
        }
      }
    }
    for (let [key, value] of firstMap) {
      for (let index = 0; index < value; index++) {
        totalTime += travel[index];
      }
    }
    return totalTime;
  };
};

console.log(garbageCollection(['MMM', 'PGM', 'GP'], [3, 10]));

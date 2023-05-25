const findSpecialInteger = (arr) => {
  // does not involve any algorithmic approach... plain greedy approach
  const intituitiveSolution = (arr) => {
    let map = new Map();
    for (let num of arr) {
      const number = Number(num);
      map.has(number)
        ? map.set(number, map.get(number) + 1)
        : map.set(number, 1);
    }
    let keyValueFound = 0;
    const occurencePercentage = Math.ceil((25 / 100) * arr.length);
    for (let key of map.keys()) {
      const keyValue = map.get(Number(key));
      if (occurencePercentage <= keyValue) {
        keyValueFound = keyValue;
      }
    } //
    for (let [key, value] of map) {
      if (value === keyValueFound) {
        return Number(key);
      }
    }
  };

  return intituitiveSolution(arr);
};

//console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));

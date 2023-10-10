const maxOperations = (nums, k) => {
  const generalIntuitiveApproach = () => {
    let sortedNums = nums.sort((a, b) => b - a);
    let operations = 0;
    let map = new Map();
    for (let index in sortedNums) {
      map.has(sortedNums[index])
        ? map.set(sortedNums[index], map.get(sortedNums[index]) + 1)
        : map.set(sortedNums[index], 1);
    }
    for (let index = 0; index < sortedNums.length; index++) {
      const difference = k - sortedNums[index];
      if (map.has(difference) && map.has(sortedNums[index])) {
        if (sortedNums[index] === difference && map.get(difference) === 1) {
          continue;
        }
        map.set(difference, map.get(difference) - 1);
        map.set(sortedNums[index], map.get(sortedNums[index]) - 1);
        operations++;
        (map.get(difference) <= 0 || isNaN(map.get(difference))) &&
          map.delete(difference);
        (map.get(sortedNums[index]) <= 0 ||
          isNaN(map.get(sortedNums[index]))) &&
          map.delete(sortedNums[index]);
      }
    }
    return operations;
  };
};

// // removing number of disjointed pairs that equal to k
// console.log(
//   maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)
// );

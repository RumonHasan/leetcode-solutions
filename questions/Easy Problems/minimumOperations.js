const minimumOperations = (nums) => {
  // normal greedy solution
  const greedySolution = () => {
    const sortNums = (nums) =>
      nums.sort((a, b) => a - b).filter((num) => num !== 0);
    let sortedNums = sortNums(nums);
    let counter = 0;
    while (sortedNums[sortedNums.length - 1] > 0) {
      if (sortedNums[sortedNums.length - 1] === 0) {
        break;
      }
      const minNum = sortedNums[0];
      for (let index = 0; index < sortedNums.length; index++) {
        sortedNums[index] = sortedNums[index] - minNum;
      }
      counter++;
      sortedNums = sortNums(sortedNums);
    }
    return counter;
  };

  // optimized solution with set one liner
  const optimizedSolutionUsingSets = () => {
    return [...new Set(nums)].filter((num) => num !== 0).length;
  };

  console.log(optimizedSolutionUsingSets());
};

console.log(minimumOperations([1, 5, 0, 3, 5]));

const lastStoneLeft = (stones) => {
  let cache = new Map();
  const total = stones.reduce((a, b) => a + b, 0);
  // main dfs function that takes in currIndex and currSum in order to calculate the final minimum
  const dfs = (currIndex, currSum) => {
    // base case need to find the absolute difference
    if (currIndex >= stones.length) {
      const included = currSum;
      const notIncluded = total - currSum;
      return Math.abs(included - notIncluded);
    }

    const key = `${currIndex}-${currSum}`;

    // this is for already explored result minium sum;
    if (cache.has(key)) {
      return cache.get(key);
    }

    let included = dfs(currIndex + 1, currSum + stones[currIndex]);
    let notIncluded = dfs(currIndex + 1, currSum);

    let result = Math.min(included, notIncluded);
    cache.set(key, result);

    return result;
  };

  return dfs(0, 0);
};

/**
 * Need to divide into two partition then check sums in order to get the minimum sequence for difference
 * Return the final minimum sum result
 * include the first in the currSum parition or skip
 */
console.log(lastStoneLeft([31, 26, 33, 21, 40]));

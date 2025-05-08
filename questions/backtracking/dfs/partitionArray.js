const partitionArraySum = (arr, k) => {
  let cache = new Map();

  const dfs = (currIndex) => {
    if (currIndex >= arr.length) {
      return 0;
    }
    if (cache.has(currIndex)) {
      return cache.get(currIndex);
    }
    let maxLocal = 0;
    let maxSum = 0;
    // main for loop but limiting it to max k elements
    for (let i = currIndex; i < Math.min(currIndex + k, arr.length); i++) {
      // currIndx + k keeps it within the upper bound
      maxLocal = Math.max(maxLocal, arr[i]); // setting current maxLocal
      let maxPartitionSum = maxLocal * (i - currIndex + 1); //getting the current max partition sum
      maxSum = Math.max(maxSum, maxPartitionSum + dfs(i + 1));
    }
    cache.set(currIndex, maxSum);
    return maxSum;
  };

  return dfs(0);
};

console.log(partitionArraySum([1, 15, 7, 9, 2, 5, 10], 3));

const beautifulSubsets = (nums, k) => {
  let result = [];
  nums.sort((a, b) => a - b);
  let count = 0;
  // main dfs function to extract all the subsets
  const dfs = (index, subset) => {
    if (subset.length > 0) {
      count++;
    }

    for (let i = index; i < nums.length; i++) {
      // checking whether the element difference full fill absolute condition or not
      let isIncluded = false;
      for (let num of subset) {
        const absoluteDifference = Math.abs(num - nums[i]);
        if (absoluteDifference === k) {
          isIncluded = true;
          break;
        }
      }
      if (!isIncluded) {
        // only if its false add it to subset
        // skip if included
        subset.push(nums[i]);
        dfs(i + 1, subset);
        subset.pop(); // backtracking
      }
    }
  };

  dfs(0, []);
  return count;
};

// getting the number of subsets that have two elements where absolute difference is not equal
console.log(
  beautifulSubsets([2, 4, 6, 8, 10, 12, 14, 15, 16, 17, 18, 100, 103, 106], 3)
);

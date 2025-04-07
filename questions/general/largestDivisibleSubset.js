const largestDivisibleSubset = (nums) => {
  nums.sort((a, b) => a - b);
  let map = new Map(); // will contain indices and saved subsets
  let result = [];

  // main dfs function to find the largest subsetss
  const dfs = (index) => {
    if (index >= nums.length) {
      return []; // if the index cannot find any further subset
    }
    // if the index is already present then return the mapped subset
    if (map.has(index)) {
      return map.get(index);
    }

    let maxSubset = [nums[index]]; // will always include the first as starting point
    // now to check from each starting point
    for (let j = index + 1; j < nums.length; j++) {
      const currNum = nums[j];
      if (currNum % nums[index] === 0) {
        // the current number should divide the previous since its bigger in sorted order
        const nextSubset = dfs(j); // next dfs call
        if (nextSubset.length + 1 > maxSubset.length) {
          // if next is bigger then rebuild the max subset
          maxSubset = [nums[index], ...nextSubset];
        }
      }
    }
    map.set(index, maxSubset); // caching the current largest subset

    return maxSubset; // returns the max subset
  };
  // looping required to find possible subsets from each index of the array
  for (let i = 0; i < nums.length; i++) {
    const tempRes = dfs(i); // will return the subset
    if (tempRes.length > result.length) {
      // updating the result array if its smaller than current returned subset
      result = tempRes;
    }
  }

  return result;
};

// using memoized dfs to check for the largest subset result
console.log(largestDivisibleSubset([1, 2, 3]));

// partial equal subset sum dfs approach
const partialEqualSubsetSum = (nums) => {
  // works but tle
  let total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) {
    return false;
  }
  let subTotal = total / 2;
  let map = new Map();

  const dfs = (index, currSum) => {
    const key = `${index}-${currSum}`;
    if (currSum === subTotal) {
      return true;
    }
    if (index >= nums.length) {
      return false;
    }
    if (currSum > subTotal) {
      return false;
    }
    if (map.has(key)) {
      return map.get(key);
    }
    // include first index
    const include = dfs(index + 1, currSum + nums[index]); // passing the current sum as the updated value in next js
    const notIncluded = dfs(index + 1, currSum); // not including the nums[index] in current sum;

    const res = include || notIncluded;

    map.set(key, res); // updating caching
    return res;
  };

  const currentRes = dfs(0, 0); // will return true or false based on index and current sum
  return currentRes;
};

console.log(partialEqualSubsetSum([1, 5, 11, 5]));

const combinationSumII = (candidates, target) => {
  let result = [];
  candidates.sort((a, b) => a - b); // sorting required to ignore the adjacent duplicates
  // main dfs function to find subsets
  const dfs = (currIndex, currSum, subset) => {
    // base case if the currIndex reaches the last candidate then push to the result
    // if curr sum is more then remove exploring those paths
    if (currSum > target) {
      return;
    }
    // currSum is equal target then push
    if (currSum === target) {
      result.push([...subset]);
      return;
    }
    // out of bounds
    if (currIndex >= candidates.length) {
      // if it goes out of bounds simply return
      return;
    }

    // include the current element
    subset.push(candidates[currIndex]);
    dfs(currIndex + 1, currSum + candidates[currIndex], subset); // adding to the dfs function
    subset.pop(); // for backtracking

    // skipping adjacent duplicates then running the dfs on the next element
    while (
      currIndex < candidates.length &&
      candidates[currIndex] === candidates[currIndex + 1]
    ) {
      currIndex++;
    }

    // running the dfs one the skipped element
    dfs(currIndex + 1, currSum, subset); // this dfs call currSum is not incremented because am skipping the element
  };

  dfs(0, 0, []); // starting the dfs function
  return result;
};

// using dfs to solve it by finding all the comabinations of the subsets having distinct characters onl
console.log(combinationSumII([10, 1, 2, 7, 6, 1, 5], 8));

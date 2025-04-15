const combinationSum = (candidates, target) => {
  let result = [];

  // main dfs function
  const dfs = (index, currSum, subset) => {
    if (currSum > target) {
      return;
    }
    if (currSum === target) {
      result.push([...subset]);
      return;
    }

    if (index === candidates.length) {
      return;
    }
    // choosing the element
    subset.push(candidates[index]);
    dfs(index, currSum + candidates[index], subset);
    subset.pop();
    // skipping the element
    dfs(index + 1, currSum, subset);
  };

  dfs(0, 0, []); // main dfs function iniatializer
  return result;
};

// using a dfs approach in order to acquire all the combinations that have a sum of target  and numbers can be reused
console.log(combinationSum([2, 3, 6, 7], 7));

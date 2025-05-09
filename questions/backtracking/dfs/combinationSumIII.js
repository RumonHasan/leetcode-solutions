const combinationSumIII = (k, n) => {
  let result = [];

  const dfs = (currIndex, currSum, currSub) => {
    if (currSub.length === k && currSum === n) {
      // if the length is within k then return as the base case
      result.push([...currSub]);
      return;
    }
    if (currSub.length > k || currIndex > 9 || currSum > n) {
      return;
    }
    // include first
    currSub.push(currIndex);
    let includeSum = currIndex + currSum;
    dfs(currIndex + 1, includeSum, currSub);
    currSub.pop();
    // skip
    dfs(currIndex + 1, currSum, currSub);
  };

  dfs(1, 0, []);
  return result;
};

console.log(combinationSumIII(9, 45));
